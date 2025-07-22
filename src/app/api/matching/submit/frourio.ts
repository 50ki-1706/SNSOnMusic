import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';

export const frourioSpec = {
  post: {
    body: z.object({ receiverId: z.string() }),
    res: {
      204: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
} satisfies FrourioSpec;
