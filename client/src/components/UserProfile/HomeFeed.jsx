import React from 'react'
import HomeOne from './HomeOne'
import HomeTwo from './HomeFeedTwo/HomeTwo'
import HomeThree from './HomeThree/HomeThree'
import HomeFour from './HomeFour'
import "./HomeFeed.css"
import { useLocation } from 'react-router-dom'
import HomeBAck from "./Images/HomeBackgrund.svg"
import Notify from './notification'
const Home = () => {

  

  const {state} = useLocation()

  console.log(state.id._id)
  return (
    <div className='home-head'>
      <img src={HomeBAck} alt="background" id='bg-feed'/>
      <div className='uhome-bdy'>
      <HomeOne data = {state.id}/>
      <HomeThree data = {state.id}/>
      <HomeTwo data = {state.id}/>
      <HomeFour/>
      <Notify />
    </div>
    </div>
  )
}

export default Home