import { userIdInApi } from '../../(lib)/userIdInApi';
import { deleteEvent, findEvent, getEvent } from '../../(Repository)/event';
import { createRoute } from './frourio.server';

export const { GET, DELETE } = createRoute({
  get: async ({ params: { id } }) => {
    try {
      const event = await getEvent(id);

      if (!event) {
        return {
          status: 404,
          body: { message: 'Event not found' },
        };
      }

      return {
        status: 200,
        body: event,
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to fetch event' },
      };
    }
  },

  delete: async ({ params: { id } }) => {
    try {
      const userId = await userIdInApi();

      const event = await findEvent(id);

      if (!event) {
        return {
          status: 404,
          body: { message: 'Event not found' },
        };
      }

      if (event.organizerId !== userId) {
        return {
          status: 403,
          body: { message: 'You do not have permission to delete this event' },
        };
      }

      await deleteEvent(id);

      return {
        status: 204,
        body: { message: 'Event deleted successfully' },
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to delete event' },
      };
    }
  },
});
