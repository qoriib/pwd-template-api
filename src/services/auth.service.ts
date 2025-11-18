import { PrismaClient, TokenType, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/app.error';
import { JWT_SECRET_KEY } from '../config';

const prisma = new PrismaClient();

const TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

export class AuthService {
  async register(payload: { email: string; name: string; password: string; role?: string }) {
    const exists = await prisma.user.findUnique({ where: { email: payload.email } });
    if (exists) throw new AppError('Email already registered', 400);

    const hash = await bcrypt.hash(payload.password, 10);
    const user = await prisma.user.create({
      data: {
        email: payload.email,
        name: payload.name,
        passwordHash: hash,
        role: payload.role === 'TENANT' ? UserRole.TENANT : UserRole.USER,
        isVerified: false,
      },
    });

    const verifyToken = await this.createToken(user.id, TokenType.EMAIL_VERIFY);
    return { verifyToken };
  }

  public async createToken(userId: number, type: TokenType) {
    const tokenValue = `${type}-${userId}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MS);
    await prisma.userToken.create({
      data: { userId, type, token: tokenValue, expiresAt },
    });
    return tokenValue;
  }

  async verifyEmail(token: string, password?: string) {
    const record = await prisma.userToken.findUnique({ where: { token } });
    if (!record || record.type !== TokenType.EMAIL_VERIFY) {
      throw new AppError('Invalid token', 400);
    }
    if (record.consumedAt) throw new AppError('Token already used', 400);
    if (record.expiresAt < new Date()) throw new AppError('Token expired', 400);

    const user = await prisma.user.findUnique({ where: { id: record.userId } });
    if (!user) throw new AppError('User not found', 404);

    const passwordHash = password ? await bcrypt.hash(password, 10) : user.passwordHash;

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { isVerified: true, passwordHash },
    });

    await prisma.userToken.update({
      where: { id: record.id },
      data: { consumedAt: new Date() },
    });

    return updated;
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.passwordHash) throw new AppError('Invalid credentials', 401);
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) throw new AppError('Invalid credentials', 401);

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET_KEY || 'secret', {
      expiresIn: '12h',
    });

    return { token, user };
  }

  async requestReset(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new AppError('User not found', 404);
    return this.createToken(user.id, TokenType.RESET_PASSWORD);
  }

  async confirmReset(token: string, password: string) {
    const record = await prisma.userToken.findUnique({ where: { token } });
    if (!record || record.type !== TokenType.RESET_PASSWORD) throw new AppError('Invalid token', 400);
    if (record.consumedAt) throw new AppError('Token already used', 400);
    if (record.expiresAt < new Date()) throw new AppError('Token expired', 400);

    const user = await prisma.user.findUnique({ where: { id: record.userId } });
    if (!user) throw new AppError('User not found', 404);

    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.update({ where: { id: user.id }, data: { passwordHash } });
    await prisma.userToken.update({ where: { id: record.id }, data: { consumedAt: new Date() } });
  }
}
