import { userIdInApi } from '../../(lib)/userIdInApi';
import { getDMRoomList } from '../../(Repository)/dm';
import { createRoute } from './frourio.server';

export const { GET } = createRoute({
  get: async () => {
    try {
      const userId = await userIdInApi();

      const dmRooms = await getDMRoomList(userId);

      return {
        status: 200,
        body: dmRooms,
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to fetch DM rooms' },
      };
    }
  },
});
