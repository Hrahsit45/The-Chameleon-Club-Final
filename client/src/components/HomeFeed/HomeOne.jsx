import React from 'react'
import Logo from "./Images/Logo.mp4"
import imges from "./Images/smallImg.jpg"
import { Link } from 'react-router-dom'
const HomeOne = (props) => {
  return (
    <div>
      <div className='Sn-one'>
{/* ******************LOGO************************** */}
<video src={Logo} autoPlay loop muted type='video/mp4' className='logo'/> 
{/* ******************LOGO************************** */}

{/* ****************** ButtonBody ************************** */}
<div className=''>
<div><img src={imges} alt="image" className='Sn-one-img' /></div>
<div><img src={imges} alt="image" className='Sn-one-img' /></div>
<div><img src={imges} alt="image" className='Sn-one-img' /></div>
<Link to = "/profile"> 
<div><img src={imges} alt="image" className='Sn-one-img' /></div>
</Link>
</div>
{/* ****************** ButtonBody ************************** */}


{/* ******************LOGO************************** */}
<div>
{/* <div>Logo</div> */}
<div><img src={imges} alt="image" className='Sn-one-img' /></div>
</div>

{/* ******************LOGO************************** */}

      </div>
    </div>
  )
}

export default HomeOne