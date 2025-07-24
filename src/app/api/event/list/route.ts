import { getEvents } from '../../(Repository)/event';
import { createRoute } from './frourio.server';

export const { GET } = createRoute({
  get: async ({ query: { eventDate } }) => {
    try {
      const result = await getEvents(eventDate);

      return {
        status: 200,
        body: result,
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to fetch events' },
      };
    }
  },
});
