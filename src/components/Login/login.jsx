import React from "react";
import "../Login/login.css"
import vid from "../images-videos/TCC_Website_Banner.mp4"
import vid2 from "../images-videos/TCC_Logo (3).mp4"
import { Button } from "react-bootstrap";
import Right from "../Right/right";

const Login = () => {
    return (
        <div className = "main">
        <video src = {vid} className = "vid1" autoPlay loop muted/>    
        <video src = {vid2}  className = "vid2" autoPlay loop muted/>  
        <Right></Right>
        </div>
    )
}

export default Login;