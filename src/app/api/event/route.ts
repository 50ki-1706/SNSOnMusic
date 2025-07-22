import { userIdInApi } from '../(lib)/userIdInApi';
import { createEvent, findEvent, updateEvent } from '../(Repository)/event';
import { createRoute } from './frourio.server';

export const { POST, PATCH } = createRoute({
  post: async ({ body }) => {
    try {
      const organizerId = await userIdInApi();

      const newEvent = await createEvent(body, organizerId);

      return {
        status: 201,
        body: newEvent,
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to create event' },
      };
    }
  },

  patch: async ({ body }) => {
    try {
      const organizerId = await userIdInApi();

      // イベントの存在確認と権限チェック
      const existingEvent = await findEvent(body.id);

      if (!existingEvent) {
        return {
          status: 404,
          body: { message: 'Event not found' },
        };
      }

      if (existingEvent.organizerId !== organizerId) {
        return {
          status: 403,
          body: { message: 'You do not have permission to update this event' },
        };
      }

      await updateEvent(body);

      return {
        status: 204,
        body: { message: 'Event updated successfully' },
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to update event' },
      };
    }
  },
});
