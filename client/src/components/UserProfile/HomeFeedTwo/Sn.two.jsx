import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom'

function SnTwo({ id , imgSrc, name, memberCount , userId}) 
{
  const navi = useNavigate();
 
 // console.log(userId + " and " + id)
 

  const handleChange = async() => {

    console.log(userId + " here")
    await axios.get( "http://localhost:5000/user/fetchUserid/" + id).then((res) => {


      navi("/otherProfile" , {
        state : {
           data : res.data,
           uid : userId
        }
      })

    }).catch((err) => {

    })

  }
  return (
    <div className='uSn-two-ctn-body' onClick={handleChange}>
      <div className='uSn-two-one'>
        
          <img src={imgSrc} alt="image" className='uSn-two-img' />
        
      </div>
      <div className='uSn-two-two'>
        <div className='uSn-two-two-1'>{name}</div>
        <div className='uSn-two-two-2'>{memberCount}</div>
      </div>
    </div>
  );
}

export default SnTwo;
