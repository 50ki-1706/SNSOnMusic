import { Gender, MatchingStatus } from '@prisma/client';
import { z } from 'zod';

export const reciveList = z.array(
  z.object({
    sender: z.object({
      id: z.string(),
      name: z.string(),
      gender: z.nativeEnum(Gender),
      age: z.number().min(0),
    }),
    matchingStatus: z.nativeEnum(MatchingStatus),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
);

export type ReciveList = z.infer<typeof reciveList>;
