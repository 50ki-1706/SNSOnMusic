import {
  dmRoomWithMessagesSchema,
  messageCreatedSchema,
  patchReqSchema,
  postReqSchema,
} from '@/app/api/(type)/message';
import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';

export const frourioSpec = {
  get: {
    res: {
      200: { body: dmRoomWithMessagesSchema },
      403: { body: z.object({ message: z.string() }) },
      404: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
  post: {
    body: postReqSchema,
    res: {
      200: { body: messageCreatedSchema },
      403: { body: z.object({ message: z.string() }) },
      404: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
  patch: {
    body: patchReqSchema,
    res: {
      204: { body: z.object({ message: z.string() }) },
      403: { body: z.object({ message: z.string() }) },
      404: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
  delete: {
    body: z.object({
      messageId: z.string(),
    }),
    res: {
      204: { body: z.object({ message: z.string() }) },
      403: { body: z.object({ message: z.string() }) },
      404: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
} satisfies FrourioSpec;
