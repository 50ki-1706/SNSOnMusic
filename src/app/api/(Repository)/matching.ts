import { ReciveList } from '@/app/api/(type)/matching';
import { prisma } from '@/lib/prisma';

export const like = async (senderId: string, receiverId: string) => {
  await prisma.matching.update({
    where: { senderId_receiverId: { senderId, receiverId } },
    data: { matchingStatus: 'LIKED' },
  });
};

export const getReceiveMatchingList = async (receiverId: string): Promise<ReciveList> => {
  const matchings = await prisma.matching.findMany({
    where: { receiverId },
    select: {
      matchingStatus: true,
      createdAt: true,
      updatedAt: true,
      sender: {
        select: {
          id: true,
          name: true,
          gender: true,
          age: true,
        },
      },
    },
  });

  return matchings;
};
