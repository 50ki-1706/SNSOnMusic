'use client';

import { Message } from '@/lib/types/dm';
import { createClient, RealtimeChannel } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { SUPABASE_KEY, SUPABASE_URL } from '../../supabase-env';

export const useDm = ({ dmId }: { dmId: string }) => {
  const [messageState, setMessageState] = useState<Message[]>([]);
  const [channel, setChannel] = useState<RealtimeChannel | null>(null);

  const handleChangeMessage = (message: Message) => {
    setMessageState((prev) => [...(prev || []), message]);
  };

  const handleSendMessage = async (messageContent: string): Promise<void> => {
    //バックエンドにメッセージを送信
    const newMessage = await sendMessage(dmId, messageContent);

    //websocketで相手にメッセージを送信
    broadcastMessage(newMessage);

    //フロントエンドのstateを更新
    handleChangeMessage(newMessage);
  };

  const broadcastMessage = async (message: Message) => {
    if (!channel) return;

    channel.send({
      type: 'broadcast',
      event: 'shout',
      payload: message,
    });
  };

  //websocketに関する処理
  useEffect(() => {
    //websoketチャンネルを作成
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const newChannel = supabase.channel('test-channel');
    setChannel(newChannel);

    //メッセージを受信したらhandleChangeMessageを呼び出す
    newChannel
      .on<Message>('broadcast', { event: 'shout' }, (message) => {
        handleChangeMessage(message.payload);
      })
      .subscribe();

    //ページを閉じたら、チャンネルを閉じる
    return () => {
      newChannel.unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetchMessage(dmId).then((res) => {
      setMessageState(res.messages);
    });
  }, [dmId]);

  return { messageState, handleSendMessage };
};

const fetchMessage = async (dmId: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/dm/${dmId}/message`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

const sendMessage = async (dmId: string, messageContent: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/dm/${dmId}/message`, {
      method: 'POST',
      body: JSON.stringify({ content: messageContent }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const updateMessage = async (dmId: string, messageId: string, messageContent: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/dm/${dmId}/message`, {
      method: 'PATCH',
      body: JSON.stringify({ messageId, content: messageContent }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteMessage = async (dmId: string, messageId: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/dm/${dmId}/message`, {
      method: 'DELETE',
      body: JSON.stringify({ messageId }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
