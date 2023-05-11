import backgroundtwo from "../Images/Home/SectionTwoBackground.svg"
import imgTwo from "../Images/Home/SectionTwoFront.svg"
const SectionTwo = () => {
  return (
    <>
    <div className="sectionTwo">
    <img src={backgroundtwo} alt="back" className="back-image"/>
    <div >
          <div className="sn-2-txt rounded">
            <div className="text-6xl text-gray-900 dark:text-white">The Chameleon Club Chronicles</div>
            <div className="sn-2-txt-2"> <p className="text-2xl font-thin text-gray-900 dark:text-white text-justify my-2">A community that embraces your quirks and</p><p className="text-2xl font-thin text-gray-900 dark:text-white text-justify">celeberates your differences</p> </div>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded jtf' >Join the fun!</button>  
            </div>
          <img src={imgTwo} alt="back" className="sn-2-img back-image "/>
    </div>
    </div>
    </>
  );
};

export default SectionTwo;