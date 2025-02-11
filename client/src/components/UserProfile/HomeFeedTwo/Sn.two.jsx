import axios from 'axios';
import React , {useState , useEffect} from 'react';
import {useNavigate, useSubmit} from 'react-router-dom'

function SnTwo({ id , imgSrc, name, memberCount , userId , profile}) 
{
  const navi = useNavigate();
 
 // console.log(userId + " and " + id)

 const [data, setData] = useState([{}]);

 console.log(userId)

 useEffect(() => {
  //  console.log(name)
  axios.get("http://localhost:5000/user/fetchUserid/" + userId).then(async(docs) => {
     await setData(docs.data)
    })
 },[])

  const handleChange = async() => {

    console.log(userId + " here")

   await axios.get("http://localhost:5000/user/fetchUserid/" + userId).then(async(docs) => {
     await setData(docs.data)
    })

    await axios.get( "http://localhost:5000/user/fetchUserid/" + id).then((res) => {
  
    console.log(res.data)
    
      navi("/otherProfile" , {
        state : {
           rdata : data,
           data : res.data,
           uid : userId,
           id : data._id,

        }
      })

    }).catch((err) => {

    })

  }
  return (
    <div className='uSn-two-ctn-body' onClick={(e) => handleChange()}>
      <div className='uSn-two-one'>
        
          <img src={profile} alt="image" className='uSn-two-img' />
        
      </div>
      <div className='uSn-two-two'>
        <div className='uSn-two-two-1 text-black'>{name}</div>
        <div className='uSn-two-two-2'>{memberCount}</div>
      </div>
    </div>
  );
}

export default SnTwo;
