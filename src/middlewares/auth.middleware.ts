import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AuthMiddleware {
  static requireUser(req: Request, _res: Response, next: NextFunction) {
    const authorization = req.header('authorization') || '';
    const token = authorization.startsWith('Bearer ') ? authorization.replace('Bearer ', '') : null;
    if (!token) return next(new AppError('Unauthenticated', 401));
    try {
      const decoded = jwt.verify(token, JWT_SECRET_KEY || 'secret') as { userId: number; role: string };
      req.userId = decoded.userId;
      req.userRole = decoded.role;
      return next();
    } catch (err) {
      return next(new AppError('Invalid token', 401));
    }
  }

  static requireVerified(req: Request, _res: Response, next: NextFunction) {
    if (!req.userId) return next(new AppError('Unauthenticated', 401));
    prisma.user
      .findUnique({ where: { id: req.userId } })
      .then((user) => {
        if (!user) throw new AppError('Unauthenticated', 401);
        if (!user.isVerified) throw new AppError('Email not verified', 403);
        next();
      })
      .catch((err) => next(err));
  }
}
