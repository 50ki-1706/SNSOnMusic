import { userIdInApi } from '../../(lib)/userIdInApi';
import { updateFeedback } from '../../(Repository)/event';
import { createRoute } from './frourio.server';

export const { PATCH } = createRoute({
  patch: async ({ body: { eventId, feedback } }) => {
    try {
      const userId = await userIdInApi();

      await updateFeedback(userId, eventId, feedback);

      return {
        status: 204,
        body: {
          message: 'Feedback updated successfully',
        },
      };
    } catch (error) {
      return {
        status: 500,
        body: {
          message: 'Failed to update feedback',
        },
      };
    }
  },
});
