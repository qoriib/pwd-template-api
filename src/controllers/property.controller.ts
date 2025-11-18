import { Request, Response, NextFunction } from 'express';
import { PropertyService } from '../services/property.service';

export class PropertyController {
  private service = new PropertyService();

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { city, page = '1', pageSize = '10' } = req.query;
      const result = await this.service.list({
        city: (city as string) || undefined,
        page: Number(page) || 1,
        pageSize: Number(pageSize) || 10,
      });
      res.status(200).json({ success: true, ...result });
    } catch (err) {
      next(err);
    }
  };

  destinations = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const cities = await this.service.destinations();
      res.status(200).json({ success: true, cities });
    } catch (err) {
      next(err);
    }
  };
}
