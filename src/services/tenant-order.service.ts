import { PrismaClient, BookingStatus } from '@prisma/client';
import { AppError } from '../utils/app.error';
import { NotificationService } from './notification.service';

const prisma = new PrismaClient();

export class TenantOrderService {
  private notification = new NotificationService();

  private async getTenantPropertyIds(userId: number) {
    const tenant = await prisma.tenantProfile.findUnique({
      where: { userId },
      include: { properties: true },
    });
    if (!tenant) throw new AppError('Tenant profile not found', 404);
    if (!tenant.properties.length) return [];
    return tenant.properties.map((p) => p.id);
  }

  async listOrders(userId: number, params: { status?: BookingStatus; page: number; pageSize: number }) {
    const propertyIds = await this.getTenantPropertyIds(userId);
    if (!propertyIds.length) {
      return { data: [], pagination: { page: params.page, pageSize: params.pageSize, total: 0, totalPages: 1 } };
    }
    const where: any = { propertyId: { in: propertyIds } };
    if (params.status) where.status = params.status;

    const [total, data] = await Promise.all([
      prisma.booking.count({ where }),
      prisma.booking.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (params.page - 1) * params.pageSize,
        take: params.pageSize,
        include: {
          property: true,
          room: true,
          user: true,
          paymentProof: true,
        },
      }),
    ]);

    return {
      data,
      pagination: {
        page: params.page,
        pageSize: params.pageSize,
        total,
        totalPages: Math.max(1, Math.ceil(total / params.pageSize)),
      },
    };
  }

  private async findTenantBooking(userId: number, bookingId: number) {
    const propertyIds = await this.getTenantPropertyIds(userId);
    const booking = await prisma.booking.findFirst({
      where: { id: bookingId, propertyId: { in: propertyIds } },
      include: { paymentProof: true, property: true, room: true, user: true },
    });
    if (!booking) throw new AppError('Booking not found for this tenant', 404);
    return booking;
  }

  async confirmPayment(
    userId: number,
    bookingId: number,
    action: 'approve' | 'reject'
  ) {
    const booking = await this.findTenantBooking(userId, bookingId);

    if (action === 'approve') {
      if (booking.status !== BookingStatus.WAITING_CONFIRMATION) {
        throw new AppError('Booking not waiting confirmation', 400);
      }
      if (!booking.paymentProof) throw new AppError('No payment proof to approve', 400);

      const updated = await prisma.booking.update({
        where: { id: booking.id },
        data: {
          status: BookingStatus.PROCESSING,
          paymentProof: { update: { verifiedAt: new Date() } },
        },
        include: { property: true, room: true, user: true },
      });

      this.notification.sendPaymentConfirmation(updated);
      return updated;
    }

    // reject branch
    if (!booking.paymentProof) throw new AppError('No payment proof to reject', 400);
    if (booking.status !== BookingStatus.WAITING_CONFIRMATION) {
      throw new AppError('Booking not waiting confirmation', 400);
    }
    await prisma.paymentProof.delete({ where: { bookingId: booking.id } });
    const updated = await prisma.booking.update({
      where: { id: booking.id },
      data: { status: BookingStatus.WAITING_PAYMENT },
      include: { property: true, room: true, user: true },
    });
    this.notification.sendPaymentRejected(updated);
    return updated;
  }

  async cancelBooking(userId: number, bookingId: number) {
    const booking = await this.findTenantBooking(userId, bookingId);
    if (booking.paymentProof) throw new AppError('Cannot cancel after payment proof uploaded', 400);
    if (booking.status !== BookingStatus.WAITING_PAYMENT) {
      throw new AppError('Only waiting payment bookings can be cancelled', 400);
    }
    return prisma.booking.update({
      where: { id: booking.id },
      data: { status: BookingStatus.CANCELLED },
    });
  }

  async markCompleted(userId: number, bookingId: number) {
    const booking = await this.findTenantBooking(userId, bookingId);
    if (booking.status !== BookingStatus.PROCESSING) {
      throw new AppError('Only processing bookings can be completed', 400);
    }
    return prisma.booking.update({
      where: { id: booking.id },
      data: { status: BookingStatus.COMPLETED },
    });
  }

  async sendReminder(userId: number, bookingId: number) {
    const booking = await this.findTenantBooking(userId, bookingId);
    this.notification.sendCheckInReminder(booking);
    return booking;
  }
}
