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
    eventDate: z.string().datetime(),
    deadline: z.string().datetime().nullable(), // Prisma schemaでDateTime?なのでnullable
  }),
);

//テーブル構造的に、stringならfeedbackを更新、nullならfeedbackを削除を表す
export const feedbackSchemaAtUpdate = z.string().nullable();
//join時はfeedbackは無いため、nullのみを許可
export const feedbackSchemaAtJoin = z.null();

export const eventDateSchema = z.string().datetime().optional();

export type EventDate = z.infer<typeof eventDateSchema>;

export type EventList = z.infer<typeof eventListSchema>;

export type FeedbackAtUpdate = z.infer<typeof feedbackSchemaAtUpdate>;
export type FeedbackAtJoin = z.infer<typeof feedbackSchemaAtJoin>;
