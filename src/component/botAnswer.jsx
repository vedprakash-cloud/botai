import bot from '../assets/Group 1000011097.svg';
import { useState } from 'react';
import LikeButton from './likeDislike'

export default function BotAnswer({onAsk,time}){

    const [rating, setRating] = useState(null)

    return (
        <div className='flex gap-3'>
            <div className= 'h-min rounded-full'>
                <img src={bot} alt="user-profile.svg" />
            </div>
            <div className='w-full flex flex-col'>
                <span className='text-sm'>Soul AI</span>
                <p className='mb-2 text-sm md:text-base'>{onAsk}</p>
                <div className='flex gap-2'>
                    <p>{time}</p>
                    <div className={`${rating ? 'block opacity-100' : 'hidden group-hover:block hover:block opacity-0 group-hover:opacity-100 hover:opacity-100'}`}>
                        <LikeButton onLike={()=>setRating('like')} onDislike={()=>setRating('dislike')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}