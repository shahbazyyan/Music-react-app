import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { clinetAPI } from '../../spotify';
import SongCard from '../../components/songCard/SongCard';
import Queue from '../../components/queue/Queue';
import "./player.css";
import AudioPlayer from '../../components/audioPlayer/AudioPlayer';



function Player() {
const location = useLocation();
const [songs, setSongs] = useState([]);
const [curSong, setCurSong] = useState({});
const [curIndex, setCurIndex] = useState(0);

useEffect(() => {
  if (location.state) {
    clinetAPI
      .get("playlists/" + location.state?.id + "/tracks")
      .then((res) => {
        setSongs(res.data.items);
        setCurSong(res.data?.items[0]?.track);
      });
  }
}, [location.state]);

useEffect(() => {
  setCurSong(songs[curIndex]?.track);
}, [curIndex, songs]);

  return (
    <div className='screen-container flex'>
      <div className="left-player-body">
        <AudioPlayer curSong={curSong}/>
      </div>
      <div className="right-player-body">
        <SongCard album={curSong?.album}/>
        <Queue songs={songs} setCurIndex={setCurIndex}/>
      </div>

    </div>
  )
}

export default Player