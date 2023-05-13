import React, { useEffect } from "react";
import {useState} from "react"
import EDP from "./EditProfile.module.css"
import BacImg from "../ProfileImages/UserProfile.svg"
import Brush from "../ProfileImages/Brush.svg"
import Tick from "../ProfileImages/Tick.svg"
import imag from "../images-videos/Avatar.png"
import EditProfilePage from "./Edit"
import Logo from "../ProfileImages/Logo.mp4"
import Axios from 'axios'
import { Link, useLocation , useNavigate, useNavigation} from "react-router-dom";
import "../Profile/common.css"
import axios from "axios";

// import Background from "./Images/Background.svg"
// import back from "./Images/"
const EditProfile = () => {

  const {state} = useLocation()
  const navi = useNavigate()
  
//   const [name , setname] = useState("")
//   const [email , setemail] = useState("")
//   const [Mobile_no , setnumber] = useState(0) 
//   const SendData = {Name : "" ,
//   Email : "" ,
//   phone : 0
// }

  // useEffect(() => {
  //   // fetchData()
  //    if(state.Mobile_no != 0)
  //    {
  //        setnumber(state.Mobile_no)
  //    }
  //    else
  //    {
  //        setname(state.name)
  //        setemail(state.email)
  //    }

  //    SendData.Name = name
  //    SendData.Email = email
  //    SendData.phone = Mobile_no
    
  // },[])

  const [data , setData] = useState([{}])

  useEffect(() => {

      let id ;
    if(state.email != '')
    id = state.email
    else
    id = state.Mobile_no

    var fetchUrl = "http://localhost:5000/fetchUser/" + id;

     axios.get(fetchUrl).then((res) => {
      if(res == null)
      {
        alert("please enter your profile details")
        setData(null)
      }
      else
      {
         setData(res.data)
      }
    }
    )  
  })

  const handlChange = async() => {

    if(data == null)
    { 
         alert("please enter your profile details")
    }
     else{
       // console.log(res.data)
        navi("/userprofile" , {
          state : {
             id: data,
          }
        })
      }
   
  }

  const JoinNow = () => {
    
     if(data == null)
    { 
         alert("please enter your profile details")
    }
    else
    {
       navi("/custom" , {
          state : {
             data: data,
          }
        })
    }

  }

  const verifyNow = () => {
    
     if(data == null)
    { 
         alert("please enter your profile details")
    }
    else
    {
       navi("/verify" , {
          state : {
             data: data,
          }
        })
    }

  }

  return (
    <div className={EDP.Sn_edt_bdy_1}>
      <img src={BacImg} alt="back" className={EDP.back_image}/>


      <div>
        {/* ********************NAVIGATION*************************** */}
        <div className={EDP.logo}>
            <video src={Logo} autoPlay loop muted type='video/mp4' /> 
            <div className={EDP.hed_txt}><span className={EDP.hed_txt_1}>My TCC Space</span><br/>
            <span className={EDP.hed_txt_2}>Let's Get Personal</span>
            <button className="bg-black-500 hover:bg-black-700 text-white font-bold py-2  border border-pink-700 rounded position: absolute z-40 left-10" onClick={handlChange}>Profile</button>
          </div>
        </div>

        {/* *********************BODY***************************** */}
          <div className={EDP.Sn_edt_1}> 
            <div className={EDP.Sn_edt_lft}>
            <img src={imag} alt="Profil-img" id='Profil-img' className={EDP.Profile_img}/>
            <div className={EDP.Sn_edt_hn_1}>My Profile</div>
              <div className={EDP.Sn_edt}><EditProfilePage name = {state.name} email = {state.email} number = {state.Mobile_no}/></div>

            </div>


            <div className={EDP.Sn_edt_rgt}>
              
                <div className={EDP.Sn_edt_rgt_1}>
                <img src={Brush} alt="back" className={EDP.ctn_5_img}/>
                  <div className={EDP.Sn_edt_hn}>Customize Your Colors</div>
                  <div className={EDP.Sn_edt_bdy}>Unlock a world of personalized recommendations
                      by sharing your interests with us.</div>
                 
                  <button className={EDP.Sn_edt_bdy_btn} onClick={JoinNow}>Join Now!</button>
                
                </div>

                <div className={EDP.Sn_edt_rgt_1}>
                <img src={Tick} alt="back" className={EDP.ctn_5_img}/>
                
                  <div className={EDP.Sn_edt_hn}>Credibility Checkpoint</div>
                  <div className={EDP.Sn_edt_bdy}>It’s time to put a face to 
                  the name & unlock the magic of personalization!</div>
                
                  <button className={EDP.Sn_edt_bdy_btn} onClick={verifyNow}>Let’s Get Verified!</button>
              
                </div>
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default EditProfile