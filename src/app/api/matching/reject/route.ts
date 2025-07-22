import { userIdInApi } from '../../(lib)/userIdInApi';
import { reject } from '../../(Repository)/matching';
import { createRoute } from './frourio.server';

export const { PATCH } = createRoute({
  patch: async ({ body: { senderId } }) => {
    try {
      const receiverId = await userIdInApi();
      await reject(senderId, receiverId);

      return {
        status: 204,
        body: {
          message: 'Successfully rejected the matching',
        },
      };
    } catch (error) {
      return {
        status: 500,
        body: {
          message: 'Failed to reject the matching',
        },
      };
    }
  },
});
