import React, { useState , useEffect } from 'react';
import EP from"./Edit.module.css"
import Axios from 'axios'
import {useLocation, useNavigate} from "react-router-dom"
import Popup from 'reactjs-popup';
import axios from 'axios';
import EDP from "./EditProfile.module.css";
import imag from "../images-videos/Avatar.png";


  var allPhone = [];
  var allEmail = [];
  var fetchUrl

function EditProfilePage(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phoneNumber1, setphoneNumber1] = useState("");
  const [pv , setPv] = useState()
  const [data , setData] = useState([{}])
  const [photo , setPhoto] = useState(imag)
  const [photo1, setPhoto1] = useState("");
  const navi = useNavigate()

  const {state} = useLocation();


  const [var1 , setVar1] = useState("")
  const [var2 , setVar2] = useState(0)
  const [var3 , setVar3] = useState("")
  




  useEffect(() => {
    setPv(!pv);

   console.log("1st")

       allEmail=[]
       allPhone=[]
    
      axios.get("http://localhost:5000/user/all").then(async (docs) => {
        console.log(docs.data);
        setData(docs.data);
        await data.map((x) => (allEmail.push(x.email), allPhone.push(x.mobile)));
        allEmail = allEmail.filter((item) => item !== email);
        allPhone = allPhone.filter((item) => item !== phoneNumber);
        console.log(allEmail);
        console.log(allPhone);
      });

  },[]);


 

  const saveData = async(e) => {
     e.preventDefault()
     console.log(allEmail)
     console.log(allPhone)

     if(allEmail.includes(email))
     {
     alert("email already used")
     window.location.reload()
     }
     else if(allPhone.includes(phoneNumber))
     {
     alert("phone number already used")
     window.location.reload()
     }
     else{
    var Data = new FormData();
    Data.append('Name' , name1)
    Data.append('Email' , email1)
    Data.append('mobile_no' , phoneNumber1)
    Data.append('photo' , photo1)
    setPhoto(photo1)
   
    await Axios.post("http://localhost:5000/user/saveUser", 
    Data).then(async(doc) => {
  //    if(doc.data.isRegistered == false){
    
        // console.log(doc.data)
      //  
            
        //  if (data.status === false) {
        //    console.log("error");
        //  }

        //  if (data.status === true) {
        //    console.log(data)
       
        //    ); // navigate("/");
        //  }
 // }
      await axios.get("http://localhost:5000/user/fetchUser/" + email).then((res) =>{
        setName(res.data.name);
        setEmail(res.data.email);
        setphoneNumber(res.data.mobile);
        setPhoto(res.data.profile);
        setName1(res.data.name);
        setEmail1(res.data.email);
        setphoneNumber1(res.data.mobile);
         localStorage.setItem(
           process.env.REACT_APP_LOCALHOST_KEY,

           JSON.stringify(res.data),

           console.log(res.data)
         );

                 navi("/userprofile", {
                   state: {
                     id: res.data,
                   },
                 });
       // window.location.reload();
      })
    }).catch((err) => {
      console.log(err)
    })

     
     }
   } 

   useEffect(() => {

    if(phoneNumber === 0)
    {
      fetchUrl = "http://localhost:5000/user/fetchUser/" + email
    }
    else
    {
      fetchUrl = "http://localhost:5000/user/fetchUser/" + phoneNumber
    }
    if(props.number != null)
    {
      setphoneNumber(props.number)
      setphoneNumber1(props.number);
    }
    if(props.email != null)
    {
      setEmail(props.email)
      setName(props.name)
       setEmail1(props.email);
       setName1(props.name);
    }
    
    fetchUser()    
    
  },[pv])
   

   const fetchUser = async() => {
     if (phoneNumber === 0) {
       fetchUrl = "http://localhost:5000/user/fetchUser/" + email;
     } else {
       fetchUrl = "http://localhost:5000/user/fetchUser/" + phoneNumber;
     }
     await Axios.get(fetchUrl)
    .then(async(res) => {
     // console.log(res)
        if(res.data == null)
        {
          if(state.number != 0)
      {
        setphoneNumber(var2)
        setphoneNumber1(var2);
      }
      else
      { 
        //  console.log(state.name)
          setName(var3)
          setEmail(var1)
          setName1(var3);
          setEmail1(var1);
      }
        }
        else{
         await third (res)  
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
    console.log("first func")
    setName(res.data.name) 
    setEmail(res.data.email) 
    setphoneNumber(res.data.mobile)
    setPhoto(res.data.profile)
    setName1(res.data.name);
    setEmail1(res.data.email);
    setphoneNumber1(res.data.mobile);

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
    <>
      <img
        src={photo}
        alt="Profil-img"
        id="Profil-img"
        className={EDP.Profil_img} 
      />
      <div className={EDP.Sn_edt_hn_1}>My Profile</div>
      <form
        className="form text-black"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={EP.frm_lbl}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            // onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={EP.frm_lbl}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="abc@chameleonclub.com"
            value={email}
            // onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={EP.frm_lbl}>
          <label htmlFor="Number"> Number: </label>
          <input
            type="phoneNumber"
            id="email"
            placeholder="0123456789"
            value={phoneNumber}
            // onChange={(event) => setphoneNumber(event.target.value)}
          />
        </div>
        {/* <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      /> */}
        <Popup
          trigger={
            <button type="submit" className={EP.button}>
              Update Details
            </button>
          }
          nested
          modal
        >
          {(close) => (
            <div>
              <form
                class="w-full max-w-sm"
                encType="multipart/form-data"
                onSubmit={saveData}
              >
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Name
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="bg-gray-200 appearance-none border-2 border-red-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value={name1}
                      onChange={(event) => setName1(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Email
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value={email1}
                      onChange={(event) => setEmail1(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value={phoneNumber1}
                      onChange={(event) => setphoneNumber1(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Profile Picture
                    </label>
                  </div>
                  <label class="md:w-2/3 block text-gray-500 font-bold">
                    <input
                      class="mr-2 leading-tight"
                      type="file"
                      accept=".png, .jpg, ,jpeg"
                      name="photo"
                      onChange={(e) => setPhoto1(e.target.files[0])}
                    />
                    <span class="text-sm"></span>
                  </label>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-2/3">
                    <button
                      class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={saveData}
                    >
                      Save-Details
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Popup>
      </form>
    </>
  );
}

export default EditProfilePage;