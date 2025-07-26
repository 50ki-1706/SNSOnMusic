import { auth } from '@/auth';
import Chat from '@/components/chat/chat';

export default async function Server() {
  const session = await auth();
  const userId = session?.user?.id;
  return <Chat userId={userId} />;
}
