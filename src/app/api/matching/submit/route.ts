import { userIdInApi } from '../../(lib)/userIdInApi';
import { submit } from '../../(Repository)/matching';
import { createRoute } from './frourio.server';

export const { POST } = createRoute({
  post: async ({ body: { receiverId } }) => {
    try {
      const senderId = await userIdInApi();

      await submit(senderId, receiverId);

      return {
        status: 204,
        body: { message: 'Matching created successfully' },
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to create matching' },
      };
    }
  },
});
