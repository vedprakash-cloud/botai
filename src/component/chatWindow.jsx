import { useRef, useEffect } from "react";
import Main from "./mainPage";
import ChatCard from "./userChat";
import BotCard from "./botAnswer";

export default function ChatWindow({qaPair,chatWindow, handleTemplateClick}) {

  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [qaPair]);

  return (
    <div>
      <div className="px-5 w-full">
          <div className={`flex h-[420px] md:h-[500px] overflow-auto my-10`}>
            {chatWindow ? (
              <div className="w-full flex flex-col gap-5">
                {qaPair.map((item) => (
                  <div className="grid gap-2" key={item.id}>
                    <div className='p-6 shadow-md border rounded-xl text-start'>
                    <ChatCard
                      onAsk={item.question.text}
                      isUser={item.isUser}
                      time={item.question.time}
                    />
                    </div>
                    <div
                    className='p-6 shadow-md rounded-xl text-start border'>
                    <BotCard
                      onAsk={item.response.text}
                      isUser={item.isUser}
                      time={item.response.time}
                    />
                    </div>
                  </div>
                ))}
                <div ref={messageRef} />
              </div>
            ) : (
              <Main onTemplateClick={handleTemplateClick} />
            )}
          </div>
      </div>
    </div>
  );
}
