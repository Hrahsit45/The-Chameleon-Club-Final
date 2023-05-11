import React, { useState } from 'react';
import Gallery from './Gallery';
import './Feed.css';
import image from "../Images/nature.jpg"


function HomeThree(props) {
  

  return (
    <div className='uSn-Tw-usr'>
      {/* ************************One****************** */}
     <div className='uSn-Tw-usr-one'>
      <img src={image} alt="Profile Image" className='uprfle_img' />
      <div>
      <div className='uSn-Tw-usr-hn Sn-Tw-usr-hn-hd'>{props.data.name}</div>
      <div className='uSn-Tw-usr-txt'>
        <div  className='uSn-Tw-usr-loc'>LOCATION</div>
        {/* <span className='uspn-btn'>Connect</span>
        <span className='uspn-btn'>Connect</span> */}
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
