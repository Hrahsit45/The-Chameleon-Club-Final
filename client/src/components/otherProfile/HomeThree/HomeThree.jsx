import React, { useState , useEffect } from 'react';
import Gallery from './Gallery';
import './Feed.css';
import image from "../Images/nature.jpg"
import axios from 'axios';





function HomeThree(props) {


  const [requestState , setRequest] = useState("Connect")

  console.log(requestState)
//  console.log(props.uid + "  " +  props.data._id)

  useEffect(() => {

    console.log(props.uid + "  "  + props.data._i)

    check()


    
  })

  const check = async() => {
      
    await axios.get("http://localhost:5000/user/isfriend/"+props.uid+'/'+props.data._id).then((res) => {
        console.log(res.data)
        var accepted = [{}]
        var sentReq = [{}]
        sentReq = res.data.friendList
        accepted = res.data.AcceptedReq;
        var uid = []
        var fuid = []
        accepted.map((mem) => (
        uid.push(mem.userId)
        ))
        console.log(uid + "  " + props.uid)
        sentReq.map((mem) => (
          fuid.push(mem.userId)
        ))
        console.log(fuid)
        if(uid.includes(props.data._id))
        {
          setRequest('Disconnect')
        }
        else if(fuid.includes(props.data._id))
        {
          setRequest('RequestSent')
        }
        else
        {
          setRequest('Connect')
        }
        
    })
  }

  const handleRequest = async() => {
      console.log(props.uid)
    
    if(requestState == 'Connect'){
      const formData = new FormData();

      var url1 = 'http://localhost:5000/user/sendRequest/'+props.uid+'/'+props.data._id

      console.log(props.data.name)

      formData.append('name' , props.data.name)
      formData.append('text' , 'wants to connect with you' )
      formData.append('type' , 'request')
     
      var url = 'http://localhost:5000/notify/save/'+props.uid+'/'+props.data._id

      axios.post(url1)
      axios.post(url , formData , {
        headers: {
          'Content-Type': 'application/json'
        }
      })
     
      await check()
      window.location.reload()
    }

      if(requestState == 'Disconnect'){
               
        var url = 'http://localhost:5000/user/deleteRequest/'+props.uid+'/'+props.data._id

         axios.post(url)

         await check()
         window.location.reload()

      }

  }
  

  return (
    <div className='uSn-Tw-usr'>
      {/* ************************One****************** */}
     <div className='uSn-Tw-usr-one'>
      <img src={props.data.profile} alt="Profile Image" className='uprfle_img' />
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
