import { PrismaClient } from '@prisma/client';
import { AppError } from '../utils/app.error';
import { startOfDay, endOfDay, parseISO } from 'date-fns';

const prisma = new PrismaClient();

const parseDate = (val?: string) => {
  if (!val) return undefined;
  const d = parseISO(val);
  if (Number.isNaN(d.getTime())) throw new AppError('Invalid date', 400);
  return d;
};

export class ReportService {
  private async tenantPropertyIds(userId: number) {
    const tenant = await prisma.tenantProfile.findUnique({
      where: { userId },
      include: { properties: true },
    });
    if (!tenant) throw new AppError('Tenant profile not found', 404);
    return tenant.properties.map((p) => p.id);
  }

  async salesReport(userId: number, opts: { from?: string; to?: string; groupBy: 'property' | 'user' | 'transaction' }) {
    const propertyIds = await this.tenantPropertyIds(userId);
    const from = opts.from ? startOfDay(parseDate(opts.from)!) : undefined;
    const to = opts.to ? endOfDay(parseDate(opts.to)!) : undefined;
    const where: any = { propertyId: { in: propertyIds } };
    if (from || to) where.checkIn = { gte: from, lte: to };

    if (opts.groupBy === 'transaction') {
      const data = await prisma.booking.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          totalAmount: true,
          status: true,
          createdAt: true,
          user: { select: { id: true, name: true, email: true } },
          property: { select: { id: true, name: true } },
        },
      });
      return data;
    }

    if (opts.groupBy === 'user') {
      const data = await prisma.booking.groupBy({
        by: ['userId'],
        where,
        _sum: { totalAmount: true },
        _count: { _all: true },
      });
      const users = await prisma.user.findMany({ where: { id: { in: data.map((d) => d.userId) } } });
      return data.map((d) => ({
        userId: d.userId,
        user: users.find((u) => u.id === d.userId),
        totalAmount: d._sum.totalAmount,
        count: d._count._all,
      }));
    }

    // group by property
    const data = await prisma.booking.groupBy({
      by: ['propertyId'],
      where,
      _sum: { totalAmount: true },
      _count: { _all: true },
    });
    const props = await prisma.property.findMany({ where: { id: { in: data.map((d) => d.propertyId) } } });
    return data.map((d) => ({
      propertyId: d.propertyId,
      property: props.find((p) => p.id === d.propertyId),
      totalAmount: d._sum.totalAmount,
      count: d._count._all,
    }));
  }

  async availabilityCalendar(userId: number, days = 30) {
    const propertyIds = await this.tenantPropertyIds(userId);
    const properties = await prisma.property.findMany({
      where: { id: { in: propertyIds } },
      include: {
        rooms: {
          include: { availabilities: true },
        },
      },
    });
    return { days, properties };
  }
}
