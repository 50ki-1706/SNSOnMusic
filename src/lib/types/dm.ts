import { apiClient } from '@/lib/apiClient';

export type DmRoomWithMessages = Awaited<ReturnType<(typeof apiClient)['dm/[id]/message']['$get']>>;
export type Message = DmRoomWithMessages['messages'][number];
