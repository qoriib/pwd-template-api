import { Request, Response, NextFunction } from 'express';
import { ProfileService } from '../services/profile.service';
import { AppError } from '../utils/app.error';

export class ProfileController {
  private service = new ProfileService();

  me = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const user = await this.service.getProfile(req.userId);
      res.status(200).json({ success: true, user });
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const { name, phone } = req.body;
      const user = await this.service.updateProfile(req.userId, { name, phone });
      res.status(200).json({ success: true, user });
    } catch (err) {
      next(err);
    }
  };

  updateEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const { email } = req.body;
      const result = await this.service.updateEmail(req.userId, email);
      res.status(200).json({ success: true, message: 'Email updated, please verify.', verifyToken: result.verifyToken });
    } catch (err) {
      next(err);
    }
  };

  uploadAvatar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      if (!req.file) throw new AppError('File required', 400);
      const user = await this.service.updateAvatar(req.userId, req.file.path);
      res.status(200).json({ success: true, user });
    } catch (err) {
      next(err);
    }
  };

  updatePassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const { currentPassword, newPassword } = req.body;
      if (!currentPassword || !newPassword) throw new AppError('Missing fields', 400);
      const user = await this.service.updatePassword(req.userId, currentPassword, newPassword);
      res.status(200).json({ success: true, user });
    } catch (err) {
      next(err);
    }
  };

  resendVerification = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const token = await this.service.resendVerification(req.userId);
      res.status(200).json({ success: true, ...token });
    } catch (err) {
      next(err);
    }
  };
}
