import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';
import { feedbackSchemaAtJoin } from '../../(type)/event';

export const frourioSpec = {
  post: {
    body: z.object({ eventId: z.string(), feedback: feedbackSchemaAtJoin }),
    res: {
      204: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
} satisfies FrourioSpec;
