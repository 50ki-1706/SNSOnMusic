import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';
import { eventSchema } from '../../(type)/event';

export const frourioSpec = {
  get: {
    res: {
      200: { body: eventSchema },
      404: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
  delete: {
    res: {
      204: { body: z.object({ message: z.string() }) },
      403: { body: z.object({ message: z.string() }) },
      404: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
} satisfies FrourioSpec;
