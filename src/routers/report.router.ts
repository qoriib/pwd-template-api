import { Router } from 'express';
import { ReportController } from '../controllers/report.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class ReportRouter {
  private router: Router;
  private controller: ReportController;

  constructor() {
    this.router = Router();
    this.controller = new ReportController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/sales',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireTenant,
      AuthMiddleware.requireVerified,
      this.controller.sales
    );
    this.router.get(
      '/availability',
      AuthMiddleware.requireUser,
      AuthMiddleware.requireTenant,
      AuthMiddleware.requireVerified,
      this.controller.availability
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
