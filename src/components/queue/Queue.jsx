import React from 'react';
import './queue.css';

function Queue({ songs, setCurIndex}) {
  return (
    <div className="queue-container flex">
    <div className="queue flex">
      <p className="upNext">Up Next</p>
      <div className="queue-list">
        {songs?.map((track, index) => (
         <div
         key={index + "key"}
         className="queue-item flex"
         onClick={() => setCurIndex(index)} // Use setCurSong from props
       >
       
            <p className="track-name">{track?.track?.name}</p>
            <p>0:30</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Queue