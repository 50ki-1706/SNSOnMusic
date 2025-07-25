import { NextRequest, NextResponse } from 'next/server';
import { userIdInApi } from '../../(lib)/userIdInApi';
import { createDMRoomWithParticipants } from '../../(Repository)/dm';
import { like } from '../../(Repository)/matching';

export async function PATCH(request: NextRequest) {
  try {
    const receiverId = await userIdInApi();
    const { senderId } = await request.json();

    // マッチングステータスをLIKEに変更
    await like(senderId, receiverId);

    // DMルームを作成
    await createDMRoomWithParticipants(senderId, receiverId);

    return NextResponse.json({ message: 'updated matching status' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'failed to update matching status' }, { status: 500 });
  }
}
