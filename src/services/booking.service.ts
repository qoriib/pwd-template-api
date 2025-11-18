import { PrismaClient, BookingStatus, Prisma } from '@prisma/client';
import { AppError } from '../utils/app.error';
import { differenceInCalendarDays, isAfter, isBefore, isEqual, parseISO } from 'date-fns';

const prisma = new PrismaClient();

const parseDate = (value: string) => {
  const date = parseISO(value);
  if (Number.isNaN(date.getTime())) throw new AppError('Invalid date format', 400);
  return date;
};

const overlaps = (startA: Date, endA: Date, startB: Date, endB: Date) =>
  isBefore(startA, endB) && isAfter(endA, startB);

export class BookingService {
  async createBooking(dto: {
    userId: number;
    propertyId: number;
    roomId: number;
    checkIn: string;
    checkOut: string;
    guests: number;
  }) {
    const { userId, propertyId, roomId, checkIn, checkOut, guests } = dto;

    const start = parseDate(checkIn);
    const end = parseDate(checkOut);
    if (!isBefore(start, end)) throw new AppError('checkIn must be before checkOut', 400);

    const nights = differenceInCalendarDays(end, start);
    if (nights <= 0) throw new AppError('Stay must be at least 1 night', 400);

    const room = await prisma.room.findFirst({
      where: { id: roomId, propertyId },
      include: { availabilities: true, property: true },
    });
    if (!room) throw new AppError('Room not found for this property', 404);

    // Check availability overrides
    for (let i = 0; i < nights; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      date.setHours(0, 0, 0, 0);
      const override = room.availabilities.find((a) => isEqual(a.date, date));
      if (override && !override.isAvailable) {
        throw new AppError('Room is not available on selected dates', 400);
      }
    }

    // Basic overlapping check against existing bookings
    const activeStatuses: BookingStatus[] = [
      BookingStatus.WAITING_PAYMENT,
      BookingStatus.WAITING_CONFIRMATION,
      BookingStatus.PROCESSING,
      BookingStatus.COMPLETED,
    ];
    const overlapping = await prisma.booking.count({
      where: {
        roomId,
        status: { in: activeStatuses },
        AND: [{ checkIn: { lt: end } }, { checkOut: { gt: start } }],
      },
    });
    if (overlapping >= room.totalUnits) {
      throw new AppError('Room is fully booked for the selected dates', 400);
    }

    const paymentDueAt = new Date();
    paymentDueAt.setHours(paymentDueAt.getHours() + 1); // 1 hour SLA to upload payment proof

    const totalAmount = new Prisma.Decimal(room.basePrice).mul(nights);

    return prisma.booking.create({
      data: {
        userId,
        propertyId,
        roomId,
        checkIn: start,
        checkOut: end,
        guests,
        status: BookingStatus.WAITING_PAYMENT,
        paymentDueAt,
        totalAmount,
        currency: 'IDR',
      },
      include: {
        property: true,
        room: true,
      },
    });
  }

  async listBookings(params: {
    userId: number;
    page: number;
    pageSize: number;
    status?: BookingStatus;
    startDate?: string;
    endDate?: string;
    q?: string;
  }) {
    const { userId, page, pageSize, status, startDate, endDate, q } = params;

    const where: Prisma.BookingWhereInput = { userId };
    if (status) where.status = status;
    if (startDate) where.checkIn = { gte: parseDate(startDate) };
    if (endDate) where.checkOut = { lte: parseDate(endDate) };
    if (q) where.id = Number(q) || undefined;

    const [total, data] = await Promise.all([
      prisma.booking.count({ where }),
      prisma.booking.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          property: true,
          room: true,
          paymentProof: true,
        },
      }),
    ]);

    return {
      data,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize) || 1,
      },
    };
  }

  async attachPaymentProof(options: {
    bookingId: number;
    userId: number;
    file: { path: string; mimetype: string; originalname: string };
  }) {
    const booking = await prisma.booking.findFirst({
      where: { id: options.bookingId, userId: options.userId },
      include: { paymentProof: true },
    });
    if (!booking) throw new AppError('Booking not found', 404);
    if (booking.paymentProof) throw new AppError('Payment proof already uploaded', 400);
    if (booking.status !== BookingStatus.WAITING_PAYMENT) {
      throw new AppError('Booking is not awaiting payment', 400);
    }

    return prisma.booking.update({
      where: { id: booking.id },
      data: {
        status: BookingStatus.WAITING_CONFIRMATION,
        paymentProof: {
          create: {
            fileUrl: options.file.path,
            fileName: options.file.originalname,
            mimeType: options.file.mimetype,
          },
        },
      },
      include: { paymentProof: true },
    });
  }

  async cancelBooking(bookingId: number, userId: number) {
    const booking = await prisma.booking.findFirst({
      where: { id: bookingId, userId },
      include: { paymentProof: true },
    });
    if (!booking) throw new AppError('Booking not found', 404);
    if (booking.paymentProof) throw new AppError('Cannot cancel after uploading payment proof', 400);
    if (booking.status !== BookingStatus.WAITING_PAYMENT) {
      throw new AppError('Only bookings waiting for payment can be cancelled', 400);
    }

    return prisma.booking.update({
      where: { id: booking.id },
      data: { status: BookingStatus.CANCELLED },
    });
  }
}
