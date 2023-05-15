import React from 'react'
import imges from './Images/smallImg.jpg'

const HomeFour = () => {
  return (
    <div className="uSn-usr-Four border-8 border-black">
      <div className="uSn-Four-hn-usr"> Account Settings</div>

      <div className="uSn-Four-bdy">
        <div className="uSn-fr-usr-ctn-body">
          <img src={imges} alt="image" className="uSn-fr-img" />
          <div className="uSn-fr-two-1"> Report User</div>
        </div>

        <div className="uSn-fr-usr-ctn-body">
          <img src={imges} alt="image" className="uSn-fr-img " />
          <div className="uSn-fr-two-1"> Block User</div>
        </div>
      </div>
    </div>
  );
}

export default HomeFour