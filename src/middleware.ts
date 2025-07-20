import { auth } from '@/auth';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  return checkAuth(request);
}

const checkAuth = async (request: NextRequest) => {
  const session = await auth();
  if (!session?.user.id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/api',
    '/api/profile/:path*',
    '/api/dm/:path*',
    '/api/matching/:path*',
    '/api/event/:path*',
  ],
};
