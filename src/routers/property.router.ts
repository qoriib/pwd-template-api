import { Router } from 'express';
import { PropertyController } from '../controllers/property.controller';

export class PropertyRouter {
  private router: Router;
  private controller: PropertyController;

  constructor() {
    this.router = Router();
    this.controller = new PropertyController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.controller.list);
    this.router.get('/destinations', this.controller.destinations);
  }

  public getRouter(): Router {
    return this.router;
  }
}
