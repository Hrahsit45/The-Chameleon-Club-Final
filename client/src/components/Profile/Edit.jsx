import React, { useState , useEffect } from 'react';
import EP from"./Edit.module.css"
import Axios from 'axios'
import {useLocation, useNavigate} from "react-router-dom"
import { useFocusEffect } from "@react-navigation/core";



function EditProfilePage(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");


  const navi = useNavigate()


  const {state} = useLocation();
  

  // const [password, setPassword] = useState('');

  const [var1 , setVar1] = useState("")
  const [var2 , setVar2] = useState(0)
  const [var3 , setVar3] = useState("")

 

  var fetchUrl = "http://localhost:5000/fetchUser/"

 

  const saveData = async(e) => {
    e.preventDefault()
    var Data = new FormData();
    Data.append('Name' , name);
    Data.append('Email' , email)
    Data.append('mobile_no' , phoneNumber)
    await Axios.post("http://localhost:5000/saveUser", 
    Data , {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
    console.log(res)
    }).catch((err) => {
      console.log(err)
    })
   } 

   
   useEffect(() => {
   
    console.log("hiiiii1" + email)


    if(phoneNumber == 0)
    {
      fetchUrl = "http://localhost:5000/fetchUser/" + email
    }
    else
    {
      fetchUrl = "http://localhost:5000/fetchUser/" + phoneNumber
    }

    if(props.number != null)
    {
      setphoneNumber(props.number)
    }
    if(props.email != null)
    {
      setEmail(props.email)
      setName(props.name)
    }

    console.log(var3)

    console.log(email)


   
    fetchUser()

   
    
    
  },[email])
   


   const fetchUser = async() => {
     console.log(phoneNumber) 

     await Axios.get(fetchUrl)
    .then(res => {
     // console.log(res)
        if(res.data == null)
        {
          if(state.number != 0)
      {
        setphoneNumber(var2)
      }
      else
      { 
        //  console.log(state.name)
          setName(var3)
          setEmail(var1)
      }
        }
        else{
          third (res)  
        }
    })
    .catch(function (error) {
       console.log(fetchUrl);
    })

   }

   async function third(res){
    await first(res);
    //second(res);
}

  function first(res){
    setName(res.data.name) 
    setEmail(res.data.email) 
    setphoneNumber(res.data.mobile)

   // console.log(res.data._id)

  }

  const second = async(res) =>{
    console.log(res)
    await navi("/homefeed" , {
      state : {
         data : res.data._id
      }
    })
  }

  

  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <form onSubmit={saveData} className="form text-black">
      <div className= {EP.frm_lbl}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        placeholder='Name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      </div>
      <div className= {EP.frm_lbl}>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        placeholder='abc@chameleonclub.com'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      </div>
      <div className= {EP.frm_lbl}>
      <label htmlFor="Number"> Number: </label>
      <input
        type="phoneNumber"
        id="email"
        placeholder='0123456789'
        value={phoneNumber}
        onChange={(event) => setphoneNumber(event.target.value)}
      />
      </div>
      {/* <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      /> */}

      <button type="submit" className={EP.button}>Edit</button>
    </form>
  );
}

export default EditProfilePage;