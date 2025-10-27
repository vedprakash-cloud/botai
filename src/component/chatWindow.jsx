/* eslint-disable no-lone-blocks */
import profile from "../assets/Group 1000011097.svg";
import NavBar from "./navBar";
import newChat from "../assets/image 31.svg";
import data from "../data.json";
import { useState, useRef, useEffect } from "react";
import Main from "./mainPage";
import ChatCard from "./userChat";
import BotCard from "./botAnswer";
import SavedChat from "../ChatHistory/savedConv";

export default function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [pastChat, setPastChat] = useState(false);
  const [chatWindow, setChatWindow] = useState(false);
  const [question, setQuestion] = useState("");
  const [qaPair, setQaPair] = useState([]);

  const messageRef = useRef(null);

  {
    /*functions start here************************ */
  }

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [qaPair]);

  const handleSaveChat = () => {
    try {
      const savedChat = JSON.parse(localStorage.getItem("data")) || [];

      const updatedChat = [...savedChat, qaPair];

      localStorage.setItem("data", JSON.stringify(updatedChat));

      alert("chat saved successfully!");
    } catch (err) {
      console.error("Error in saving the chat data!");

      alert("chat not saved...");
    }
  };

  const handleClick = () => {
    if (question.trim()) {
      startChatFlow(question);
      setQuestion("");
    }
  };

  const handleTemplateClick = (templateQuestion) => {
    if (!templateQuestion) return;
    startChatFlow(templateQuestion);
  };

  const startChatFlow = (userQuestion) => {
    setChatWindow(true);

    const ansFound = data.find(
      (item) =>
        item.question &&
        item.question.trim().toLowerCase() === userQuestion.trim().toLowerCase()
    );

    const botAnswer = ansFound
      ? ansFound.response
      : "Sorry, did not understand your query!";

    let cardId = ansFound ? ansFound.id : Date.now();

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setQaPair((prev) => [
      ...prev,
      {
        id: cardId,
        question: { text: userQuestion, isUser: true, time },
        response: { text: botAnswer, isUser: false, time },
      },
    ]);
  };

  {
    /****************************************ends here****************************/
  }

  return (
    <div className="flex w-full h-screen bg-gradient-to-b from-violet-50 via-violet-100 to-violet-100">
      {/*past conversation section starts here*/}

      <div className="md:w-1/5 md:bg-white">
        <div className="hidden md:flex flex-col gap-5">
          <div className="bg-[#D7C7F4] py-1 px-0 text-lg flex items-center justify-evenly">
            <img src={profile} alt="logo.svg" className="w-10 shadow-xs" />
            <p>New Chat</p>
            <button
              onClick={() => {
                setQuestion("");
                setQaPair([]);
                setChatWindow(true);
              }}
            >
              <img src={newChat} alt="Newchat.svg" />
            </button>
          </div>
          <button
            className="bg-[#D7C7F4] rounded-xl py-3 mx-3 font-bold shadow-md"
            onClick={() => {
              setQuestion("");
              setQaPair([]);
              setPastChat(true);
            }}
          >
            Past Conversations
          </button>
        </div>

        {/*mobile hamburger menu start here */}

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "X" : "☰"}
        </button>

        {isOpen && (
          <div className="flex flex-col gap-5 z-40">
            <div className="bg-[#D7C7F4] py-1 px-0 text-lg flex items-center justify-evenly">
              <img
                src={profile}
                alt="logo.svg"
                className="w-5 md:w-10 shadow-xs"
              />
              <p className="text-sm md:text-base">New Chat</p>
              <button
                className="w-5 md:w-10"
                onClick={() => {
                  setQuestion("");
                  setQaPair([]);
                  setChatWindow(true);
                }}
              >
                <img src={newChat} alt="Newchat.svg" />
              </button>
            </div>
            <button
              className="bg-[#D7C7F4] rounded-xl py-2 md:py-3 mx-3 font-bold shadow-md text-nowrap text-sm md:text-base"
              onClick={() => {
                setQuestion("");
                setQaPair([]);
                setPastChat(true);
              }}
            >
              Past Conversations
            </button>
          </div>
        )}
      </div>

      {/*************************chat screen starts here*******************/}

      <div className="px-5 w-full">
        <div className="text-start text-4xl text-[#9785BA] font-bold">
          <NavBar />
        </div>
        {pastChat ? (
          <div>
            <SavedChat />
          </div>
        ) : (
          <div className={`flex h-[470px] md:h-[550px] p-6 overflow-auto`}>
            {chatWindow ? (
              <div className="w-full flex flex-col gap-5">
                {qaPair.map((item) => (
                  <div className="grid gap-2" key={item.id}>
                    <ChatCard
                      onAsk={item.question.text}
                      isUser={item.isUser}
                      time={item.question.time}
                    />
                    <BotCard
                      onAsk={item.response.text}
                      isUser={item.isUser}
                      time={item.response.time}
                    />
                  </div>
                ))}
                <div ref={messageRef} />
              </div>
            ) : (
              <Main onTemplateClick={handleTemplateClick} />
            )}
          </div>
        )}

        {/**************input box and button starts here*********/}

        <div className="flex absolute bottom-0 w-4/5 mb-5">
          <input
            type="text"
            className="border rounded-lg md:rounded-xl w-screen p-2 md:p-3 shadow-md outline-none"
            placeholder="Message Bot AI..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="flex gap-2 md:gap-5 ml-2 md:ml-5">
            <button
              type="submit"
              className="text-sm px-3 md:px-7 bg-[#D7C7F4] rounded-lg md:rounded-xl font-semibold shadow-md"
              onClick={handleClick}
            >
              Ask
            </button>
            <button
              className="px-3 md:px-7 bg-[#D7C7F4] rounded-lg md:rounded-xl shadow-md font-semibold"
              onClick={handleSaveChat}
            >
              Save
            </button>
          </div>
        </div>

        {/**************************input box buttons ends here***********************/}
      </div>
    </div>
  );
}
