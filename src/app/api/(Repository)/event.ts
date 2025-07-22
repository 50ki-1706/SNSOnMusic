import { prisma } from '@/lib/prisma';
import { Event, EventDate, EventList, FeedbackAtJoin, FeedbackAtUpdate } from '../(type)/event';

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

export const updateFeedback = async (
  userId: string,
  eventId: string,
  feedback: FeedbackAtUpdate,
) => {
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

export const joinEvent = async (userId: string, eventId: string, feedback: FeedbackAtJoin) => {
  await prisma.eventParticipant.create({
    data: {
      eventId,
      userId,
      feedback,
    },
  });
};

export const cancelEvent = async (id: string, userId: string) => {
  await prisma.eventParticipant.delete({
    where: { eventId_userId: { eventId: id, userId } },
  });
};

export const getEvent = async (id: string): Promise<Event | null> => {
  const event = await prisma.event.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
      ticketCount: true,
      location: true,
      externalUrl: true,
      eventDate: true,
      genre: true,
      fee: true,
      deadline: true,
      organizer: {
        select: {
          id: true,
          name: true,
        },
      },
      participantsList: {
        select: {
          feedback: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  if (!event) return null;

  // Date型のフィールドをISO文字列に変換
  return {
    ...event,
    eventDate: event.eventDate.toISOString(),
    deadline: event.deadline?.toISOString() ?? null,
  };
};

export const findEvent = async (id: string) => {
  const event = await prisma.event.findUnique({
    where: { id },
    select: { organizerId: true },
  });

  return event;
};

export const deleteEvent = async (id: string) => {
  await prisma.event.delete({
    where: { id },
  });
};
