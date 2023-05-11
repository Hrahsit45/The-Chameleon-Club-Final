import React from 'react'
import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'
import HomeThree from './HomeThree/HomeThree'
import HomeFour from './HomeFour'
import "./HomeFeed.css"
import HomeBAck from "./Images/HomeBackgrund.svg"
import { useLocation } from 'react-router-dom'
import { useState , useEffect } from 'react';
import axios from 'axios';

const HomeFeed = () => {

  const { state } = useLocation();
  return (
    <div className='home-head'>
      <img src={HomeBAck} alt="background" id='bg-feed'/>
      <div className='home-bdy'>
      <HomeOne email = {state.email} number = {state.number}/>
      <HomeTwo/>
      <HomeThree  id = {state.id}  name = {state.name}/>
      <HomeFour/>
    </div>
    </div>
  )
}

export default HomeFeed