import { prisma } from '@/lib/prisma';
import { MessageCreated } from '../(type)/message';

export const createMessage = async (
  roomId: string,
  senderId: string,
  content: string,
): Promise<MessageCreated> => {
  // メッセージを作成
  const message = await prisma.message.create({
    data: {
      roomId,
      senderId,
      content,
    },
  });

  return {
    id: message.id,
    roomId: message.roomId,
    senderId: message.senderId,
    content: message.content,
    createdAt: message.createdAt.toISOString(),
  };
};

export const findMessage = async (messageId: string) => {
  // メッセージの存在確認と送信者チェック
  const message = await prisma.message.findUnique({
    where: { id: messageId },
    select: { senderId: true },
  });

  return message;
};

export const updateMessage = async (messageId: string, content: string) => {
  // メッセージを更新
  await prisma.message.update({
    where: { id: messageId },
    data: { content },
  });
};

export const deleteMessage = async (messageId: string) => {
  // メッセージを削除
  await prisma.message.delete({
    where: { id: messageId },
  });
};
