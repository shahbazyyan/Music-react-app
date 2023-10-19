import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from '../Feed/Feed';
import Library from '../Library/Library';
import Favourites from '../Favourites/Favourites';
import Player from '../Player/Player';
import Treading from '../Treading/Treading';
import "../Home/home.css";


function Home() {
  return (
    <Router>
        <section className='main_navs'>
        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/player' element={<Player/>}/>
            <Route path='/treading' element={<Treading/>}/>
            <Route path='/favourite' element={<Favourites/>}/>

        </Routes>
        </section>
    </Router>
  )
}

export default Home