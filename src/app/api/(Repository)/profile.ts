import { prisma } from '@/lib/prisma';
import { Gender } from '@prisma/client';
import { UserProfile, UserProfileUpdate } from '../(type)/profile';

// プロフィール取得
export const getProfile = async (userId: string): Promise<UserProfile> => {
  // User本体
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      gender: true,
      age: true,
      bio: true,
      UserFavoriteGenre: {
        select: { genre: true },
      },
      UserFavoriteArtist: {
        select: { artist: true },
      },
      Event: {
        select: { id: true, title: true },
      },
    },
  });

  if (!user) throw new Error('ユーザーが見つかりません');

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    age: user.age,
    bio: user.bio ?? null,
    userFavoriteGenre: user.UserFavoriteGenre.map((genre) => genre.genre),
    userFavoriteArtist: user.UserFavoriteArtist.map((artist) => artist.artist),
    event: user.Event,
  };
};

// プロフィール更新
export const updateProfile = async (profile: UserProfileUpdate, userId: string) => {
  // User本体の更新
  await prisma.user.update({
    where: { id: userId },
    data: {
      gender: profile.gender ? Gender[profile.gender as keyof typeof Gender] : undefined,
      age: profile.age,
      bio: profile.bio,
    },
  });

  // お気に入りジャンルの更新
  if (profile.userFavoriteGenre) {
    // 既存削除→新規作成
    await prisma.userFavoriteGenre.deleteMany({ where: { userId } });
    await prisma.userFavoriteGenre.createMany({
      data: profile.userFavoriteGenre.map((genre) => ({ userId, genre })),
    });
  }

  // お気に入りアーティストの更新
  if (profile.userFavoriteArtist) {
    await prisma.userFavoriteArtist.deleteMany({ where: { userId } });
    await prisma.userFavoriteArtist.createMany({
      data: profile.userFavoriteArtist.map((artist) => ({ userId, artist })),
    });
  }
};
