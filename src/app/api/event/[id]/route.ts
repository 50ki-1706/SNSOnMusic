import { NextRequest, NextResponse } from 'next/server';
import { userIdInApi } from '../../(lib)/userIdInApi';
import {
  createEvent,
  deleteEvent,
  findEvent,
  getEvent,
  updateEvent,
} from '../../(Repository)/event';

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

export async function PATCH(request: NextRequest) {
  try {
    const organizerId = await userIdInApi();
    const body = await request.json();

    const existingEvent = await findEvent(body.id);

    if (!existingEvent) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }

    if (existingEvent.organizerId !== organizerId) {
      return NextResponse.json(
        { message: 'You do not have permission to update this event' },
        { status: 403 },
      );
    }

    await updateEvent(body);

    return NextResponse.json({ message: 'Event updated successfully' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update event' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = await userIdInApi();
    const event = await findEvent(params.id);

    if (!event) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }

    if (event.organizerId !== userId) {
      return NextResponse.json(
        { message: 'You do not have permission to delete this event' },
        { status: 403 },
      );
    }

    await deleteEvent(params.id);

    return NextResponse.json({ message: 'Event deleted successfully' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to delete event' }, { status: 500 });
  }
}
