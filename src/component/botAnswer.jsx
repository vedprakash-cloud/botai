import bot from '../assets/Group 1000011097.svg';
import LikeButton from './likeDislike'
import Avatar from '@mui/material/Avatar'

export default function BotAnswer({onAsk,time}){

    return (
        <div className='flex gap-3'>
                <Avatar src={bot} alt="user-profile.svg" />
            <div className='w-full flex flex-col'>
                <span className='text-base font-semibold'>Soul AI</span>
                <p className='mb-2 text-sm md:text-base'>{onAsk}</p>
                <div className='flex gap-2'>
                    <p className='text-sm text-gray-400 font-semibold'>{time}</p>
                    <div className='text-xs flex items-center'>
                        <LikeButton />
                    </div>
                </div>
            </div>
        </div>
    )
}