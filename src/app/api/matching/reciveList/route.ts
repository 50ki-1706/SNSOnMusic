import { userIdInApi } from '../../(lib)/userIdInApi';
import { getReceiveMatchingList } from '../../(Repository)/matching';
import { createRoute } from './frourio.server';

export const { GET } = createRoute({
  get: async () => {
    try {
      const receiverId = await userIdInApi();
      const reciveList = await getReceiveMatchingList(receiverId);
      return { status: 200, body: reciveList };
    } catch (error) {
      return { status: 500, body: { message: 'faild to get recive list' } };
    }
  },
});
