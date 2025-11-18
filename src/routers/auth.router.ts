import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

export class AuthRouter {
  private router: Router;
  private controller: AuthController;

  constructor() {
    this.router = Router();
    this.controller = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.controller.register);
    this.router.post('/verify-email', this.controller.verifyEmail);
    this.router.post('/login', this.controller.login);
    this.router.post('/reset-password-request', this.controller.requestReset);
    this.router.post('/reset-password-confirm', this.controller.confirmReset);
  }

  public getRouter(): Router {
    return this.router;
  }
}
