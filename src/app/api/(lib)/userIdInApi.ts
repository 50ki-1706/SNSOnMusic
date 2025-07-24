import { auth } from '@/auth';

//⚠️middlewareで認証確認をしているAPIルートのみで使用してください。
export const userIdInApi = async () => {
  const session = await auth();
  const userId = session?.user?.id as string;
  return userId;
};
