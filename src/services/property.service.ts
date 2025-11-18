import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PropertyService {
  async list(params: { city?: string; page: number; pageSize: number }) {
    const where = params.city ? { city: params.city } : {};
    const [total, data] = await Promise.all([
      prisma.property.count({ where }),
      prisma.property.findMany({
        where,
        skip: (params.page - 1) * params.pageSize,
        take: params.pageSize,
        orderBy: { createdAt: 'desc' },
        include: { images: true, rooms: true, category: true },
      }),
    ]);
    return {
      data,
      pagination: {
        page: params.page,
        pageSize: params.pageSize,
        total,
        totalPages: Math.ceil(total / params.pageSize) || 1,
      },
    };
  }

  async destinations() {
    const cities = await prisma.property.findMany({
      select: { city: true },
      distinct: ['city'],
      orderBy: { city: 'asc' },
    });
    return cities.map((c) => c.city);
  }
}
