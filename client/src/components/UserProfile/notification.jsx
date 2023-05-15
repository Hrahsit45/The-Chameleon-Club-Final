import React from 'react'
import imges from './Images/smallImg.jpg'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { Link } from 'react-router-dom'

const Notify= () => {
  return (
    // <Link to="/login">
    <button className="uuSn-usr-Four bg-red-500 hover:bg-red-700 border-8 border-black">
      LOG OUT
    </button>
    // </Link>
  );
}

export default Notify