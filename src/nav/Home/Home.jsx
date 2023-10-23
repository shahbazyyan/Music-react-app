import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Library from '../Library/Library';
import Favourites from '../Favourites/Favourites';
import Player from '../Player/Player';
import Treading from '../Treading/Treading';
import "./home.css";
import SideBar from '../../components/SideBar';

function Home() {
  return (
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
  )
}

export default Home