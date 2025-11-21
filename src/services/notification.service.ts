import { Booking } from '@prisma/client';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM_EMAIL = process.env.RESEND_FROM || 'stayhub@example.com';

const fallbackSend = (subject: string, html: string) => {
  console.info('[Email fallback]', subject, html);
};

async function sendEmail(to: string, subject: string, html: string) {
  if (!resend) {
    fallbackSend(subject, html);
    return;
  }
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error('Resend error', error);
    fallbackSend(subject, html);
  }
}

const bookingSummary = (booking: Booking & { property?: any; room?: any }) => {
  return `
    <p><strong>Properti:</strong> ${booking.property?.name ?? ''}</p>
    <p><strong>Room:</strong> ${booking.room?.name ?? ''}</p>
    <p><strong>Check-in:</strong> ${booking.checkIn.toDateString()}</p>
    <p><strong>Check-out:</strong> ${booking.checkOut.toDateString()}</p>
    <p><strong>Tamu:</strong> ${booking.guests}</p>
    <p><strong>Total:</strong> Rp ${booking.totalAmount}</p>
  `;
};

export class NotificationService {
  sendPaymentConfirmation(booking: Booking & { property?: any; room?: any; user?: any }) {
    const subject = `Pembayaran terkonfirmasi - Booking #${booking.id}`;
    const html = `
      <p>Halo ${booking.user?.name ?? 'Pelanggan'},</p>
      <p>Pembayaran Anda telah diterima. Berikut detail pesanan:</p>
      ${bookingSummary(booking)}
      <p>Silakan cek email ini sebagai bukti. Tim kami siap membantu bila diperlukan.</p>
    `;
    sendEmail(booking.user?.email ?? '', subject, html);
  }

  sendPaymentRejected(booking: Booking & { user?: any }) {
    const subject = `Bukti pembayaran ditolak - Booking #${booking.id}`;
    const html = `
      <p>Halo ${booking.user?.name ?? 'Pelanggan'},</p>
      <p>Bukti pembayaran Anda ditolak. Mohon unggah ulang bukti pembayaran yang valid.</p>
    `;
    sendEmail(booking.user?.email ?? '', subject, html);
  }

  sendCheckInReminder(booking: Booking & { property?: any; room?: any; user?: any }) {
    const subject = `Pengingat check-in - Booking #${booking.id}`;
    const html = `
      <p>Halo ${booking.user?.name ?? 'Pelanggan'},</p>
      <p>Pengingat bahwa besok Anda akan check-in.</p>
      ${bookingSummary(booking)}
      <p>Pastikan membawa identitas dan mengikuti aturan properti.</p>
    `;
    sendEmail(booking.user?.email ?? '', subject, html);
  }
}
