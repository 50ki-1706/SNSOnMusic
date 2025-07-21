/*
  Warnings:

  - You are about to drop the `todo` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER', 'NOT_SPECIFIED');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('OPEN', 'CLOSED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "MusicGenre" AS ENUM ('ROCK', 'POP', 'JAZZ', 'CLASSIC', 'HIPHOP', 'EDM', 'OTHER');

-- CreateEnum
CREATE TYPE "MatchingStatus" AS ENUM ('PENDING', 'MATCHED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "todo" DROP CONSTRAINT "todo_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'NOT_SPECIFIED';

-- DropTable
DROP TABLE "todo";

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "capacity" INTEGER,
    "participants" INTEGER NOT NULL,
    "status" "EventStatus" NOT NULL DEFAULT 'OPEN',
    "organizerId" TEXT NOT NULL,
    "ticketCount" INTEGER,
    "location" TEXT NOT NULL,
    "externalUrl" TEXT,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "genre" "MusicGenre" NOT NULL,
    "fee" INTEGER,
    "deadline" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventParticipant" (
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "EventParticipant_pkey" PRIMARY KEY ("eventId","userId")
);

-- CreateTable
CREATE TABLE "UserFavoriteGenre" (
    "userId" TEXT NOT NULL,
    "genre" "MusicGenre" NOT NULL,

    CONSTRAINT "UserFavoriteGenre_pkey" PRIMARY KEY ("userId","genre")
);

-- CreateTable
CREATE TABLE "UserFavoriteArtist" (
    "userId" TEXT NOT NULL,
    "artist" TEXT NOT NULL,

    CONSTRAINT "UserFavoriteArtist_pkey" PRIMARY KEY ("userId","artist")
);

-- CreateTable
CREATE TABLE "Matching" (
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "matchingStatus" "MatchingStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Matching_pkey" PRIMARY KEY ("senderId","receiverId")
);

-- CreateTable
CREATE TABLE "DMRoom" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DMRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DMRoomParticipant" (
    "roomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DMRoomParticipant_pkey" PRIMARY KEY ("roomId","userId")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_title_key" ON "Event"("title");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipant" ADD CONSTRAINT "EventParticipant_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipant" ADD CONSTRAINT "EventParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavoriteGenre" ADD CONSTRAINT "UserFavoriteGenre_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavoriteArtist" ADD CONSTRAINT "UserFavoriteArtist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matching" ADD CONSTRAINT "Matching_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matching" ADD CONSTRAINT "Matching_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DMRoomParticipant" ADD CONSTRAINT "DMRoomParticipant_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "DMRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DMRoomParticipant" ADD CONSTRAINT "DMRoomParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "DMRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
