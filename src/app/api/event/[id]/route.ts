import { NextRequest, NextResponse } from 'next/server';
import { createEvent, getEvent } from '../../(Repository)/event';
import { userIdInApi } from '../../(lib)/userIdInApi';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const event = await getEvent(params.id);

    if (!event) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch event' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const organizerId = await userIdInApi();
    const body = await request.json();
    const newEvent = await createEvent(body, organizerId);

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create event' }, { status: 500 });
  }
}
