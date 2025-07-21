import { userIdInApi } from '../../(lib)/userIdInApi';
import { like } from '../../(Repository)/matching';
import { createRoute } from './frourio.server';

export const { PATCH } = createRoute({
  patch: async ({ body }) => {
    try {
      const receiverId = await userIdInApi();

      await like(body.senderId, receiverId);

      return { status: 204, body: { message: 'updated matching status' } };
    } catch (error) {
      return { status: 500, body: { message: 'faild to update matching status' } };
    }
  },
});
