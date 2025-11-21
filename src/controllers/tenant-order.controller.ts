import { Request, Response, NextFunction } from 'express';
import { TenantOrderService } from '../services/tenant-order.service';
import { BookingStatus } from '@prisma/client';
import { AppError } from '../utils/app.error';

export class TenantOrderController {
  private service = new TenantOrderService();

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
      const pageSize = Number(req.query.pageSize) > 0 ? Number(req.query.pageSize) : 10;
      const status = req.query.status ? (req.query.status as BookingStatus) : undefined;
      const result = await this.service.listOrders(req.userId, { status, page, pageSize });
      res.status(200).json({ success: true, ...result });
    } catch (err) {
      next(err);
    }
  };

  confirmPayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const action = req.body.action === 'approve' ? 'approve' : 'reject';
      const bookingId = Number(req.params.id);
      if (!bookingId) throw new AppError('Invalid booking id', 400);
      const updated = await this.service.confirmPayment(req.userId, bookingId, action);
      res.status(200).json({ success: true, data: updated });
    } catch (err) {
      next(err);
    }
  };

  cancelBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const bookingId = Number(req.params.id);
      if (!bookingId) throw new AppError('Invalid booking id', 400);
      const updated = await this.service.cancelBooking(req.userId, bookingId);
      res.status(200).json({ success: true, data: updated });
    } catch (err) {
      next(err);
    }
  };

  reminder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const bookingId = Number(req.params.id);
      if (!bookingId) throw new AppError('Invalid booking id', 400);
      const result = await this.service.sendReminder(req.userId, bookingId);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  };
}
