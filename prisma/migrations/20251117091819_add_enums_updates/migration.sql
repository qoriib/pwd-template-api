-- AlterTable
ALTER TABLE `room_price_adjustments` MODIFY `type` ENUM('PERCENTAGE', 'NOMINAL') NOT NULL;

-- AlterTable
ALTER TABLE `user_tokens` MODIFY `type` ENUM('EMAIL_VERIFY', 'RESET_PASSWORD') NOT NULL;
