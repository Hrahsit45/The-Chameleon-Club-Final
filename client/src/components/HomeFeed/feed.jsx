import axios from 'axios';
import React, { useState , useEffect } from 'react';
import Axios from 'axios'

import { useLocation } from "react-router-dom";



const Feed = (props) => {

  const {state} = useLocation();
  const [caption , setCaption] = useState("")
  const [photo , setPhoto] = useState("")

  const url = "http://localhost:5000/feed/"  + props.id
  
  const handleSubmit = async(e) => {

    console.log("hiiii")
    e.preventDefault()

    const formData = new FormData();

    formData.append('photo' , photo)
    formData.append('caption' , caption )

    await Axios.post(url , formData).then(
      res => {
        console.log(res);
      }
    ).catch(err => {
      console.log(err);
    })

  }

  useEffect(()=>{
    fetchPost()
  },[])
 
  const [img , setImg] = useState();

  const fetchPost = async() => {
    await axios.get(url).then(
    (res) => {
      console.log(res)
      //setImg(res.data.image)
    }
    )
  }

 
    return(
        <div>
            <form class="w-full max-w-sm"
            encType='multipart/form-data'
           >
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Caption
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={caption}  onChange={(e) => setCaption(e.target.value)} />
    </div>
  </div>
  {/* <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
    </div>
  </div> */}
  {/* <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" type="checkbox" />
      <span class="text-sm">
        Send me your newsletter!
      </span>
    </label>
  </div> */}
  <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" type="file"
      accept= ".png, .jpg, ,jpeg" 
      name = "photo"
      onChange={(e) => setPhoto(e.target.files[0])}/>
      <span class="text-sm">
      </span>
    </label>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"
      onClick={handleSubmit}>
        POST
      </button>
      <img src = {img}  alt="tweetImg"  />
    </div>
  </div>
</form>
        </div>
    )
}


export default Feed;