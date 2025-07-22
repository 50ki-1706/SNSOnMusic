import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';
import { eventDateSchema, eventListSchema } from '../(type)/event';

export const frourioSpec = {
  get: {
    query: z.object({
      eventDate: eventDateSchema, // DateTime型の日付、undefined許容
    }),
    res: {
      200: {
        body: eventListSchema,
      },
      500: {
        body: z.object({ message: z.string() }),
      },
    },
  },
} satisfies FrourioSpec;
