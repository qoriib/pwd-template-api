import { PrismaClient, BookingStatus } from '@prisma/client';
import { addDays, startOfDay, endOfDay } from 'date-fns';
import { NotificationService } from '../services/notification.service';

const prisma = new PrismaClient();
const notification = new NotificationService();

async function run() {
  const tomorrowStart = startOfDay(addDays(new Date(), 1));
  const tomorrowEnd = endOfDay(addDays(new Date(), 1));

  const bookings = await prisma.booking.findMany({
    where: {
      status: BookingStatus.PROCESSING,
      checkInReminderSentAt: null,
      checkIn: { gte: tomorrowStart, lte: tomorrowEnd },
    },
    include: { property: true, room: true },
  });

  for (const booking of bookings) {
    notification.sendCheckInReminder(booking);
    await prisma.booking.update({
      where: { id: booking.id },
      data: { checkInReminderSentAt: new Date() },
    });
  }

  console.info(`Processed ${bookings.length} check-in reminders.`);
}

run()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
