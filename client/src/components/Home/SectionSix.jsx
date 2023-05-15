import React from 'react'
import "./Home.css"
import backgroundSix from "../Images/Home/SectionSixBackground.png"
const SectionSix = () => {
  return (
    <div className='sectionSix'>
      <img src={backgroundSix} alt="back" className="back-image"/>
      <div className='SectionSixText rounded'> 
      {/* <div className='text-4xl text-gray-900 dark:text-white'>Ready to change colors like a <div className='text-4xl text-gray-900 dark:text-white'>Chameleon?</div> Neither are we!!</div>
      <div className="text-4xl font-thin text-gray-900 dark:text-white text-justify my-2">Embrace your Unique Shade &<div className='text-4xl font-thin text-gray-900 dark:text-white text-justify my-2'>find your Perfect Tribe.</div></div> */}
      <div className="text-6xl text-gray-900 dark:text-white">Ready to change colors like a Chameleon? Neither are we!!</div>
            <div className="sn-2-txt-2"> <p className="text-2xl font-thin text-gray-900 dark:text-white text-justify my-2">Embrace your Unique Shade</p><p className="text-2xl font-thin text-gray-900 dark:text-white text-justify">and find your Perfect Tribe.</p> </div>
            {/* <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded jtf' >Join the fun!</button>   */}
      </div>
    </div>
  )
}

export default SectionSix