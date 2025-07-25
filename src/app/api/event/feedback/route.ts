import { NextRequest, NextResponse } from 'next/server';
import { userIdInApi } from '../../(lib)/userIdInApi';
import { updateFeedback } from '../../(Repository)/event';

export async function PATCH(request: NextRequest) {
  try {
    const userId = await userIdInApi();
    const { eventId, feedback } = await request.json();

    await updateFeedback(userId, eventId, feedback);

    return NextResponse.json({ message: 'Feedback updated successfully' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update feedback' }, { status: 500 });
  }
}
