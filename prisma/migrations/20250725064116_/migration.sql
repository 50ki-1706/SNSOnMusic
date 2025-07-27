/*
  Warnings:

  - The values [MATCHED] on the enum `MatchingStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [CLASSIC,HIPHOP] on the enum `MusicGenre` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `capacity` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `participants` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `DMRoom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DMRoomParticipant` table. If the table is not empty, all the data it contains will be lost.
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

-- AlterEnum
BEGIN;
CREATE TYPE "MusicGenre_new" AS ENUM ('POP', 'ROCK', 'HIP_HOP', 'R_B', 'JAZZ', 'CLASSICAL', 'EDM', 'COUNTRY', 'FOLK', 'BLUES', 'SOUL', 'FUNK', 'REGGAE', 'SKA', 'PUNK', 'HEAVY_METAL', 'GOSPEL', 'DISCO', 'HOUSE', 'TECHNO', 'TRANCE', 'DRUM_AND_BASS', 'AMBIENT', 'LATIN', 'SALSA', 'BOSSA_NOVA', 'TANGO', 'K_POP', 'J_POP', 'ENKA', 'AFROBEAT', 'WORLD_MUSIC', 'NEW_AGE', 'PROGRESSIVE_ROCK', 'ALTERNATIVE_ROCK', 'GRUNGE', 'INDIE_ROCK', 'BLUES_ROCK', 'FUSION', 'OPERA', 'OTHER');
ALTER TABLE "Event" ALTER COLUMN "genre" TYPE "MusicGenre_new" USING ("genre"::text::"MusicGenre_new");
ALTER TABLE "UserFavoriteGenre" ALTER COLUMN "genre" TYPE "MusicGenre_new" USING ("genre"::text::"MusicGenre_new");
ALTER TYPE "MusicGenre" RENAME TO "MusicGenre_old";
ALTER TYPE "MusicGenre_new" RENAME TO "MusicGenre";
DROP TYPE "MusicGenre_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "DMRoomParticipant" DROP CONSTRAINT "DMRoomParticipant_roomId_fkey";

-- DropForeignKey
ALTER TABLE "DMRoomParticipant" DROP CONSTRAINT "DMRoomParticipant_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_roomId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "capacity",
DROP COLUMN "participants";

-- AlterTable
ALTER TABLE "EventParticipant" ADD COLUMN     "feedback" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "DMRoom";

-- DropTable
DROP TABLE "DMRoomParticipant";

-- CreateTable
CREATE TABLE "EventApplicant" (
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "EventApplicant_pkey" PRIMARY KEY ("eventId","userId")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRoomParticipant" (
    "roomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChatRoomParticipant_pkey" PRIMARY KEY ("roomId","userId")
);

-- AddForeignKey
ALTER TABLE "EventApplicant" ADD CONSTRAINT "EventApplicant_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventApplicant" ADD CONSTRAINT "EventApplicant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoomParticipant" ADD CONSTRAINT "ChatRoomParticipant_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "ChatRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoomParticipant" ADD CONSTRAINT "ChatRoomParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "ChatRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
