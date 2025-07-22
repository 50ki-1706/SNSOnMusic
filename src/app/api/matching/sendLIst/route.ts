import { userIdInApi } from '../../(lib)/userIdInApi';
import { getSendList } from '../../(Repository)/matching';
import { createRoute } from './frourio.server';

export const { GET } = createRoute({
  get: async () => {
    try {
      const senderId = await userIdInApi();

      const matchings = await getSendList(senderId);

      return {
        status: 200,
        body: matchings,
      };
    } catch (error) {
      return {
        status: 500,
        body: {
          message: 'Failed to fetch matching send list',
        },
      };
    }
  },
});
