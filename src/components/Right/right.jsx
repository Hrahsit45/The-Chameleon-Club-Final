import React from "react";
import vid from "../images-videos/TCC_Website_Banner.mp4"
import "../Right/form.css"
import "../Right/phone.css"
import { Button } from "react-bootstrap";
import { useState } from "react"
import 'react-phone-number-input/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PhoneInput from 'react-phone-number-input'

const Right = () => {
 
    const [myBool , setmyBool] = useState(true);

    function toggleBool() {
        setmyBool(!myBool)
    }


    return ( 

        myBool ? <Form toggleBool={toggleBool} /> : <Phone toggleBool={toggleBool}/>
        // <Phone></Phone>
        // <Form></Form>
        // <div className="mai">
        // <h1 className="main-text">Be a Chameleon Today!</h1>
        // <p className="t-text">Pick your way of entry, and hop onto a journey of transformation, just like a Chameleon</p>
        // <Button className = "btn1">
        //     Continue with Phone Number
        // </Button>
        // <p className="or" >or</p>
        // <Button className = "btn2">
        //     Continue with Google
        // </Button>
        // <h1 className="last-t">Lets Chameleonize!!!</h1>
        // </div>
    )
}

function Form(props){
    return ( 
        <div className="mai">
        <h1 className="main-text">Be a Chameleon Today!</h1>
        <p className="t-text">Pick your way of entry, and hop onto a journey of transformation, just like a Chameleon</p>
        <Button className = "btn1"
        onClick={props.toggleBool}>
            Continue with Phone Number
        </Button>
        <p className="or" >or</p>
        <Button className = "btn2">
            Continue with Google
        </Button>
        <h1 className="last-t">Lets Chameleonize!!!</h1>
        </div>
    )
}

function Phone(props){

    const [value, setValue] = useState()
    return (
 <div class="phn card w-10">
  <div class="card-body">
    <h5 class="card-title bt">Enter Phone Number</h5>
    <PhoneInput
      className="pn"
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
    <a href="#" class="btn btn-primary position-relative but">Send OTP</a>
  </div>
  <button type="button" class="btn btn-danger position-absolute back" 
   onClick={props.toggleBool}>Go Back?</button>
</div>
    )
}

export default Right;