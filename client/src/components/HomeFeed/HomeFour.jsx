import React from 'react'
import imges from './Images/smallImg.jpg'

const HomeFour = () => {
  return (
    <div className='Sn-Four border-8 border-black'>
      <div className=' Sn-Four-hn'>
        Tribe you might be like
      </div>
      
      <div className='Sn-Four-bdy'>
      
        <div className='Sn-fr-ctn-body'>
              <div className='Sn-two-one'>
                <div id="img-ctr-one">
                  <img src={imges} alt="image" className='Sn-fr-img '/>
                </div>
                  <div className='Sn-two-img-two-hr'>
                    <img src={imges} alt="image" className='Sn-fr-img-two' />
                    <img src={imges} alt="image" className='Sn-fr-img-two' />
                  </div>
                </div>

                <div className='Sn-two-one'>
                  <div  className='Sn-fr-two-1'> TBT</div>
                  <div  className='Sn-fr-two-2'>12 Members</div>
                </div>
          </div>

          {/* Two */}
          <div className='Sn-fr-ctn-body'>
              <div className='Sn-two-one'>
                <div id="img-ctr-one">
                  <img src={imges} alt="image" className='Sn-fr-img '/>
                </div>
                  <div className='Sn-two-img-two-hr'>
                    <img src={imges} alt="image" className='Sn-fr-img-two' />
                    <img src={imges} alt="image" className='Sn-fr-img-two' />
                  </div>
                </div>

                <div className='Sn-two-one'>
                  <div  className='Sn-fr-two-1'> SelfieGameStrong</div>
                  <div  className='Sn-fr-two-2'>128 Members</div>
                </div>
          </div>
          {/* Three */}
          <div className='Sn-fr-ctn-body'>
              <div className='Sn-two-one'>
                <div id="img-ctr-one">
                  <img src={imges} alt="image" className='Sn-fr-img '/>
                </div>
                  <div className='Sn-two-img-two-hr'>
                    <img src={imges} alt="image" className='Sn-fr-img-two' />
                    <img src={imges} alt="image" className='Sn-fr-img-two' />
                  </div>
                </div>

                <div className='Sn-two-one'>
                  <div  className='Sn-fr-two-1'> YOLO</div>
                  <div  className='Sn-fr-two-2'>28 Members</div>
                </div>
          </div>
{/* Four */}
{/* <div className='Sn-fr-ctn-body'>
              <div className='Sn-two-one'>
                <div id="img-ctr-one">
                  <img src={imges} alt="image" className='Sn-fr-img '/>
                </div>
                  <div className='Sn-two-img-two-hr'>
                    <img src={imges} alt="image" className='Sn-fr-img-two' />
                    <img src={imges} alt="image" className='Sn-fr-img-two' />
                  </div>
                </div>

                <div className='Sn-two-one'>
                  <div  className='Sn-fr-two-1'> Talontzz</div>
                  <div  className='Sn-fr-two-2'>28 Members</div>
                </div>
          </div> */}

      </div>

    </div>
  )
}

export default HomeFour