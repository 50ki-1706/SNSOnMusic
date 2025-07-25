import { NextRequest, NextResponse } from 'next/server';
import { joinEvent } from '../../(Repository)/event';

export async function POST(request: NextRequest) {
  try {
    const { userId, eventId, feedback } = await request.json();

    await joinEvent(userId, eventId, feedback);

    return NextResponse.json({ message: 'Successfully joined the event' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to join the event' }, { status: 500 });
  }
}
