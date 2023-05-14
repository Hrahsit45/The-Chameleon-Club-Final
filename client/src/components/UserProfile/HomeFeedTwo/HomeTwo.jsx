import axios from 'axios';
import React, { useState , useEffect} from 'react';

import Imges from '../Images/smallImg.jpg';
import SnTwo from './Sn.two';

function HomeTwo(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const [data , setData] = useState([{}])
  const [id , setId] = useState()
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    setData(props.data.AcceptedReq)
    setId(props.data._id)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(data)
  //  fetchPost()
  },[])

  const fetchPost = async() => {

   //console.log(props.data.AcceptedReq)
   // setData(props.data.AcceptedReq)
    //setId(props.data._id)     
   
     setData([])
     const url = "http://localhost:5000/user/fetchUserid/"  + id
      await axios.get(url).then((docs) => {
       console.log(docs.data)
       setData(docs.data.AcceptedReq)
       console.log(data)
     }
        
     ) 
   // console.log(props.data)

   //fetchUser()

  }




  // const fetchUser = async() => {

  // //  let url =  "http://localhost:5000/fetchUser/" + props.userId

  // //  await axios.get(url , )
  // }

  // const filteredMembers = [
  //   {
  //     imgSrc: Imges,
  //     name: 'Yogesh Upadhyay',
  //     memberCount:'Connected since March 23',
  //   },
  //   {
  //     imgSrc: Imges,
  //     name: 'Oliver Smith',
  //     memberCount:'Connected since March 23',
  //   },
  //   {
  //     imgSrc: Imges,
  //     name: 'Professor Dhumketu',
  //     memberCount: 'Connected since March 23',
  //   },
  //   {
  //     imgSrc: Imges,
  //     name: 'Bhumika Chuphal',
  //     memberCount: 'Connected since March 23',
  //   },
  //   {
  //     imgSrc: Imges,
  //     name: 'Rohan Singh',
  //     memberCount: 'Connected since March 23',
  //   },
  //   {
  //     imgSrc: Imges,
  //     name: 'Aarav Mehta',
  //     memberCount: 'Connected since March 23',
  //   },
  //   {
  //     imgSrc: Imges,
  //     name: ' Billy Bowden',
  //     memberCount: 'Connected since March 23',
  //   },
  //   {
  //     imgSrc: Imges,
  //     name: 'Jane Doe',
  //     memberCount: 'Connected since March 23',
  //   },
  //   {
  //     imgSrc: Imges,
  //     name: 'Tim Crook ',
  //     memberCount: 'Connected since March 23',
  //   },
    

  // ]
  // data.filter((member) => {
  //   return member.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <div  className='uSn-prf-tre'>
      {loading ? <></> : <>
      <p className='uSn-prf-tre-hn'>Connections</p>
      
      <input type="text" placeholder="Search members... " onChange={handleSearch} className="usrch-bar" />
      
      {data.map((member) => {
        return (
          
          <SnTwo
            id={member.userId}
            imgSrc={Imges}
            name={member.name}
            memberCount=""
            userId= {id}
            profile = {member.profile}
          />
        );
      })}
      </>}
      
    </div>
  );
}

export default HomeTwo;
