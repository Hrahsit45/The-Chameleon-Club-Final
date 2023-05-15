import React from 'react'
import { Link } from 'react-router-dom';
import imges from './Images/smallImg.jpg'
const HomeTwo = () => {
  return (
    <div className="Sn-two">
      <div className="Sn-two-ctn bg-black">
        <Link to = "/chatbot">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-20">
            Chat Bot
          </button>
        </Link>
      </div>

      <div className="Sn-two-ctn">
        <p>My Tribes</p>

        <div className="Sn-two-ctn-body">
          <div className="Sn-two-one">
            <div>
              <img src={imges} alt="image" className="Sn-two-img " />
            </div>
            <div className="Sn-two-img-two-hr">
              <img src={imges} alt="image" className="Sn-two-img-two" />
              <img src={imges} alt="image" className="Sn-two-img-two" />
            </div>
          </div>

          <div className="Sn-two-two">
            <div className="Sn-two-two-1"> Netflix&Chill</div>
            <div className="Sn-two-two-2">28 Members</div>
          </div>
        </div>

        {/* *********************************************** */}
        {/* one */}
        {/* *********************************************** */}
        <div className="Sn-two-ctn-body">
          <div className="Sn-two-one">
            <div>
              <img src={imges} alt="image" className="Sn-two-img " />
            </div>
            <div className="Sn-two-img-two-hr">
              <img src={imges} alt="image" className="Sn-two-img-two" />
              <img src={imges} alt="image" className="Sn-two-img-two" />
            </div>
          </div>

          <div className="Sn-two-two">
            <div className="Sn-two-two-1"> SquadGoals</div>
            <div className="Sn-two-two-2">28 Members</div>
          </div>
        </div>
        {/* *********************************************** */}
        {/* one */}
        {/* *********************************************** */}
        <div className="Sn-two-ctn-body">
          <div className="Sn-two-one">
            <div>
              <img src={imges} alt="image" className="Sn-two-img " />
            </div>
            <div className="Sn-two-img-two-hr">
              <img src={imges} alt="image" className="Sn-two-img-two" />
              <img src={imges} alt="image" className="Sn-two-img-two" />
            </div>
          </div>

          <div className="Sn-two-two">
            <div className="Sn-two-two-1"> Adulting </div>
            <div className="Sn-two-two-2">102 Members</div>
          </div>
        </div>
        {/* *********************************************** */}
        {/* one */}
        {/* *********************************************** */}
        <div className="Sn-two-ctn-body">
          <div className="Sn-two-one">
            <div>
              <img src={imges} alt="image" className="Sn-two-img " />
            </div>
            <div className="Sn-two-img-two-hr">
              <img src={imges} alt="image" className="Sn-two-img-two" />
              <img src={imges} alt="image" className="Sn-two-img-two" />
            </div>
          </div>

          <div className="Sn-two-two">
            <div className="Sn-two-two-1"> Adulting </div>
            <div className="Sn-two-two-2">102 Members</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTwo