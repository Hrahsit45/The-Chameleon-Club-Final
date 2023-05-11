import React, { useEffect } from "react";
import {useState} from "react"
import ms from "../Profile/profile.module.css"
import "../Profile/common.css"

import Axios from 'axios'
import { async } from "@firebase/util";

import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Profile = (props) => {

  const {state} = useLocation()

  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [Mobile_no , setnumber] = useState(0) 
    
  const [formView , setFormview] = useState(false)

  const[userData , setUserData] = useState(
    {
      name : "",
      email : "",
      phoneNo : 0
    }
  )


  const fetchData = async() => {
    
    await Axios.get("http://localhost:5000/fetchUser").then(
      Data => setUserData(Data.data)
    ).catch(error => console(error))
  }

  
   useEffect(() => {
     // fetchData()
      if(state.Mobile_no != 0)
      {
          setnumber(state.Mobile_no)
      }
      else
      {
          setname(state.name)
          setemail(state.email)
      }
   },[])

   function toggle() {
     setFormview(!formView)
   }

   
    const saveData = async(e) => {
    e.preventDefault()
    toggle()
    var Data = new FormData();
    Data.append('Name' , name);
    Data.append('Email' , email)
    Data.append('mobile_no' , Mobile_no)
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
   
   
   
    return (
        !formView ? 
        <div className= {ms.mai_pro}>
        <h1 className={["main-text text-5xl font-bold" ,  ms.name].join(" ")} >Name : {name}</h1>
        <h1 className={["main-text text-5xl font-bold" ,  ms.email].join(" ")}>Email : {email}</h1>
        <h1 className={["main-text text-5xl font-bold" ,  ms.number].join(" ")}>Number : {Mobile_no}</h1>
        <p className={[ms.t_text ,"text-100 text-base"].join(" ")} >Pick your way of entry, and hop onto a journey of transformation, just like a Chameleon</p>
        <Link to = "/login">
        <button className={[ms.btn1 ,"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 position: absolute rounded z-40 top:30"].join(" ")}
        
         >logout</button>
         </Link>
         <button className={[ms.btn2, "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 position: absolute rounded z-40"].join(" ")}
        
        onClick={toggle}>Edit Profile</button>
           <h1 className={[ms.last_t , "text-900 text-base"].join(" ")}>Lets Chameleonize!!!</h1>
        </div>
        :
        <div>
            <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  onSubmit={saveData}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"
      type="text" 
      placeholder="Username"
      name = "name"
      value = {name}
      onChange={(e) => setname(e.target.value)} />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="******************" 
      name = "email"
      value = {email}
      onChange={(e) => setemail(e.target.value)}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="number">
        Mobile No.
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="******************" 
      name = "number"
      value = {Mobile_no}
      onChange={(e) => setnumber(e.target.value)}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
        Age
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="age" type="password" placeholder="******************" />
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" 
      onClick={saveData}>
        Save
      </button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
        </div>
    
    )
}

export default Profile;