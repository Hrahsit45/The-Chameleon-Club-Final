import React , {useState , useEffect} from 'react'
import HomeOne from './HomeOne'
import HomeTwo from './HomeFeedTwo/HomeTwo'
import HomeThree from './HomeThree/HomeThree'
import HomeFour from './HomeFour'
import NewHomeOne from '../UserProfile/HomeOne'
import "./HomeFeed.css"
import {useLocation} from 'react-router-dom'
import HomeBAck from "./Images/HomeBackgrund.svg"
import axios from 'axios'
const OtherProfile = () => {

  const {state} = useLocation()

  const id = state.data._id

    const [data , setData] = useState([{}])
    const [load , setLoad] = useState(true)
    const [loading, setLoading] = useState(true);
     
    useEffect(() => {

      console.log(state.rdata)
     setTimeout(() => {
       setLoad(false)
     },2000)

     fetch()
    },[])

    const fetch = async() => {
      await axios.get( "http://localhost:5000/user/fetchUserid/" + id).then((res) => {

       setData(res.data)
       console.log(data)

    }).catch((err) => {

    })
    }


  return (
    <div className="home-head">
      <img src={HomeBAck} alt="background" id="bg-feed" />
      {load ? (
        <></>
      ) : (
        <div className="uhome-bdy">
          <NewHomeOne
            data={state.rdata}
            name={state.rdata.name}
            email={state.rdata.email}
            id={state.rdata._id}
          />
          <HomeThree
            Userdata={state.rdata}
            uid={state.rdata._id}
            Frienddata={data}
          />
          <HomeTwo data={data} uid={state.uid} friendData={state.rdata} />
          <HomeFour />
        </div>
      )}
    </div>
  );
}

export default OtherProfile