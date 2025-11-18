import { PrismaClient } from '@prisma/client';
import { AppError } from '../utils/app.error';
import { AuthService } from './auth.service';
import bcrypt from 'bcryptjs';
import { TokenType } from '@prisma/client';

const prisma = new PrismaClient();

export class ProfileService {
  private authService = new AuthService();

  async getProfile(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { tenantProfile: true },
    });
    if (!user) throw new AppError('User not found', 404);
    return user;
  }

  async updateProfile(userId: number, payload: { name?: string; phone?: string }) {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { name: payload.name, phone: payload.phone },
    });
    return user;
  }

  async updateEmail(userId: number, email: string) {
    if (!email) throw new AppError('Email required', 400);
    const exists = await prisma.user.findFirst({ where: { email, id: { not: userId } } });
    if (exists) throw new AppError('Email already used', 400);
    const user = await prisma.user.update({
      where: { id: userId },
      data: { email, isVerified: false },
    });
    const verifyToken = await this.authService.createToken(user.id, TokenType.EMAIL_VERIFY);
    return { verifyToken };
  }

  async updateAvatar(userId: number, filePath: string) {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { avatarUrl: filePath },
    });
    return user;
  }

  async updatePassword(userId: number, currentPassword: string, newPassword: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.passwordHash) throw new AppError('User not found', 404);
    const match = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!match) throw new AppError('Current password is incorrect', 400);
    const newHash = await bcrypt.hash(newPassword, 10);
    return prisma.user.update({ where: { id: userId }, data: { passwordHash: newHash } });
  }

  async resendVerification(userId: number) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new AppError('User not found', 404);
    if (user.isVerified) throw new AppError('User already verified', 400);
    const token = await this.authService.createToken(user.id, TokenType.EMAIL_VERIFY);
    return { verifyToken: token };
  }
}
