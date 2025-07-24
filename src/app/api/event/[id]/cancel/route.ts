import { userIdInApi } from '@/app/api/(lib)/userIdInApi';
import { cancelEvent } from '@/app/api/(Repository)/event';
import { createRoute } from './frourio.server';

export const { DELETE } = createRoute({
  delete: async ({ params: { id } }) => {
    try {
      const userId = await userIdInApi();

      await cancelEvent(id, userId);

      return { status: 204, body: { message: 'event canceled' } };
    } catch (error) {
      return { status: 500, body: { message: 'internal server error' } };
    }
  },
});
