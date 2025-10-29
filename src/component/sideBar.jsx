import profile from "../assets/Group 1000011097.svg";
import newChat from "../assets/image 31.svg";
import { Link } from "react-router-dom";

export default function SideBar({
  setQuestion,
  setQaPair,
  setChatWindow,
  isOpen,
  setIsOpen,
}) {

  
  return (
    <div>
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
        <Link
        to='/history'
          className="bg-[#D7C7F4] rounded-xl pl-5 py-3 mx-3 font-bold shadow-md"
          onClick={() => {
            setQuestion("");
            setQaPair([]);
          }}
        >
          Past Conversations
        </Link>
      </div>

      {/*mobile hamburger menu start here */}

      <div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "X" : "☰"}
        </button>
        {isOpen && (
          <div className="flex flex-col gap-5">
            <div className="bg-[#D7C7F4] py-1 text-lg flex items-center justify-evenly rounded-sm">
              <img
                src={profile}
                alt="logo.svg"
                className="w-5 md:w-10 shadow-xs"
              />
              <p className="text-sm md:text-base">New Chat</p>
              <Link
              to='/'
              >
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
              </Link>
            </div>
            <Link
              to="/history"
              className="bg-[#D7C7F4] rounded-xl px-2 py-3 mx-3 font-bold shadow-md text-nowrap text-sm md:text-base"
              onClick={() => {
                setQuestion("");
                setQaPair([]);
              }}
            >
              Past Conversations
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
