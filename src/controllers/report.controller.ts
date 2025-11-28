import { Request, Response, NextFunction } from 'express';
import { ReportService } from '../services/report.service';
import { AppError } from '../utils/app.error';

export class ReportController {
  private service = new ReportService();

  sales = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const groupBy = (req.query.groupBy as string) || 'property';
      const from = req.query.from as string | undefined;
      const to = req.query.to as string | undefined;
      const data = await this.service.salesReport(req.userId, {
        from,
        to,
        groupBy: groupBy === 'user' ? 'user' : groupBy === 'transaction' ? 'transaction' : 'property',
      });
      res.status(200).json({ success: true, data });
    } catch (err) {
      next(err);
    }
  };

  availability = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) throw new AppError('Unauthenticated', 401);
      const days = req.query.days ? Number(req.query.days) : 30;
      const data = await this.service.availabilityCalendar(req.userId, days);
      res.status(200).json({ success: true, data });
    } catch (err) {
      next(err);
    }
  };
}
