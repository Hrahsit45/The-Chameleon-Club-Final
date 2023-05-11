import React from 'react'
import "./Navigation.css"
import Logo from "../videos/Logo.mp4"
import {NavLink} from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar">
    {/* --------------------------------------------logo ---------------------------------------------------*/}
    <div className="logo">
    <video src={Logo} autoPlay loop muted class="logo"type='video/mp4' /> 
    </div>

    

    {/*------------------------------------------ menu----------------------------------------------------- */}
    <div className="menu">
      <ul className='menu_items'>
        <li className='menu-list'>
          <NavLink to="/" className="nav-menu">Home</NavLink>
        </li>
        <li className='menu-list'>
          <NavLink to="/about">Discover</NavLink>
        </li>
        <li className='menu-list'>
          <NavLink to="/services">Chats</NavLink>
        </li>
        <li className='menu-list'>
          <NavLink to="/shop">OurStory</NavLink>
        </li>

        {/* <li className=' menu-list' id='nav-bar-1'> Home</li>
        <li className=' menu-list' id='nav-bar-1'> Home</li>
        <li className=' menu-list' id='nav-bar-1'> Home</li> */}
      
      </ul>
    </div>     
  </nav>
);
};

export default Navigation