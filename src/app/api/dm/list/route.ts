import { NextResponse } from 'next/server';
import { userIdInApi } from '../../(lib)/userIdInApi';
import { getDMRoomList } from '../../(Repository)/dm';

export async function GET() {
  try {
    const userId = await userIdInApi();
    const dmRooms = await getDMRoomList(userId);
    return NextResponse.json(dmRooms);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch DM rooms' }, { status: 500 });
  }
}
