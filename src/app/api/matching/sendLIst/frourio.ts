import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';
import { sendListSchema } from '../../(type)/matching';

export const frourioSpec = {
  get: {
    res: {
      200: {
        body: sendListSchema,
      },
      500: {
        body: z.object({
          message: z.string(),
        }),
      },
    },
  },
} satisfies FrourioSpec;
