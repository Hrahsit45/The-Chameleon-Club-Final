import backgroundFour from "../Images/Home/SectionFourBackground.svg"
import imgOne from "../Images/Home/SectionFourFront.svg"
 const SectionFour = () => {
  return (
    <>
    <div className="sectionFour">
    <img src={backgroundFour} alt="back" className="back-image"/>
    <div >
          <div className="sn-4-txt rounded">
            <div className="text-6xl text-gray-900 dark:text-white">Be Bright, Be Bold</div>
            <div className="sn-4-txt-2"> <p className="text-2xl font-thin text-gray-900 dark:text-white text-justify my-2">So, what are you waiting for? lets paint the </p><p className="text-2xl font-thin text-gray-900 dark:text-white text-justify my-2">town red (or blue, green or any color you like)</p> together!</div>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded jtf' >Join Now!</button>  
          </div>
          <img src={imgOne} alt="back" className="sn-4-img back-image"/>
    </div>
    </div>
    </>
  );
};

export default SectionFour;
