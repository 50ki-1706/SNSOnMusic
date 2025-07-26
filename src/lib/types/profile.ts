export type apiRes = {
  message: string;
  data?: unknown | object;
};

// プロフィール関連の型定義
export type UserFavoriteGenre = {
  genre: string;
};

export type UserFavoriteArtist = {
  artist: string;
};

export type Event = {
  id: string;
  title: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  gender: string;
  age: number;
  bio: string | null;
  UserFavoriteGenre: UserFavoriteGenre[];
  UserFavoriteArtist: UserFavoriteArtist[];
  Event: Event[];
};
