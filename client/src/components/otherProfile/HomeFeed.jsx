import React from 'react'
import HomeOne from './HomeOne'
import HomeTwo from './HomeFeedTwo/HomeTwo'
import HomeThree from './HomeThree/HomeThree'
import HomeFour from './HomeFour'
import "./HomeFeed.css"
import {useLocation} from 'react-router-dom'
import HomeBAck from "./Images/HomeBackgrund.svg"
const OtherProfile = () => {

  const {state} = useLocation()

  console.log(state.data)
  return (

   
    <div className='home-head'>
      <img src={HomeBAck} alt="background" id='bg-feed'/>
      <div className='uhome-bdy'>
      <HomeOne data = {state.data}/>
      <HomeThree data = {state.data} uid = {state.uid}/>
      <HomeTwo data = {state.data} uid = {state.uid}/>
      
      <HomeFour/>
    </div>
    </div>
  )
}

export default OtherProfile