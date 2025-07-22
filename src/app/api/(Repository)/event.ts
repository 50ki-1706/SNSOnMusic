import { prisma } from '@/lib/prisma';
import { EventDate, EventList, Feedback } from '../(type)/event';

export const getEvents = async (date: EventDate): Promise<EventList> => {
  const where = date ? { eventDate: { gte: new Date(date) } } : {};

  const events = await prisma.event.findMany({
    where,
    select: {
      id: true,
      title: true,
      status: true,
      genre: true,
      organizer: {
        select: {
          id: true,
          name: true,
        },
      },
      capacity: true,
      participants: true,
      eventDate: true,
      deadline: true,
    },
  });

  // eventDate, deadlineをISO文字列に変換
  //eventListSchemaではevent,deadlineは文字列になっているため
  const result = events.map((event) => ({
    ...event,
    eventDate: event.eventDate.toISOString(),
    deadline: event.deadline ? event.deadline.toISOString() : null,
  }));

  return result;
};

export const updateFeedback = async (userId: string, eventId: string, feedback: Feedback) => {
  await prisma.eventParticipant.update({
    where: {
      eventId_userId: {
        eventId: eventId,
        userId: userId,
      },
    },
    data: {
      feedback: feedback,
    },
  });
};
