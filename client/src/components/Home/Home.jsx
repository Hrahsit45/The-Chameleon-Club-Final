import React from 'react'
import "./Home.css"
// import SectionFiv from "../Home/Sectionfive"
import SectionThree from "./SectionThree"
import SectionFour from './Sectionfour'
import video from "../videos/TCC_Website_Banner.gif"
import SectionSix from './SectionSix'
import SectionTwo from './SectionTwo'
import { Link } from 'react-router-dom'
import '../../index.css';
import '../../index.css';
// import SecF from "../Images/SectionFiveOne.svg"
const Home = () => {
  return (
    <div>
    <section className='section'>
    <img src={video}  loop class="videoback"/> 
    <div className='content'>
      <div className='text-7xl text-white mainhead'>The Chameleon Club</div>
      <h2 className='text-white text-lg font-thin text-centre head1'>UNLEASH YOUR TRUE COLORS IN A SAFE SPACE</h2>
      <Link to = "/login">
     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btnn' >Join Now!</button>  
     </Link>
     </div>
    </section>
    {/* *******************SECTION 2***************** */}
      <section className='section'>
    <SectionTwo/>
    </section>
    {/* *******************Section 3 ****************** */}
      <section className='section'>
    <SectionThree/>
    </section>
{/* **********************SECTION 4 ******************* */}
      <section>
      <SectionFour/>
      </section>

    {/* ************** SECTION FIVE  ****************** */}
    <section className="section">
    </section>
    {/* <SectionFiv/> */}
    {/* *************** SECTION SIX ******************* */}
     <section>
       <SectionSix/>
      </section>
   
    </div>
  )
}

export default Home