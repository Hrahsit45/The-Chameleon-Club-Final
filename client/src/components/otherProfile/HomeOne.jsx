import React from 'react'
import Logo from "./Images/Logo.mp4"
import imges from "./Images/smallImg.jpg"
import { useNavigate } from 'react-router-dom'
const HomeOne = (props) => {

  const navi = useNavigate();

  const goToFeed = () => {
    navi("/homefeed" , {
      state : {
         id : props.data._id,
         name : props.data.name,
         number : props.data.number,
         email : props.data.email
      }
    })
  }
  return (
    <div>
      <div className="uSn-one border-8 border-black">
        {/* ******************LOGO************************** */}
        <video
          src={Logo}
          autoPlay
          loop
          muted
          type="video/mp4"
          className="ulogo"
        />
        {/* ******************LOGO************************** */}

        {/* ****************** ButtonBody ************************** */}
        <div className="">
          <div>
            <img
              src={imges}
              alt="image"
              className="uSn-one-img"
              onClick={goToFeed}
            />
          </div>
          <div>
            <img src={imges} alt="image" className="uSn-one-img" />
          </div>
          <div>
            <img src={imges} alt="image" className="uSn-one-img" />
          </div>
          <div>
            <img src={imges} alt="image" className="uSn-one-img" />
          </div>
        </div>
        {/* ****************** ButtonBody ************************** */}

        {/* ******************LOGO************************** */}
        <div>
          {/* <div>Logo</div> */}
          <div>
            <img src={imges} alt="image" className="uSn-one-img" />
          </div>
        </div>

        {/* ******************LOGO************************** */}
      </div>
    </div>
  );
}

export default HomeOne