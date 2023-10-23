import React from 'react';
import "./sidebar.css";
import SideBarButton from './SideBarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';


function SideBar() {
  return (
    <div className='sidebar-container'>
         <img src="https://i.pinimg.com/originals/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg" alt="img"  className='profile-img'/>
         
         <div>
            <SideBarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
            <SideBarButton title="Treading" to="/treading" icon={<FaGripfire/>}/>
            <SideBarButton title="Player" to="/player" icon={<FaPlay/>}/>
            <SideBarButton title="Favourites" to="/favourites" icon={<MdFavorite/>}/>
            <SideBarButton title="Library" to="/" icon={<IoLibrary/>}/>
         </div>
         <SideBarButton title="SignOut" to="" icon={<FaSignOutAlt/>}/>
        </div>
  )
}

export default SideBar;