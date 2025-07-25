import { NextRequest, NextResponse } from 'next/server';
import { userIdInApi } from '../../(lib)/userIdInApi';
import { getSendList } from '../../(Repository)/matching';

export async function GET(request: NextRequest) {
  try {
    const senderId = await userIdInApi();
    const matchings = await getSendList(senderId);
    return NextResponse.json(matchings);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch matching send list' }, { status: 500 });
  }
}
