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

export const sendListSchema = z.array(
  z.object({
    receiver: z.object({
      id: z.string(),
      name: z.string(),
      gender: z.nativeEnum(Gender),
      age: z.number(),
    }),
    matchingStatus: z.nativeEnum(MatchingStatus),
  }),
);

export type ReciveList = z.infer<typeof reciveList>;
export type SendList = z.infer<typeof sendListSchema>;
