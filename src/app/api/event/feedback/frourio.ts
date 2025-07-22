import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';
import { feedbackSchema } from '../../(type)/event';

export const frourioSpec = {
  patch: {
    body: z.object({ eventId: z.string(), feedback: feedbackSchema }),
    res: {
      204: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
} satisfies FrourioSpec;
