import { ReciveList, SendList } from '@/app/api/(type)/matching';
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

export const reject = async (senderId: string, receiverId: string) => {
  await prisma.matching.update({
    where: {
      senderId_receiverId: {
        senderId: senderId,
        receiverId: receiverId,
      },
    },
    data: {
      matchingStatus: 'REJECTED',
    },
  });
};

export const getSendList = async (senderId: string): Promise<SendList> => {
  const matchings = await prisma.matching.findMany({
    where: {
      senderId: senderId,
    },
    select: {
      matchingStatus: true,
      receiver: {
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

export const submit = async (senderId: string, receiverId: string) => {
  await prisma.matching.create({
    data: {
      senderId,
      receiverId,
    },
  });
};
