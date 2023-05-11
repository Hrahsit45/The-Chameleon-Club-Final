import React , { Component } from 'react'
import  Login   from  "./components/Login/login"
import Home from './components/Home/Home';
import { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleOAuthProvider } from '@react-oauth/google';
import EditProfile from './components/Profile/EditProfile';
import Feed from './components/HomeFeed/feed';
import HomeFeed from './components/HomeFeed/HomeFeed';
import Customize from './components/Cread/Main';
import Verifiy from './components/ProfileVerification/verification.jsx';
import UserProfile from './components/UserProfile/HomeFeed';
import OtherProfile from './components/otherProfile/HomeFeed'


const firebaseConfig = {
    apiKey: "AIzaSyD84GjMOO2CiUgRPmUWmPDEGMGvRH2oxBU",
    authDomain: "social-12235.firebaseapp.com",
    projectId: "social-12235",
    storageBucket: "social-12235.appspot.com",
    messagingSenderId: "283406484233",
    appId: "1:283406484233:web:197fd74eb4909b225bc9d8",
    measurementId: "G-PT7K18TF4C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

const App = () => {
    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container", {
                size: "invisible",
                callback: function(response) {
                    console.log("Captcha Resolved");
                },
                defaultCountry: "IN",
            }
        );
    }, []);
    return (
        <Router>
        <div>
         <div id="recaptcha-container"></div>
          <Routes>
          <Route path="/login" element = { <Login />} />
          <Route path = "/profile" element = { <EditProfile />} />
          <Route path = "/" element = { <Home />} />
          <Route path = "/feed" element = { <Feed /> } />
          <Route path = "/homefeed" element = { <HomeFeed /> } />
           <Route path = "/custom" element = { <Customize />}/> 
           <Route path = "/verify" element = { <Verifiy />} /> 
          <Route path = "/UserProfile" element = { <UserProfile />} />
          <Route path = "/otherProfile" element = { <OtherProfile />} />
         </Routes>
        </div>
        </Router>
    )
}


export default App