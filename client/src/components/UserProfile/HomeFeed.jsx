import React , {useState , useEffect}from 'react'
import HomeOne from './HomeOne'
import HomeTwo from './HomeFeedTwo/HomeTwo'
import HomeThree from './HomeThree/HomeThree'
import HomeFour from './HomeFour'
import "./HomeFeed.css"
import { useLocation } from 'react-router-dom'
import HomeBAck from "./Images/HomeBackgrund.svg"
import Notify from './notification'
import axios from 'axios'
const Home = () => {

  

  const {state} = useLocation()
  const [data , setData] = useState([{}])
  const [loading , setLoading] = useState(true)

  //console.log(state.id._id)

  useEffect(() => {

    console.log(state.id)

   setTimeout(() => {
      setLoading(false);
    }, 2000);
   
  const url = "http://localhost:5000/user/fetchUserid/"  + state.id._id
  axios.get(url).then((docs) => {
    setData(docs.data)
   // console.log(docs.)
   
 }
    
 ) 
  },[])
  return (
    <div className='home-head'>
      <img src={HomeBAck} alt="background" id='bg-feed'/>
      <div className='uhome-bdy'>
      <HomeOne data = {state.id} id = {state.id._id} name = {state.id.name} email = {state.id.email}/>
      <HomeThree data = {state.id}/>
      {loading ? <></> :  <HomeTwo data = {state.id}/>}
      <HomeFour/>
      <Notify />
    </div>
    </div>
  )
}

export default Home