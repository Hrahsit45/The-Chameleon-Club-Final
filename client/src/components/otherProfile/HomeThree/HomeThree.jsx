import React, { useState } from 'react';
import Gallery from './Gallery';
import './Feed.css';
import image from "../Images/nature.jpg"
import axios from 'axios';



function HomeThree(props) {


  const [requestState , setRequest] = useState("connect")

  console.log(requestState)
  console.log(props.uid + "  " +  props.data._id)

  const handleRequest = async() => {
      console.log(props.uid)
    // console.log("hiii")
    if(requestState == 'connect'){

      ///console.log("inside if")
     //await axios.post('http://localhost:5000/user/sendRequest/'+props.uid+'/'+props.data._id)

      const formData = new FormData();

      console.log(props.data.name)

      formData.append('name' , props.data.name)
      formData.append('text' , 'wants to connect with you' )
      formData.append('type' , 'request')
     
      var url = 'http://localhost:5000/notify/save/'+props.uid+'/'+props.data._id

      console.log(formData)
      await axios.post(url , formData , {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
      console.log(res)
      }).catch((err) => {
        console.log(err)
      })
      setRequest('Diconnect')
    }

  }
  

  return (
    <div className='uSn-Tw-usr'>
      {/* ************************One****************** */}
     <div className='uSn-Tw-usr-one'>
      <img src={image} alt="Profile Image" className='uprfle_img' />
      <div>
      <div className='uSn-Tw-usr-hn Sn-Tw-usr-hn-hd'>{props.data.name}</div>
      <div className='uSn-Tw-usr-txt'>
        <div  className='uSn-Tw-usr-loc'>LOCATION</div>
        <button className="bg-black-500 hover:bg-black-700 text-white font-bold py-2 border border-black-700 rounded position: absolute z-40 left-100"  onClick={handleRequest}>{requestState}</button>
      </div>
      </div>
      </div>
    

{/* ****************************************Two*****************************************/}
      <div  >
        <div className='uSn-Tw-usr-hn'>Interests & Preferences</div>
        <div className='uSn-Tw-usr-two-bdy'>
        <div className='uSn-Tw-usr-two-bdy-tx'> Solo Backpacking </div>
        <div className='uSn-Tw-usr-two-bdy-tx'> Luxury Getaways </div>
        <div className='uSn-Tw-usr-two-bdy-tx'> Nature Trails</div>
        <div className='uSn-Tw-usr-two-bdy-tx'> Luxury Getaways </div>
        <div className='uSn-Tw-usr-two-bdy-tx'> Nature Trails</div>
        <div className='uSn-Tw-usr-two-bdy-tx'> Luxury Getaways </div>
        
        </div>
      </div>



      <div>
      <div className='uSn-Tw-usr-hn'>Post</div>

      <Gallery data = {props.data}/>
      </div>



    </div>
  );
}

export default HomeThree;
