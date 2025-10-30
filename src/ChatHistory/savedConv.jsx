import { useState } from "react";
import ChatCard from "../component/userChat";
import BotCard from "../component/botAnswer";
import Rating from "../extras/starRating";
import Modal from "react-modal";
import { GoLightBulb } from "react-icons/go";

export default function PastConversation() {
  const [past, setPast] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [message, setMessage] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleRatingChnage = (id, newValue) => {
    const updatedChats = past.map((session) =>
      session.map((chat) =>
        chat.id === id ? { ...chat, rating: newValue } : chat
      )
    );
    setPast(updatedChats);
    localStorage.setItem("data", JSON.stringify(updatedChats));
    setSelectedId(id);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    const updatedChats = past.map((session)=>
    session.map((chat)=>
    chat.id === selectedId ? {...chat, feedback: message} : chat
  )
);
    setPast(updatedChats);
    localStorage.setItem('data', JSON.stringify(updatedChats));


    setIsOpen(false);
    setSelectedId(null);
    setMessage('');
  };
  const handleClose = () => {
    setIsOpen(false);
    setSelectedId(null)
  };

  return (
    <div>
      <div className="flex flex-col gap-5 w-full overflow-auto pl-3">
        <h1 className="font-semibold text-4xl text-center pt-3">
          Past Conversations
        </h1>

        <h3 className="text-start font-semibold text-lg">Today's Chats</h3>
        <div className="h-[520px] md:h-[420px] overflow-auto flex flex-col gap-5 rounded-lg">
          {past.map((session) =>
            session.map((chat) => (
              <div
                key={chat.id}
                className="bg-[#D7C7F4] rounded-xl py-3 mx-3 shadow-lg text-xs p-6"
              >
                <div className="p-2 mb-2">
                  <ChatCard
                    onAsk={chat.question.text}
                    isUser={chat.isUser}
                    time={chat.question.time}
                  />
                </div>
                <div>
                  <BotCard
                    onAsk={chat.response.text}
                    isUser={chat.isUser}
                    time={chat.response.time}
                  />
                  <div className="ml-12">
                    <Rating
                      name={`rating-${chat.id}`}
                      value={chat.rating || 0}
                      onChange={(e, newValue) =>
                        handleRatingChnage(chat.id, newValue)
                      }
                      disabled = {!!(chat.rating && chat.feedback)}
                    />
                    {chat.feedback ? <div><span className="font-semibold pr-2">Feedback:</span>{chat.feedback}</div> : ''}
                  </div>

                  {/* FeedBack modal starts here */}

                  {isOpen && selectedId === chat.id && (
                    <Modal
                    selectedId={selectedId}
                    isOpen={isOpen}
                    onClose={()=>setIsOpen(false)}
                    ariaHideApp={false}
                    className='bg-[#FAF7FF] rounded-xl shadow-lg m-auto p-3 border border-gray-100 outline-none'
                    overlayClassName='fixed inset-0 bg-white bg-opacity-20 flex justify-center items-start'
                    >
                      <div className="flex flex-col w-96 h-48">
                        <div className="items-center flex justify-between">
                        <div className="flex gap-1 items-end">
                          <GoLightBulb size={25}/>
                          <p>Provide Additional Feedback</p>
                        </div>
                        <div>
                          <button type="button" onClick={handleClose} className="text-xl font-semibold">
                            X
                          </button>
                        </div>
                      </div>
                      <input
                        type='text'
                        value={message}
                        placeholder="Provide additional feedback..."
                        cols={15}
                        rows={10}
                        onChange={(e) => setMessage(e.target.value)}
                        className="rounded-md shadow-lg m-2 outline-none p-2 border h-96"
                      />
                      <div className="flex justify-end px-2 mt-2">
                        <button type="button" onClick={handleSubmit} 
                      className="bg-[#D7C7F4] py-2 px-5 rounded-lg shadow-md font-semibold w-min">
                        Submit
                      </button>
                      </div>
                      </div>
                    </Modal>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
