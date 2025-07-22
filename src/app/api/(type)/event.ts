import { EventStatus, MusicGenre } from '@prisma/client';
import { z } from 'zod';

export const eventListSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    status: z.nativeEnum(EventStatus),
    genre: z.nativeEnum(MusicGenre),
    organizer: z.object({
      id: z.string(),
      name: z.string(),
    }),
    capacity: z.number().nullable(), // Prisma schemaでInt?なのでnullable
    participants: z.number(),
    eventDate: z.string().datetime(),
    deadline: z.string().datetime().nullable(), // Prisma schemaでDateTime?なのでnullable
  }),
);

export const feedbackSchema = z.string().nullable();

export const eventDateSchema = z.string().datetime().optional();

export type EventDate = z.infer<typeof eventDateSchema>;

export type EventList = z.infer<typeof eventListSchema>;

export type Feedback = z.infer<typeof feedbackSchema>;
