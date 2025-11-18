import { Request, Response, NextFunction } from 'express';
import { BookingService } from '../services/booking.service';
import { AppError } from '../utils/app.error';
import { BookingStatus } from '@prisma/client';

const parseNumber = (value: unknown, field: string) => {
  const num = Number(value);
  if (!value || Number.isNaN(num)) throw new AppError(`${field} is required`, 400);
  return num;
};

export class BookingController {
  private bookingService = new BookingService();

  createBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.userId;
      if (!userId) throw new AppError('Unauthenticated', 401);

      const propertyId = parseNumber(req.body.propertyId, 'propertyId');
      const roomId = parseNumber(req.body.roomId, 'roomId');
      const guests = parseNumber(req.body.guests, 'guests');
      const { checkIn, checkOut } = req.body;

      const booking = await this.bookingService.createBooking({
        userId,
        propertyId,
        roomId,
        checkIn,
        checkOut,
        guests,
      });

      res.status(201).json({ success: true, data: booking });
    } catch (err) {
      next(err);
    }
  };

  listBookings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.userId;
      if (!userId) throw new AppError('Unauthenticated', 401);

      const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
      const pageSize = Number(req.query.pageSize) > 0 ? Number(req.query.pageSize) : 10;
      const status = req.query.status as BookingStatus | undefined;
      const startDate = req.query.startDate as string | undefined;
      const endDate = req.query.endDate as string | undefined;
      const q = req.query.q as string | undefined;

      const result = await this.bookingService.listBookings({
        userId,
        page,
        pageSize,
        status,
        startDate,
        endDate,
        q,
      });

      res.status(200).json({ success: true, ...result });
    } catch (err) {
      next(err);
    }
  };

  uploadPaymentProof = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.userId;
      if (!userId) throw new AppError('Unauthenticated', 401);
      if (!req.file) throw new AppError('File is required', 400);

      const bookingId = parseNumber(req.params.id, 'bookingId');

      const updated = await this.bookingService.attachPaymentProof({
        bookingId,
        userId,
        file: {
          path: req.file.path,
          mimetype: req.file.mimetype,
          originalname: req.file.originalname,
        },
      });

      res.status(200).json({ success: true, data: updated });
    } catch (err) {
      next(err);
    }
  };

  cancelBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.userId;
      if (!userId) throw new AppError('Unauthenticated', 401);
      const bookingId = parseNumber(req.params.id, 'bookingId');

      const updated = await this.bookingService.cancelBooking(bookingId, userId);
      res.status(200).json({ success: true, data: updated });
    } catch (err) {
      next(err);
    }
  };
}
