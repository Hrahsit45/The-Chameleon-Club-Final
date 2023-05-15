import React, { useState , useEffect } from 'react';
import Gallery from './Gallery';
import './Feed.css';
import image from "../Images/nature.jpg"
import axios from 'axios';





function HomeThree(props) {


  const [requestState , setRequest] = useState("Connect")


  useEffect(() => {
   // console.log(props.Userdata)
    check()  
  })

  const check = async() => {
       var accepted = [{}];
       var sentReq = [{}];
   
      await props.Userdata.AcceptedReq.map((x) => {
         accepted.push(x.userId)
      })

      await props.Userdata.friendList.map((x) => {
         sentReq.push(x.userId);
       });

      if(accepted.includes(props.Frienddata._id))
      {
        setRequest('Disconnect')
      }
      else if (sentReq.includes(props.Frienddata._id)) {
        setRequest("Request Sent");
      }
      else{
         setRequest("Connect");
      }

  }

  const handleRequest = async() => {
      console.log(props.uid)
    
    if(requestState == 'Connect'){
      const formData = new FormData();

      var url1 = 'http://localhost:5000/user/sendRequest/'+props.uid+'/'+props.Frienddata._id

    //  console.log(props.data.name)

      formData.append('name' , props.Frienddata.name)
      formData.append('text' , 'wants to connect with you' )
      formData.append('type' , 'request')
     
      var url =
        "http://localhost:5000/notify/save/" +
        props.Userdata._id +
        "/" +
        props.Frienddata._id;

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
               
        var url = 'http://localhost:5000/user/deleteRequest/'+props.Frienddata._id+'/'+props.Userdata._id

         axios.post(url)

         await check()
         window.location.reload()

      }

  }
  

  return (
    <div className="uSn-Tw-usr border-8 border-black">
      {/* ************************One****************** */}
      <div className="uSn-Tw-usr-one">
        <img
          src={props.Frienddata.profile}
          alt="Profile Image"
          className="uprfle_img"
        />
        <div>
          <div className="uSn-Tw-usr-hn Sn-Tw-usr-hn-hd">
            {props.Frienddata.name}
          </div>
          <div className="uSn-Tw-usr-txt">
            <div className="uSn-Tw-usr-loc">LOCATION</div>
            <button
              className="bg-black-500 hover:bg-black-700 text-white font-bold py-2 border border-black-700 rounded position: absolute z-40 left-100"
              onClick={handleRequest}
            >
              {requestState}
            </button>
          </div>
        </div>
      </div>

      {/* ****************************************Two*****************************************/}
      <div>
        <div className="uSn-Tw-usr-hn">Interests & Preferences</div>
        <div className="uSn-Tw-usr-two-bdy">
          <div className="uSn-Tw-usr-two-bdy-tx"> Solo Backpacking </div>
          <div className="uSn-Tw-usr-two-bdy-tx"> Luxury Getaways </div>
          <div className="uSn-Tw-usr-two-bdy-tx"> Nature Trails</div>
          <div className="uSn-Tw-usr-two-bdy-tx"> Luxury Getaways </div>
          <div className="uSn-Tw-usr-two-bdy-tx"> Nature Trails</div>
          <div className="uSn-Tw-usr-two-bdy-tx"> Luxury Getaways </div>
        </div>
      </div>

      <div>
        <div className="uSn-Tw-usr-hn">Post</div>

        <Gallery data={props.Frienddata} />
      </div>
    </div>
  );
}

export default HomeThree;
