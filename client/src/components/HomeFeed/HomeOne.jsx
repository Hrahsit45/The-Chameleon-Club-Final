import React , {useState , useEffect} from 'react'
import Logo from "./Images/Logo.mp4"
import imges from "./Images/smallImg.jpg"
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import axios from 'axios'
const HomeOne = (props) => {
   
  const id = props.id

  const FindDay = () => {
   
    const date = new Date();
    const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  
  const Day = day + "/" + month + "/" + year 

  return Day;
  }

  const FindTime = () => {
    const date = new Date()
    const [hour, minutes, seconds] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    
    const time = hour + ":" + minutes + ":" + seconds

    return time;
  }

  const [caption , setCaption] = useState("")
  const [photo , setPhoto] = useState("")

  const url = "http://localhost:5000/feed/"  + id
  
  const handleSubmit = async(e) => {

    const date = new Date();
    const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  
  const Day = day + "/" + month + "/" + year 


    const [hour, minutes, seconds] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    
    const time = hour + ":" + minutes + ":" + seconds

    console.log("hiiii")
    e.preventDefault()

    const formData = new FormData();

    formData.append('photo' , photo)
    formData.append('caption' , caption )
    formData.append('name' , props.name)
    formData.append('date' , Day)
    formData.append('time' , time)


    await axios.post(url , formData).then(
      res => {
        console.log(res);
      }
    ).catch(err => {
      console.log(err);
    })

  }

  return (
    <div>
      <div className='Sn-one'>
{/* ******************LOGO************************** */}
<video src={Logo} autoPlay loop muted type='video/mp4' className='logo'/> 
{/* ******************LOGO************************** */}

{/* ****************** ButtonBody ************************** */}
<div className=''>
<div><img src={imges} alt="image" className='Sn-one-img' /></div>
<div><img src={imges} alt="image" className='Sn-one-img' /></div>
<Popup trigger={<div><img src={imges} alt="image" className='Sn-one-img' /></div>}
modal nested> 
{
  close => (
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
<img   alt="tweetImg"  />
</div>
</div>
</form>
</div>
  )
}</Popup>
<Link to = "/profile"> 
<div><img src={imges} alt="image" className='Sn-one-img' /></div>
</Link>
</div>
{/* ****************** ButtonBody ************************** */}


{/* ******************LOGO************************** */}
<div>
{/* <div>Logo</div> */}
<div><img src={imges} alt="image" className='Sn-one-img' /></div>
</div>

{/* ******************LOGO************************** */}

      </div>
    </div>
  )
}

export default HomeOne