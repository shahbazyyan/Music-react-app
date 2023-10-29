import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Library from '../Library/Library';
import Favourites from '../Favourites/Favourites';
import Player from '../Player/Player';
import Treading from '../Treading/Treading';
import "./home.css";
import SideBar from '../../components/SideBar';
import Login from '../Auth/Login';
import { setClientTokenCode } from '../../spotify';

function Home() {

  const [tokenCode, setTokenCode] = useState("");

  useEffect(() => {
    const tokenCode = window.localStorage.getItem("token");
    const hashtag = window.location.hash;
    window.location.hash = "";
    if (!tokenCode && hashtag) {
      const _token = hashtag.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setTokenCode(_token);
      setClientTokenCode(_token);
    } else {
      setTokenCode(tokenCode);
      setClientTokenCode(tokenCode);
    }
  }, []);

  return !tokenCode ? (
      <Login/>
  ) : (
    <Router>
        <div className='main_body'>
          <SideBar/>
        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/player' element={<Player/>}/>
            <Route path='/treading' element={<Treading/>}/>
            <Route path='/favourites' element={<Favourites/>}/>

        </Routes>
        </div>
    </Router>
  );
}

export default Home