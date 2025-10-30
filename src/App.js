import SavedChat from "./ChatHistory/savedConv";
import Chat from "./component/chatWindow";
import NavBar from "./component/navBar";
import SideBar from "./component/sideBar";
import data from "./data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './component/mainPage'
import Buttons from "./component/buttons";
import { useState } from "react";
import "./App.css";

function App() {
  const [chatWindow, setChatWindow] = useState(false);
  const [question, setQuestion] = useState("");
  const [qaPair, setQaPair] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

    const botAnswer = ansFound ? (
      ansFound.response
    ) : (
      'Sorry, Did not understand your query!'
    );

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
        rating:null,
      },
    ]);
  };

  return (
    <BrowserRouter>
      <div className="flex w-full bg-gradient-to-b from-violet-50 via-violet-100 to-violet-100">
        <div className="h-screen md:w-1/5 md:bg-white">
          <SideBar
            setQuestion={setQuestion}
            setQaPair={setQaPair}
            setChatWindow={setChatWindow}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
        <div className="w-full h-screen bg-gradient-to-b from-violet-50 via-violet-100 to-violet-100">
          <div className="text-start text-4xl text-[#9785BA] font-bold px-3">
            <NavBar />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Chat
                  question={question}
                  setQuestion={setQuestion}
                  qaPair={qaPair}
                  setQaPair={setQaPair}
                  chatWindow={chatWindow}
                  setChatWindow={setChatWindow}
                  handleTemplateClick={handleTemplateClick}
                />
              }
            />
            <Route path="/history" element={<SavedChat />} />
            <Route path="/home" element={<Main />} 
              />
          </Routes>
          <div className="mx-3">
            <Buttons
              question={question}
              setQuestion={setQuestion}
              handleClick={handleClick}
              handleSaveChat={handleSaveChat}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
