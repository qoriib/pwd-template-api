import { Request, Response, NextFunction } from 'express';
import { ReviewService } from '../services/review.service';
import { AppError } from '../utils/app.error';

export class ReviewController {
  private service = new ReviewService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const { bookingId, comment, rating } = req.body;
      if (!bookingId || !comment) throw new AppError('bookingId and comment required', 400);
      const review = await this.service.createReview(req.userId, {
        bookingId: Number(bookingId),
        comment,
        rating: rating ? Number(rating) : undefined,
      });
      res.status(201).json({ success: true, data: review });
    } catch (err) {
      next(err);
    }
  };

  reply = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const reviewId = Number(req.params.id);
      const { reply } = req.body;
      if (!reviewId || !reply) throw new AppError('reviewId and reply required', 400);
      const updated = await this.service.replyReview(req.userId, reviewId, reply);
      res.status(200).json({ success: true, data: updated });
    } catch (err) {
      next(err);
    }
  };

  listByProperty = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const propertyId = Number(req.params.id);
      if (!propertyId) throw new AppError('Invalid property id', 400);
      const reviews = await this.service.listByProperty(propertyId);
      res.status(200).json({ success: true, data: reviews });
    } catch (err) {
      next(err);
    }
  };
}
