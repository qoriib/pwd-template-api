import { PrismaClient, Prisma, BookingStatus, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const decimal = (value: number | string) => new Prisma.Decimal(value.toString());

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const addDays = (base: Date, days: number) => {
  const d = new Date(base);
  d.setHours(12, 0, 0, 0); // keep noon to avoid TZ drift
  d.setDate(d.getDate() + days);
  return d;
};

const addHours = (base: Date, hours: number) => {
  const d = new Date(base);
  d.setHours(d.getHours() + hours);
  return d;
};

const buildAvailabilities = (start: Date, totalDays: number, closedOffsets: number[] = []) => {
  const closed = new Set(closedOffsets);
  return Array.from({ length: totalDays }, (_, idx) => {
    const date = addDays(start, idx);
    const isAvailable = !closed.has(idx);
    return {
      date,
      isAvailable,
      availableUnits: isAvailable ? undefined : 0,
      note: isAvailable ? null : 'Blocked by tenant',
    };
  });
};

async function main() {
  const [passwordHashUser, passwordHashTenant] = await Promise.all([
    bcrypt.hash('user12345', 10),
    bcrypt.hash('tenant12345', 10),
  ]);

  // Clean in dependency order to allow re-run.
  await prisma.review.deleteMany();
  await prisma.paymentProof.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.roomPriceAdjustment.deleteMany();
  await prisma.roomAvailability.deleteMany();
  await prisma.roomImage.deleteMany();
  await prisma.room.deleteMany();
  await prisma.propertyImage.deleteMany();
  await prisma.property.deleteMany();
  await prisma.propertyCategory.deleteMany();
  await prisma.tenantProfile.deleteMany();
  await prisma.userToken.deleteMany();
  await prisma.user.deleteMany();

  const categories = await Promise.all(
    ['Hotel', 'Apartment', 'Villa', 'Guesthouse', 'Resort'].map((name) =>
      prisma.propertyCategory.create({ data: { name } })
    )
  );

  const [tenant1, tenant2, traveler] = await Promise.all([
    prisma.user.create({
      data: {
        email: 'andi@stayhub.test',
        name: 'Andi Pratama',
        phone: '+62-812-8888-1001',
        passwordHash: passwordHashTenant,
        role: UserRole.TENANT,
        isVerified: true,
        avatarUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
      },
    }),
    prisma.user.create({
      data: {
        email: 'maria@sunbay.test',
        name: 'Maria Lestari',
        phone: '+62-813-2233-4455',
        passwordHash: passwordHashTenant,
        role: UserRole.TENANT,
        isVerified: true,
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
    }),
    prisma.user.create({
      data: {
        email: 'dina.traveler@test.com',
        name: 'Dina Traveler',
        phone: '+62-811-8899-7788',
        passwordHash: passwordHashUser,
        role: UserRole.USER,
        isVerified: true,
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      },
    }),
  ]);

  const [tenantProfile1, tenantProfile2] = await Promise.all([
    prisma.tenantProfile.create({
      data: {
        userId: tenant1.id,
        displayName: 'Urban Nest Hospitality',
        description: 'Comfortable city stays with business-friendly amenities.',
      },
    }),
    prisma.tenantProfile.create({
      data: {
        userId: tenant2.id,
        displayName: 'Sunbay Retreats',
        description: 'Beach and island villas with concierge on demand.',
      },
    }),
  ]);

  const today = new Date();

  const properties = await Promise.all([
    prisma.property.create({
      data: {
        tenantId: tenantProfile1.id,
        categoryId: categories.find((c) => c.name === 'Hotel')!.id,
        name: 'Sunrise City Hotel',
        slug: slugify('Sunrise City Hotel'),
        description:
          'Modern hotel in Jakarta CBD with coworking lounge, gym, and airport shuttle.',
        addressLine1: 'Jl. Jend. Sudirman No. 10',
        city: 'Jakarta',
        state: 'DKI Jakarta',
        postalCode: '10220',
        latitude: decimal('-6.2154'),
        longitude: decimal('106.8219'),
        images: {
          create: [
            {
              url: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210af',
              isPrimary: true,
            },
            { url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85' },
          ],
        },
      },
    }),
    prisma.property.create({
      data: {
        tenantId: tenantProfile2.id,
        categoryId: categories.find((c) => c.name === 'Villa')!.id,
        name: 'Tropical Wave Villa',
        slug: slugify('Tropical Wave Villa'),
        description:
          'Private villa near Canggu with pool, lounge deck, and daily housekeeping.',
        addressLine1: 'Jl. Raya Pantai Berawa No. 77',
        city: 'Badung',
        state: 'Bali',
        postalCode: '80361',
        latitude: decimal('-8.6500'),
        longitude: decimal('115.1385'),
        images: {
          create: [
            {
              url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
              isPrimary: true,
            },
            { url: 'https://images.unsplash.com/photo-1505693415763-3ed5e04ba4cd' },
          ],
        },
      },
    }),
  ]);

  const rooms = [];

  const sunriseDeluxe = await prisma.room.create({
    data: {
      propertyId: properties[0].id,
      name: 'Deluxe King',
      description: '32m², city view, breakfast included, smart TV, fast Wi‑Fi.',
      capacity: 2,
      totalUnits: 12,
      basePrice: decimal('850000'),
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511', isPrimary: true },
          { url: 'https://images.unsplash.com/photo-1505691938895-66d1b4ae73b7' },
        ],
      },
      availabilities: {
        create: buildAvailabilities(today, 21, [6, 13, 14]),
      },
      priceAdjustments: {
        create: [
          {
            startDate: addDays(today, 5),
            endDate: addDays(today, 7),
            type: 'PERCENTAGE',
            value: decimal('15'),
            note: 'Weekend rate',
          },
          {
            startDate: addDays(today, 14),
            endDate: addDays(today, 17),
            type: 'NOMINAL',
            value: decimal('150000'),
            note: 'Conference surcharge',
          },
        ],
      },
    },
  });
  rooms.push(sunriseDeluxe);

  const sunriseSuite = await prisma.room.create({
    data: {
      propertyId: properties[0].id,
      name: 'Executive Suite',
      description: '45m² corner suite, lounge access, espresso machine.',
      capacity: 3,
      totalUnits: 6,
      basePrice: decimal('1250000'),
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f', isPrimary: true },
          { url: 'https://images.unsplash.com/photo-1505691938895-66d1b4ae73b7' },
        ],
      },
      availabilities: {
        create: buildAvailabilities(today, 21, [2, 9, 10]),
      },
      priceAdjustments: {
        create: [
          {
            startDate: addDays(today, 0),
            endDate: addDays(today, 3),
            type: 'PERCENTAGE',
            value: decimal('10'),
            note: 'Last minute boost',
          },
          {
            startDate: addDays(today, 20),
            endDate: addDays(today, 25),
            type: 'NOMINAL',
            value: decimal('-100000'),
            note: 'Early bird',
          },
        ],
      },
    },
  });
  rooms.push(sunriseSuite);

  const tropicalOneBR = await prisma.room.create({
    data: {
      propertyId: properties[1].id,
      name: 'One Bedroom Pool Villa',
      description: 'Private pool, kitchenette, butler on call, 180m².',
      capacity: 2,
      totalUnits: 4,
      basePrice: decimal('1850000'),
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1505691938895-66d1b4ae73b7', isPrimary: true },
          { url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511' },
        ],
      },
      availabilities: {
        create: buildAvailabilities(today, 30, [5, 12, 19, 20]),
      },
      priceAdjustments: {
        create: [
          {
            startDate: addDays(today, 10),
            endDate: addDays(today, 14),
            type: 'PERCENTAGE',
            value: decimal('20'),
            note: 'Long weekend',
          },
          {
            startDate: addDays(today, 25),
            endDate: addDays(today, 30),
            type: 'NOMINAL',
            value: decimal('250000'),
            note: 'High season',
          },
        ],
      },
    },
  });
  rooms.push(tropicalOneBR);

  const tropicalTwoBR = await prisma.room.create({
    data: {
      propertyId: properties[1].id,
      name: 'Two Bedroom Family Villa',
      description: '280m², larger pool, outdoor dining, fits 4 adults + 2 kids.',
      capacity: 6,
      totalUnits: 3,
      basePrice: decimal('2650000'),
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29', isPrimary: true },
          { url: 'https://images.unsplash.com/photo-1505691938895-6fd8e74dc842' },
        ],
      },
      availabilities: {
        create: buildAvailabilities(today, 30, [1, 2, 15, 16]),
      },
      priceAdjustments: {
        create: [
          {
            startDate: addDays(today, 7),
            endDate: addDays(today, 9),
            type: 'PERCENTAGE',
            value: decimal('12'),
            note: 'Weekend premium',
          },
          {
            startDate: addDays(today, 21),
            endDate: addDays(today, 23),
            type: 'NOMINAL',
            value: decimal('300000'),
            note: 'Peak demand',
          },
        ],
      },
    },
  });
  rooms.push(tropicalTwoBR);

  const bookingNow = new Date();

  await prisma.booking.create({
    data: {
      userId: traveler.id,
      propertyId: properties[0].id,
      roomId: sunriseDeluxe.id,
      checkIn: addDays(today, 7),
      checkOut: addDays(today, 10),
      guests: 2,
      status: BookingStatus.WAITING_PAYMENT,
      paymentDueAt: addHours(bookingNow, 2),
      totalAmount: decimal('2550000'), // 3 nights * 850k
      currency: 'IDR',
    },
  });

  await prisma.booking.create({
    data: {
      userId: traveler.id,
      propertyId: properties[0].id,
      roomId: sunriseSuite.id,
      checkIn: addDays(today, 3),
      checkOut: addDays(today, 5),
      guests: 2,
      status: BookingStatus.WAITING_CONFIRMATION,
      paymentDueAt: addHours(bookingNow, 1),
      totalAmount: decimal('2500000'),
      currency: 'IDR',
      paymentProof: {
        create: {
          fileUrl: 'https://example-cdn.test/payments/proof-1023.png',
          fileName: 'proof-1023.png',
          mimeType: 'image/png',
          uploadedAt: bookingNow,
          verifiedAt: null,
        },
      },
    },
  });

  await prisma.booking.create({
    data: {
      userId: traveler.id,
      propertyId: properties[1].id,
      roomId: tropicalOneBR.id,
      checkIn: addDays(today, -14),
      checkOut: addDays(today, -11),
      guests: 2,
      status: BookingStatus.COMPLETED,
      paymentDueAt: addDays(today, -20),
      totalAmount: decimal('5550000'),
      currency: 'IDR',
      paymentProof: {
        create: {
          fileUrl: 'https://example-cdn.test/payments/proof-9881.jpg',
          fileName: 'proof-9881.jpg',
          mimeType: 'image/jpeg',
          uploadedAt: addDays(today, -21),
          verifiedAt: addDays(today, -20),
        },
      },
      review: {
        create: {
          comment: 'Great villa, spotless and the pool was warm even at night.',
          rating: 5,
          tenantReply: 'Thank you Dina, happy to host you again!',
          repliedAt: addDays(today, -9),
          userId: traveler.id,
          propertyId: properties[1].id,
        },
      },
    },
  });

  console.info('✅ Seed data inserted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
