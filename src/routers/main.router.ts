import { SampleRouter } from './sample.router';
import { BookingRouter } from './booking.router';
import { AuthRouter } from './auth.router';
import { ProfileRouter } from './profile.router';
import { PropertyRouter } from './property.router';
import { TenantOrderRouter } from './tenant-order.router';
import { Router } from 'express';

export class MainRouter {
  private router: Router;
  private sampleRouter: SampleRouter;
  private bookingRouter: BookingRouter;
  private authRouter: AuthRouter;
  private profileRouter: ProfileRouter;
  private propertyRouter: PropertyRouter;
  private tenantOrderRouter: TenantOrderRouter;

  constructor() {
    this.router = Router();
    this.sampleRouter = new SampleRouter();
    this.bookingRouter = new BookingRouter();
    this.authRouter = new AuthRouter();
    this.profileRouter = new ProfileRouter();
    this.propertyRouter = new PropertyRouter();
    this.tenantOrderRouter = new TenantOrderRouter();

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use('/api/auth', this.authRouter.getRouter());
    this.router.use('/api/profile', this.profileRouter.getRouter());
    this.router.use('/api/properties', this.propertyRouter.getRouter());
    this.router.use('/api/samples', this.sampleRouter.getRouter());
    this.router.use('/api/bookings', this.bookingRouter.getRouter());
     this.router.use('/api/tenant/orders', this.tenantOrderRouter.getRouter());
  }

  public getRouter(): Router {
    return this.router;
  }
}
