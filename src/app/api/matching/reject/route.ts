import { NextRequest, NextResponse } from 'next/server';
import { userIdInApi } from '../../(lib)/userIdInApi';
import { reject } from '../../(Repository)/matching';

export async function PATCH(request: NextRequest) {
  try {
    const receiverId = await userIdInApi();
    const { senderId } = await request.json();

    await reject(senderId, receiverId);

    return NextResponse.json({ message: 'Successfully rejected the matching' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to reject the matching' }, { status: 500 });
  }
}
