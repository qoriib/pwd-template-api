import { Router } from 'express';
import { ReviewController } from '../controllers/review.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class ReviewRouter {
  private router: Router;
  private controller: ReviewController;

  constructor() {
    this.router = Router();
    this.controller = new ReviewController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/', AuthMiddleware.requireUser, AuthMiddleware.requireVerified, this.controller.create);
    this.router.post(
      '/:id/reply',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireTenant,
      AuthMiddleware.requireVerified,
      this.controller.reply
    );
    this.router.get('/property/:id', this.controller.listByProperty);
  }

  public getRouter(): Router {
    return this.router;
  }
}
