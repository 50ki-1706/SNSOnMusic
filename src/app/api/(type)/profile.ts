import { Gender, MusicGenre } from '@prisma/client';
import { z } from 'zod';

export const UserFavoriteGenreSchema = z.array(z.nativeEnum(MusicGenre));

export const UserFavoriteArtistSchema = z.array(z.string());

export const EventSchema = z.object({
  id: z.string(),
  title: z.string(),
});

export const UserProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  gender: z.nativeEnum(Gender),
  age: z.number(),
  bio: z.string().nullable(),
  userFavoriteGenre: UserFavoriteGenreSchema,
  userFavoriteArtist: UserFavoriteArtistSchema,
  event: z.array(EventSchema),
});

export const UserProfileUpdateSchema = z.object({
  gender: z.nativeEnum(Gender).optional(),
  age: z.number().min(0).optional(),
  bio: z.string().nullable().optional(),
  userFavoriteGenre: UserFavoriteGenreSchema.optional(),
  userFavoriteArtist: UserFavoriteArtistSchema.optional(),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
export type UserProfileUpdate = z.infer<typeof UserProfileUpdateSchema>;
