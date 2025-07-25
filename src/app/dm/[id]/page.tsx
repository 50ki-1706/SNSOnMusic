import { auth } from '@/auth';
import Dm from '@/components/Dm';

export default async function Server() {
  const session = await auth();
  const userId = session?.user?.id;
  return <Dm userId={userId} />;
}
