import {useState} from 'react';
import { ThumbsUpIcon } from 'lucide-react';
import { ThumbsDownIcon } from 'lucide-react';

export default function LikeDislike({onLike, onDislike}) {

    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [selectedLike, setSelectedLike] = useState(0);
    const [selectedDislike, setSelectedDislike] = useState(0);


    const handleLike =()=>{
        setLike(true);
        setSelectedLike(selectedLike+1);
        if(dislike){
            setDislike(false);
        }
    }

    const handleDislike = ()=>{
        setDislike(true);
        setSelectedDislike(selectedDislike+1)
        if(like){
            setLike(false);
        }
    }

  return (
    <div className='flex gap-2'>
      <div>
        <button type='button' onClick={handleLike}>
            {like ? <ThumbsUpIcon size={15} color="blue" /> : <ThumbsUpIcon size={15} color='grey'/>}
        </button>
      </div>
      <div>
        <button type='button' onClick={handleDislike}>
            {dislike ? <ThumbsDownIcon size={15} color='red'/> : <ThumbsDownIcon size={15} color='grey'/>}
        </button>
      </div>
    </div>
  );
}
