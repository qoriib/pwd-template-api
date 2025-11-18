import multer from 'multer';
import { Request } from 'express';
import { AppError } from '../utils/app.error';
import { extname, join } from 'path';
import { mkdirSync } from 'fs';

const proofDir = join(process.cwd(), 'uploads', 'payment-proofs');
const avatarDir = join(process.cwd(), 'uploads', 'avatars');
mkdirSync(proofDir, { recursive: true });
mkdirSync(avatarDir, { recursive: true });

const allowedMime = ['image/png', 'image/jpeg', 'image/gif'];

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, proofDir),
  filename: (req: Request, file, cb) => {
    const bookingId = req.params.id || 'unknown';
    const ext = extname(file.originalname).toLowerCase();
    const safeName = `booking-${bookingId}-${Date.now()}${ext}`;
    cb(null, safeName);
  },
});

const fileFilter = (_req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (!allowedMime.includes(file.mimetype.toLowerCase())) {
    return cb(new AppError('File type not allowed, use .jpg or .png', 400));
  }
  return cb(null, true);
};

export const paymentProofUpload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
  fileFilter,
}).single('file');

const avatarStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, avatarDir),
  filename: (req: Request, file, cb) => {
    const userId = req.userId || 'unknown';
    const ext = extname(file.originalname).toLowerCase();
    const safeName = `avatar-${userId}-${Date.now()}${ext}`;
    cb(null, safeName);
  },
});

export const avatarUpload = multer({
  storage: avatarStorage,
  limits: { fileSize: 1 * 1024 * 1024 },
  fileFilter,
}).single('file');
