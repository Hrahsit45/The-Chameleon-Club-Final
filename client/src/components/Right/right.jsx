import React, { useEffect } from "react";
import fs from "../Right/form.module.css"
import ps from "../Right/phone.module.css"
import { useState } from "react"
import 'react-phone-number-input/style.css'
import '../../index.css';
import PhoneInput from 'react-phone-number-input'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from 'axios'
import vid from "../images-videos/TCC_Website_Banner.mp4"
import vid2 from "../ProfileImages/Logo.mp4"
import { Navigate, useNavigate } from "react-router-dom";
import opf from "../Right/otpform.module.css"
import EditProfile from "../Profile/EditProfile";
import gif from "../images-videos/TCC_Website_Vectors.gif"
import ogif from "../images-videos/MicrosoftTeams-image.png"
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link } from "react-router-dom";


var proFile ={}
var Phonenumber 

const Right = () => {
 
    const [myBool , setmyBool] = useState(true);
    
    
    function toggleBool() {
        setmyBool(!myBool)
    }

  


    return ( 

        myBool ? <Form toggleBool={toggleBool} /> : <Phone toggleBool={toggleBool}/>
   
    )
}

function Form(props){

    const navigat = useNavigate();
   

    const other_value = {
        name: "bb",
        email: "bb",
        Mobile_no:0
    }

    //google signin
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        console.log(profile)
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    function logOut()  {
        setProfile(null);
        setUser(null)
        googleLogout();  
    };

    async function one (){
        var fetchUrl = "http://localhost:5000/fetchUser/"

     
        fetchUrl = "http://localhost:5000/fetchUser/" + profile.email
      

      await axios.get(fetchUrl)
  .then(res => {
      if(res != null)
      {
          console.log(res.data)
        //   navigat("/homefeed" , {
        //       state : {
        //          id: res.data._id,
        //          name: res.data.name,
        //          email : res.data.email,
        //          number : res.data.mobile
        //       }
        //     })
        navigat('/profile' , {
            state: {
                 email: profile.email,
                 name: profile.name,
                 Mobile_no: 0,
                 logout: logOut()
            }
        })
      }
      else
      {
        navigat('/profile' , {
            state: {
                 email: profile.email,
                 name: profile.name,
                 Mobile_no: null,
                 logout: logOut()
            }
        })
      }

  })
  .catch(function (error) {
      console.log(error);
  })
    }

     
    const goToProfile = () => {
     
      one()
    }
  



    return ( 
         !profile || profile.email == null ? (
         <div className= {fs.main}>
                  {/* <video src = {vid} className = {fs.vid1} autoPlay loop muted/>     */}
                  <img src = {gif} className = {fs.vid1}></img>
                  <video src = {vid2}  className = {fs.vid2} autoPlay loop muted/>  
                 <h1 className= {["text-5xl font-bold" , fs.main_text].join(" ")}>Unleash Your Spectrum!</h1>
                 <p className={["t-text text-100 text-base text-white" , fs.smalltext].join(" ")}>Pick your way of entry, and</p> 
                 <p className={["t-text text-100 text-base text-white" , fs.smalltext1].join(" ")}>hop onto a journey of transformation!!</p>
                 <button className={["bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded position: absolute z-40" , fs.btn1].join(" ")}
                    onClick={props.toggleBool}>
                    Continue with Phone Number
                </button>
                <button className={["bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded position: absolute z-40" , fs.btn2].join(" ")}
                onClick={() => login()}>
                        Continue with Google
                        </button>
                    <h1 className={[fs.last_t , "text-5xl font-bold"].join(" ")}>Lets Chameleonize!!!</h1>
       
        </div> )
          : 
          goToProfile()
        // <Profile value = 'google_auth' logOut = {logOut} other_value = {profile}></Profile>
        
    )
}

function Phone(props){


    // otp verification

    const navigat = useNavigate();
   
    const [OT, setOTP] = useState("");
    const [check ,setCheck] = useState(false)
    const [phnvalue , setValue] = useState()
   

    const [viewOtpForm, setViewOtpForm] = useState(false);

    function logOut() {
        setCheck(!check)
        setViewOtpForm(!viewOtpForm)
    }

    const loginSubmit = (e) => {
        e.preventDefault();
    
       
       const phoneNumber = phnvalue;
       const appVerifier = window.recaptchaVerifier;
       const auth = getAuth();
       signInWithPhoneNumber(auth, phoneNumber ,  appVerifier)
    .then((confirmationResult) => {
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      alert(error.message);
    });

       
    };

   
    useEffect(() => {
        
    })

    const otpSubmit = (e) => {
        e.preventDefault();
    
        let opt_number = OT;
    
        window.confirmationResult
            .confirm(opt_number)
            .then((confirmationResult) => {
                console.log(confirmationResult);
                console.log("success");
                setCheck(!check)
               // window.open("/profile", "_self");
            })
            .catch((error) => {
                // User couldn't sign in (bad verification code?)
                alert(error.message);
            });
    };

    async function one (){
        var fetchUrl = "http://localhost:5000/fetchUser/"

     
        fetchUrl = "http://localhost:5000/fetchUser/" + phnvalue
      

      await axios.get(fetchUrl)
  .then(res => {
      if(res != null)
      {
          console.log(res.data)
        //   navigat("/homefeed" , {
        //       state : {
        //          id: res.data._id,
        //          name: res.data.name,
        //          email : res.data.email,
        //          number : res.data.mobile
        //       }
        //     })
        navigat('/profile' , {
            state: {
                 email: null,
                 name: null,
                 Mobile_no: phnvalue,
                 logout: logOut()
            }
        })
      }
      else
      {
          navigat('/profile' , {
              state: {
                   email: "",
                   name: "",
                   Mobile_no: phnvalue,
                   logout: logOut()
              }
          })
      }

  })
  .catch(function (error) {
      console.log(error);
  })
    }

     
    const goToProfile = () => {
     
      one()
    }


 
  


   
    return ( 
        !viewOtpForm ? 
        (
        <div className={ps.main}>
             {/* <video src = {vid} className = {ps.vid1} autoPlay loop muted/>     */}
             <img src = {gif} className = {ps.vid1}></img>
             <video src = {vid2}  className = {ps.vid2} autoPlay loop muted/>  
            <div className={["max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 overflow-hidden" , ps.card].join(" ")}>  
               <div className={["h-56 grid grid-cols-1 gap-4 content-around" , ps.cont].join(" ")}>
               <div class={["font-bold text-xl mb-2" , ps.taxt].join(" ")}>Enter Phone Number</div>
                  <PhoneInput className={ps.pn} placeholder="Enter phone number" value={phnvalue}  onChange={setValue}/>
                  <button class={["bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" , ps.otp].join(" ")} 
                  onClick={loginSubmit}>
                   OTP
                  </button>
                  <button class={["bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded", ps.bck].join(" ")}   onClick={props.toggleBool}>
                   Go Back!
                  </button>
                  </div>
            </div>
        </div>
        ) :
         !check ? 
            <div className={opf.otp_main}>
            <img src = {ogif} className = {ps.vid1}></img>
            <h1 className= {["text-5xl font-bold" , opf.main_text].join(" ")}>OTP VERIFICATION</h1>
            <video src = {vid2}  className = {ps.vid2} autoPlay loop muted/>  
            <div className={["max-w-sm bg-zinc-400 border border-white-200 rounded-lg shadow hover:bg-zinc-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 overflow-hidden" , opf.card].join(" ")}>  
            <div className={["h-56 grid grid-cols-1 gap-4 content-around" , opf.cont].join(" ")}>
            <OTPInput value={OT} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure className = {opf.otpinp} ></OTPInput>
           
            <button class={["bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded", opf.otp].join(" ")} 
                  onClick={otpSubmit}>
                   OTP
                  </button>
            
            <button class={["bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded", opf.rotp].join(" ")} onResendClick={loginSubmit} >Resend </button>
          </div>
            </div>
        </div>
        :
         goToProfile()
             
    )
}


export default Right;