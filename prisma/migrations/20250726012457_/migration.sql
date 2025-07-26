/*
  Warnings:

  - The values [MATCHED] on the enum `MatchingStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `capacity` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `participants` on the `Event` table. All the data in the column will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MatchingStatus_new" AS ENUM ('PENDING', 'LIKED', 'REJECTED');
ALTER TABLE "Matching" ALTER COLUMN "matchingStatus" DROP DEFAULT;
ALTER TABLE "Matching" ALTER COLUMN "matchingStatus" TYPE "MatchingStatus_new" USING ("matchingStatus"::text::"MatchingStatus_new");
ALTER TYPE "MatchingStatus" RENAME TO "MatchingStatus_old";
ALTER TYPE "MatchingStatus_new" RENAME TO "MatchingStatus";
DROP TYPE "MatchingStatus_old";
ALTER TABLE "Matching" ALTER COLUMN "matchingStatus" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "capacity",
DROP COLUMN "participants";

-- AlterTable
ALTER TABLE "EventParticipant" ADD COLUMN     "feedback" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;
