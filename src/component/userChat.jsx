import user from '../assets/User.svg';

export default function ChatCard({onAsk,time}){


    return(
        <div className={`p-6 font-semibold shadow-md rounded-xl flex h-min text-start gap-5`}>
            <div className='shadow-lg h-min rounded-full'>
                <img src={user} alt="user-profile.svg" />
            </div>
            <div className='w-full'>
                <h1 className='text-sm'>You</h1>
                <p className='mb-2 text-sm md:text-base'>{onAsk}</p>
                <p>{time}</p>
            </div>
        </div>
    )
}