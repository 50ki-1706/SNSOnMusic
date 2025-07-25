import { NextRequest, NextResponse } from 'next/server';
import { userIdInApi } from '../../(lib)/userIdInApi';
import { getReceiveMatchingList } from '../../(Repository)/matching';

export async function GET(request: NextRequest) {
  try {
    const receiverId = await userIdInApi();
    const reciveList = await getReceiveMatchingList(receiverId);
    return NextResponse.json(reciveList);
  } catch (error) {
    return NextResponse.json({ message: 'failed to get receive list' }, { status: 500 });
  }
}
