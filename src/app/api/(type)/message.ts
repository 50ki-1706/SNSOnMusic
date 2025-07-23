import { z } from 'zod';

export const dmRoomWithMessagesSchema = z.object({
  id: z.string(),
  participants: z.array(
    z.object({
      user: z.object({
        id: z.string(),
        name: z.string(),
      }),
    }),
  ),
  messages: z.array(
    z.object({
      id: z.string(),
      content: z.string(),
      createdAt: z.string().datetime(),
      sender: z.object({
        id: z.string(),
        name: z.string(),
      }),
    }),
  ),
});

export const postReqSchema = z.object({
  roomId: z.string(),
  content: z.string(),
});

export const messageCreatedSchema = z.object({
  id: z.string(),
  roomId: z.string(),
  senderId: z.string(),
  content: z.string(),
  createdAt: z.string().datetime(),
});

export const patchReqSchema = z.object({
  messageId: z.string(),
  content: z.string(),
});

export type DmRoomWithMessages = z.infer<typeof dmRoomWithMessagesSchema>;

export type MessageCreated = z.infer<typeof messageCreatedSchema>;
