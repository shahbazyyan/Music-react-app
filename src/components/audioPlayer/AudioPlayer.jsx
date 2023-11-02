import React from 'react';
import './audioplayer.css';
import ProgressCircle from './ProgressCircle';

function AudioPlayer() {
  return (
    <div className='player-body'>
        <div className="player-left-body">
         <ProgressCircle
         percentage={70}
         isPLaying={true}
        //  image={curSong?.album?.images[0]?.url}
         size={300}
         color="#c96850"
         />
        </div>
        <div className="player-right-body">

        </div>
    </div>
  )
}

export default AudioPlayer;