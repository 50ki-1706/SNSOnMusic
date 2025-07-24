import { NextRequest, NextResponse } from 'next/server';
import { getEvents } from '../../(Repository)/event';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const eventDate = searchParams.get('eventDate') || undefined;

    const result = await getEvents(eventDate);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch events' }, { status: 500 });
  }
}
