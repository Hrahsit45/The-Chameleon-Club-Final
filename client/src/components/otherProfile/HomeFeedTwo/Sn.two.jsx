import React from 'react';

function SnTwo({ imgSrc, name, memberCount }) {
  return (
    <div className='uSn-two-ctn-body'>
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
