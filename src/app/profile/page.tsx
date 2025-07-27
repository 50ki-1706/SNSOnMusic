import { auth } from '@/auth';
import Profile from '@/components/profile/profile';
import { headers } from 'next/headers';

export default async function Server() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) return <div>UserId not found</div>;

  try {
    const headersList = headers();
    const cookie = (await headersList).get('cookie') || '';

    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookie,
      },
    });

    if (!response.ok) {
      return <div>Error fetching profile data</div>;
    }

    const profileData = await response.json();

    return <Profile profileData={profileData} />;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return <div>Error fetching profile data</div>;
  }
}
