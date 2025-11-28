import { PrismaClient, BookingStatus } from '@prisma/client';
import { AppError } from '../utils/app.error';
import { isAfter } from 'date-fns';

const prisma = new PrismaClient();

export class ReviewService {
  async createReview(userId: number, payload: { bookingId: number; comment: string; rating?: number }) {
    const booking = await prisma.booking.findFirst({
      where: { id: payload.bookingId, userId },
      include: { review: true },
    });
    if (!booking) throw new AppError('Booking not found', 404);
    if (booking.review) throw new AppError('Review already exists for this booking', 400);
    if (booking.status !== BookingStatus.COMPLETED) {
      throw new AppError('Review is only allowed after stay is completed', 400);
    }
    if (isAfter(new Date(), booking.checkOut) === false) {
      throw new AppError('Review can be submitted after check-out date', 400);
    }

    return prisma.review.create({
      data: {
        bookingId: booking.id,
        propertyId: booking.propertyId,
        userId: booking.userId,
        comment: payload.comment,
        rating: payload.rating,
      },
    });
  }

  async replyReview(tenantUserId: number, reviewId: number, reply: string) {
    const tenant = await prisma.tenantProfile.findUnique({
      where: { userId: tenantUserId },
      include: { properties: true },
    });
    if (!tenant) throw new AppError('Tenant profile not found', 404);
    const propertyIds = tenant.properties.map((p) => p.id);
    if (!propertyIds.length) throw new AppError('Tenant has no properties', 400);

    const review = await prisma.review.findFirst({
      where: { id: reviewId, propertyId: { in: propertyIds } },
    });
    if (!review) throw new AppError('Review not found for this tenant', 404);

    return prisma.review.update({
      where: { id: review.id },
      data: {
        tenantReply: reply,
        repliedAt: new Date(),
      },
    });
  }

  async listByProperty(propertyId: number) {
    return prisma.review.findMany({
      where: { propertyId },
      include: { user: true, booking: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
