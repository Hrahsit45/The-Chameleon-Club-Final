import SecFivOne from "../Images/SectionFiveOne.svg"
const SectionFive = () => {
  return (
    <>
    <div className=" sectionFive">
    <p id='hn-five'>TCC: More Than Just a Social Network</p>
      <div className="sn-fiv-cn rounded">
        <div className="sn-fiv-cn-1">
        <img src={SecFivOne} alt="back" className="back-image ctn-5-img"/>
        <p className='sn-5-ctn-1' >Chameleoning Made Easy</p>
        </div>
        <div className="sn-fiv-cn-1">
        <img src={SecFivOne} alt="back" className="back-image" />
        <p className='sn-5-ctn-1' >Connecting with Purpose</p>
        
        </div>
        <div className="sn-fiv-cn-1">
        <img src={SecFivOne} alt="back" className="back-image" />
        <p className='sn-5-ctn-1' >Goodbye to Boredom</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SectionFive;
