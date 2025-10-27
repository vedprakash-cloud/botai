import { useState, useEffect } from "react";
import ChatCard from "../component/userChat";
import BotCard from "../component/botAnswer";

export default function PastConversation() {
  const [past, setPast] = useState([]);

  useEffect(() => {
    const savedConversation = JSON.parse(localStorage.getItem("data")) || [];
    setPast(savedConversation);
  }, []);


  return (
    <div>
      <div className="flex flex-col gap-5 w-full overflow-auto rounded-md">
        <h2 className="font-semibold text-2xl text-center pt-3">Conversation History</h2>

        <h3 className="text-start font-semibold text-lg">Today's Chats</h3>
        <div className="h-[350px] md:h-[420px] overflow-auto flex flex-col gap-5">
          {past.map((item)=>item.map(
          (chat)=>
            (
          <div key={chat.id} className="bg-[#D7C7F4] rounded-xl py-3 mx-3 font-bold shadow-lg text-xs p-6">
            <div>
              <ChatCard onAsk={chat.question.text} isUser={chat.isUser} time={chat.question.time}/>
            </div>
            <div>
              <BotCard onAsk={chat.response.text} isUser={chat.isUser} time={chat.response.time}/>
            </div>
          </div>
        )
          ))}
        </div>
      </div>
    </div>
  );
}
