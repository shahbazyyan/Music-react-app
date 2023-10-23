import React from 'react';
import "./sidebarButton.css";
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';

function SideBarButton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const buttonActiveClass = isActive ? "btn-icon active" : "btn-icon";
  return (
    <Link to={props.to}>
    <div className={buttonActiveClass}>
      <IconContext.Provider value={{size:"24px", className: "btns"}}>
      {props.icon}
      <p className='btn-title'>{props.title}</p>
      </IconContext.Provider>
    </div>
    </Link>
  )
}

export default SideBarButton;