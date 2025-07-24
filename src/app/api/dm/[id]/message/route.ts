import { findDMRoom, getDMRoomWithMessages } from '@/app/api/(Repository)/dm';
import {
  createMessage,
  deleteMessage,
  findMessage,
  updateMessage,
} from '@/app/api/(Repository)/message';
import { userIdInApi } from '../../../(lib)/userIdInApi';
import { createRoute } from './frourio.server';

export const { GET, POST, PATCH, DELETE } = createRoute({
  get: async ({ params: { id } }) => {
    try {
      const userId = await userIdInApi();

      // DMルームの存在確認と参加者チェック
      const dmRoom = await getDMRoomWithMessages(id);

      if (!dmRoom) {
        return {
          status: 404,
          body: { message: 'DM room not found' },
        };
      }

      // 参加者かどうかチェック
      const isParticipant = dmRoom.participants.some((p) => p.user.id === userId);
      if (!isParticipant) {
        return {
          status: 403,
          body: { message: 'You are not a participant of this DM room' },
        };
      }

      return {
        status: 200,
        body: dmRoom,
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to fetch DM room' },
      };
    }
  },

  post: async ({ body: { roomId, content } }) => {
    try {
      const senderId = await userIdInApi();

      const dmRoom = await findDMRoom(roomId);

      if (!dmRoom) {
        return {
          status: 404,
          body: { message: 'DM room not found' },
        };
      }

      // 参加者かどうかチェック
      const isParticipant = dmRoom.participants.some((p) => p.userId === senderId);
      if (!isParticipant) {
        return {
          status: 403,
          body: { message: 'You are not a participant of this DM room' },
        };
      }

      const message = await createMessage(roomId, senderId, content);

      return {
        status: 200,
        body: message,
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to create message' },
      };
    }
  },

  patch: async ({ body: { messageId, content } }) => {
    try {
      const userId = await userIdInApi();

      const message = await findMessage(messageId);

      if (!message) {
        return {
          status: 404,
          body: { message: 'Message not found' },
        };
      }

      if (message.senderId !== userId) {
        return {
          status: 403,
          body: { message: 'You can only edit your own messages' },
        };
      }

      await updateMessage(messageId, content);

      return {
        status: 204,
        body: { message: 'Message updated successfully' },
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to update message' },
      };
    }
  },

  delete: async ({ body: { messageId } }) => {
    try {
      const userId = await userIdInApi();

      const message = await findMessage(messageId);

      if (!message) {
        return {
          status: 404,
          body: { message: 'Message not found' },
        };
      }

      if (message.senderId !== userId) {
        return {
          status: 403,
          body: { message: 'You can only delete your own messages' },
        };
      }

      await deleteMessage(messageId);

      return {
        status: 204,
        body: { message: 'Message deleted successfully' },
      };
    } catch (error) {
      return {
        status: 500,
        body: { message: 'Failed to delete message' },
      };
    }
  },
});
