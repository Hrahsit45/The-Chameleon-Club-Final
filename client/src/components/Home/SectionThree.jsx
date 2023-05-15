import backgroundthree from "../Images/Home/SectionThreeBackground.png"
import foreground from "../Images/Home/SectionThreeFront.png"
const SectionThree = () => {
  return (
    <>
    <div className="sectionThree">
    <img src={backgroundthree} alt="back" className="back-image"/>
    <div >
          <div className="sn-3-txt rounded">
            <div className="text-6xl text-gray-900 dark:text-white">Unleash Your Inner SuperHero</div>
            <div className="sn-3-txt-2"> <p className="text-2xl font-thin text-gray-900 dark:text-white  my-2 text-justify">We're more than just a social network- </p><p className="text-2xl font-thin text-gray-900 dark:text-white  my-2 text-justify">we're a league of extraordinary people</p></div>
            {/* <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded jtf' >Get Started</button>   */}
          </div>
          <img src={foreground} alt="back" className="sn-3-img back-image"/>
    </div>
    </div>     
    </>
  );
};

export default SectionThree;