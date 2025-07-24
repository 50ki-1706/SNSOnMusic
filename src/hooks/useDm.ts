'use client';
import { createClient, RealtimeChannel } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';
import { SUPABASE_KEY, SUPABASE_URL } from '../../supabase-env';
interface Payload {
  content: string;
}
export const useDm = () => {
  const [messages, setMessages] = useState<Payload[]>([{ content: 'hi' }]);
  const [testChannel, setTestChannel] = useState<RealtimeChannel | null>(null);

  const handleChangeMessage = (message: string) => {
    setMessages((prev) => [...(prev || []), { content: message }]);
  };

  const sendMessage = async (message: string) => {
    if (!testChannel) return;

    testChannel
      .send({
        type: 'broadcast',
        event: 'shout',
        payload: { content: message },
      })
      .then((resp) => console.log(resp));

    handleChangeMessage(message);
  };

  const handleCreateChannel = useCallback(() => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const newChannel = supabase.channel('test-channel');
    return newChannel;
  }, []);

  useEffect(() => {
    //websoketチャンネルを作成
    const newChannel = handleCreateChannel();
    setTestChannel(newChannel);

    //メッセージを受信したらhandleChangeMessageを呼び出す
    newChannel
      .on<Payload>('broadcast', { event: 'shout' }, (message) => {
        handleChangeMessage(message.payload.content);
      })
      .subscribe();

    //ページを閉じたら、チャンネルを閉じる
    return () => {
      newChannel.unsubscribe();
    };
  }, [handleCreateChannel]);

  return { messages, sendMessage };
};
