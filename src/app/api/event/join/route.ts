import { userIdInApi } from '../../(lib)/userIdInApi';
import { joinEvent } from '../../(Repository)/event';
import { createRoute } from './frourio.server';

export const { POST } = createRoute({
  post: async ({ body: { eventId, feedback } }) => {
    try {
      const userId = await userIdInApi();

      await joinEvent(userId, eventId, feedback);

      return {
        status: 204,
        body: {
          message: 'Successfully joined the event',
        },
      };
    } catch (error) {
      return {
        status: 500,
        body: {
          message: 'Failed to join the event',
        },
      };
    }
  },
});
