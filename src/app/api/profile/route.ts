import { userIdInApi } from '../(lib)/userIdInApi';
import { getProfile, updateProfile } from '../(Repository)/profile';
import { createRoute } from './frourio.server';

export const { GET, PATCH } = createRoute({
  get: async (req) => {
    try {
      const userId = await userIdInApi();

      const profile = await getProfile(userId);
      return { status: 200, body: profile };
    } catch (error) {
      return { status: 500, body: { message: 'internal server error' } };
    }
  },
  patch: async (req) => {
    try {
      const userId = await userIdInApi();

      await updateProfile(req.body, userId);
      return { status: 204, body: { message: 'no content' } };
    } catch (error) {
      return { status: 500, body: { message: 'internal server error' } };
    }
  },
});
