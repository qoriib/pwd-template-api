import { Router } from 'express';
import { ProfileController } from '../controllers/profile.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { avatarUpload } from '../middlewares/upload.middleware';

export class ProfileRouter {
  private router: Router;
  private controller: ProfileController;

  constructor() {
    this.router = Router();
    this.controller = new ProfileController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/me', AuthMiddleware.requireUser, this.controller.me);
    this.router.put('/', AuthMiddleware.requireUser, this.controller.update);
    this.router.put('/email', AuthMiddleware.requireUser, this.controller.updateEmail);
    this.router.post('/avatar', AuthMiddleware.requireUser, avatarUpload, this.controller.uploadAvatar);
    this.router.put('/password', AuthMiddleware.requireUser, this.controller.updatePassword);
    this.router.post('/resend-verification', AuthMiddleware.requireUser, this.controller.resendVerification);
  }

  public getRouter(): Router {
    return this.router;
  }
}
