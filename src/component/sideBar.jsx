import profile from "../assets/Group 1000011097.svg";
import newChat from "../assets/image 31.svg";
import { useNavigate } from "react-router-dom";

export default function SideBar({
  setQuestion,
  setQaPair,
  setChatWindow,
  isOpen,
  setIsOpen,
}) {
  const navigate = useNavigate();
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
        <button
          className="bg-[#D7C7F4] rounded-xl py-3 mx-3 font-bold shadow-md"
          onClick={() => {
            setQuestion("");
            setQaPair([]);
            navigate("/history");
          }}
        >
          Past Conversations
        </button>
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
              className="bg-[#D7C7F4] rounded-xl py-2 px-2 md:py-3 mx-3 font-bold shadow-md text-nowrap text-sm md:text-base"
              onClick={() => {
                setQuestion("");
                setQaPair([]);
                navigate("/history");
              }}
            >
              Past Conversations
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
