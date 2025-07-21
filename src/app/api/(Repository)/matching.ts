import { prisma } from '@/lib/prisma';

export const like = async (senderId: string, receiverId: string) => {
  await prisma.matching.update({
    where: { senderId_receiverId: { senderId, receiverId } },
    data: { matchingStatus: 'LIKED' },
  });
};
