import type { FrourioSpec } from '@frourio/next';

import { z } from 'zod';
import { UserProfileSchema, UserProfileUpdateSchema } from '../(type)/profile';

export const frourioSpec = {
  get: {
    res: {
      200: { body: UserProfileSchema },
      500: { body: z.object({ message: z.string() }) },
    },
  },
  patch: {
    body: UserProfileUpdateSchema,
    res: {
      204: { body: z.object({ message: z.string() }) },
      500: { body: z.object({ message: z.string() }) },
    },
  },
} satisfies FrourioSpec;
