'use client';

import { useDm } from '@/hooks/useDm';

const Page = () => {
  const { messages, sendMessage } = useDm();

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.content}</div>
        ))}
      </div>
      <button onClick={() => sendMessage('Hello')}>Send</button>
    </div>
  );
};

export default Page;
