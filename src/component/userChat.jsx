import user from '../assets/User.svg';
import Avatar from '@mui/material/Avatar';

export default function ChatCard({onAsk,time}){


    return(
        <div className='flex gap-3'>
                <Avatar src={user} alt="user-profile.svg" />
            <div className='w-full'>
                <h1 className='text-base font-semibold'>You</h1>
                <p className='mb-2 text-sm md:text-base'>{onAsk}</p>
                <p className='text-sm text-gray-400 font-semibold'>{time}</p>
            </div>
        </div>
    )
}