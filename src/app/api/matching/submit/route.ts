import { NextRequest, NextResponse } from 'next/server';
import { userIdInApi } from '../../(lib)/userIdInApi';
import { submit } from '../../(Repository)/matching';

export async function POST(request: NextRequest) {
  try {
    const senderId = await userIdInApi();
    const { receiverId } = await request.json();

    await submit(senderId, receiverId);

    return NextResponse.json({ message: 'Matching created successfully' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create matching' }, { status: 500 });
  }
}
