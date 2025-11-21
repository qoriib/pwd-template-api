import { Router } from 'express';
import { TenantOrderController } from '../controllers/tenant-order.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class TenantOrderRouter {
  private router: Router;
  private controller: TenantOrderController;

  constructor() {
    this.router = Router();
    this.controller = new TenantOrderController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireTenant,
      AuthMiddleware.requireVerified,
      this.controller.list
    );
    this.router.post(
      '/:id/confirm',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireTenant,
      AuthMiddleware.requireVerified,
      this.controller.confirmPayment
    );
    this.router.post(
      '/:id/cancel',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireTenant,
      AuthMiddleware.requireVerified,
      this.controller.cancelBooking
    );
    this.router.post(
      '/:id/reminder',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireTenant,
      AuthMiddleware.requireVerified,
      this.controller.reminder
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
