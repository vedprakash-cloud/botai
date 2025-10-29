

export default function Buttons({question, setQuestion, handleClick, handleSaveChat}){
    return (
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
            type="button"
            className="px-3 md:px-7 bg-[#D7C7F4] rounded-lg md:rounded-xl shadow-md font-semibold"
            onClick={handleSaveChat}
            >
              Save
            </button>
          </div>
        </div>
    )
}