import { prisma } from '@/lib/prisma';

/**
 * 2人のユーザーIDでDMルームを作成し、参加者として両者を登録する
 * @param senderId 1人目のユーザーID
 * @param receiverId 2人目のユーザーID
 */
export const createDMRoomWithParticipants = async (
  senderId: string,
  userId2: string,
): Promise<void> => {
  await prisma.$transaction(async (tx) => {
    const room = await tx.dMRoom.create({
      data: {},
    });

    await tx.dMRoomParticipant.createMany({
      data: [
        { roomId: room.id, userId: senderId },
        { roomId: room.id, userId: userId2 },
      ],
    });
  });
};
