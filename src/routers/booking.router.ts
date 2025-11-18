import { Router } from 'express';
import { BookingController } from '../controllers/booking.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { paymentProofUpload } from '../middlewares/upload.middleware';

export class BookingRouter {
  private router: Router;
  private controller: BookingController;

  constructor() {
    this.router = Router();
    this.controller = new BookingController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/', AuthMiddleware.requireUser, AuthMiddleware.requireVerified, this.controller.createBooking);

    this.router.get(
      '/',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireVerified,
      this.controller.listBookings
    );

    this.router.post(
      '/:id/payment-proof',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireVerified,
      paymentProofUpload,
      this.controller.uploadPaymentProof
    );

    this.router.post(
      '/:id/cancel',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireVerified,
      this.controller.cancelBooking
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
