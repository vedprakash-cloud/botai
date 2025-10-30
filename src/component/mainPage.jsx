import profile from "../assets/Group 1000011097.svg";
import data from "../data.json";
import Avatar from '@mui/material/Avatar';


export default function MainPage({onTemplateClick}){

    const lastFour = data.slice(-4);
    return (
        <div className="flex flex-col justify-center px-4 w-full h-[480px] md:h-full">
            <div className="flex flex-col justify-center items-center mb-5 font-semibold text-3xl md:text-4xl">
            <p>How Can I Help You Today</p>
            <div className="md:w-full flex justify-center">
              <Avatar
              src={profile}
              alt="profile.svg"
            />
            </div>
          </div>
          <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-5 w-full h-80 overflow-hidden">
            {lastFour.map((item) => (
              <div
                key={item.id}
                className="text-start rounded-lg p-6 bg-white shadow-md grid md:gap-5 cursor-pointer"
                onClick={()=>onTemplateClick && onTemplateClick(item.question)}
              >
                <p className="text-base md:text-lg font-bold">{item.question}</p>
                <p className="text-xs md:text-sm text-gray-400">
                  Get immediate AI generated response
                </p>
              </div>
            ))}
          </div>
        </div>
    )
}