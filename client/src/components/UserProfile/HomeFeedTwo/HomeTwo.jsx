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

  useEffect(() => {

   //console.log(props.data.AcceptedReq)
    setData(props.data.AcceptedReq)
  // console.log(props.data.AcceptedReq)
  data.map((e) => {
    console.log(e.userId)
  })
   //fetchUser()

  }, [])




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
      <p className='uSn-prf-tre-hn'>Connections</p>
      <input type="text" placeholder="Search members... " onChange={handleSearch} className="usrch-bar" />
      {data.map((member) => {
        return (
          
          <SnTwo
            id={member.userId}
            imgSrc={Imges}
            name={member.name}
            memberCount=""
            userId= {props.data._id}
           // email={member.email}
          />
        );
      })}
    </div>
  );
}

export default HomeTwo;
