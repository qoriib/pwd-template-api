import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';
import { AppError } from '../utils/app.error';

export class AuthController {
  private authService = new AuthService();

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, name, password, role } = req.body;
      if (!email || !name || !password) throw new AppError('Missing fields', 400);
      const result = await this.authService.register({ email, name, password, role });
      res
        .status(201)
        .json({ success: true, message: 'Registered. Verify email using the token.', verifyToken: result.verifyToken });
    } catch (err) {
      next(err);
    }
  };

  verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token, password } = req.body;
      if (!token) throw new AppError('Token required', 400);
      const user = await this.authService.verifyEmail(token, password);
      res.status(200).json({ success: true, user });
    } catch (err) {
      next(err);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw new AppError('Missing fields', 400);
      const result = await this.authService.login(email, password);
      res.status(200).json({ success: true, ...result });
    } catch (err) {
      next(err);
    }
  };

  requestReset = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      if (!email) throw new AppError('Email required', 400);
      const token = await this.authService.requestReset(email);
      res.status(200).json({ success: true, message: 'Reset token created', resetToken: token });
    } catch (err) {
      next(err);
    }
  };

  confirmReset = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token, password } = req.body;
      if (!token || !password) throw new AppError('Token and password required', 400);
      await this.authService.confirmReset(token, password);
      res.status(200).json({ success: true, message: 'Password updated' });
    } catch (err) {
      next(err);
    }
  };
}
