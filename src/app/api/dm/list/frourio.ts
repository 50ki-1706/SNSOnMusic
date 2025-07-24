import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';
import { dmRoomListSchema } from '../../(type)/dm';

export const frourioSpec = {
  get: {
    res: {
      200: { body: dmRoomListSchema },
      500: { body: z.object({ message: z.string() }) },
    },
  },
} satisfies FrourioSpec;
