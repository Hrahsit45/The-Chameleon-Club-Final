import React , {useEffect , useState} from 'react'
import Logo from "./Images/Logo.mp4"
import imges from "./Images/smallImg.jpg"
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import axios from 'axios'


const HomeOne = (props) => {

  const navi = useNavigate();

  const goToFeed = () => {
    navi("/homefeed" , {
      state : {
         id : props.data._id,
         name : props.data.name,
         number : props.data.number,
         email : props.data.email
      }
    })
  }

  const [notifications , setNotifications] = useState([{}])

  useEffect(() => {
    //fetch notification
    //console.log(props.uid)
    var url = 'http://localhost:5000/notify/get/'+props.data._id

     axios.get(url).then(
      res => {

       // console.log(res.data.notification)
        var data = res.data.notification
        console.log(data)
        setNotifications(data)
        console.log(notifications)
      }
    ).catch(err => {
      console.log(err);
    })  
  }, [])
  return (
    <div>
      <div className='uSn-one'>
{/* ******************LOGO************************** */}
<video src={Logo} autoPlay loop muted type='video/mp4' className='ulogo'/> 
{/* ******************LOGO************************** */}

{/* ****************** ButtonBody ************************** */}
<div className=''>
<div><img src={imges} alt="image" className='uSn-one-img' onClick={goToFeed}/></div>
<div><Popup trigger = {<img src={imges} alt="image" className='uSn-one-img' /> }
  modal nested>{
  close => (
    notifications.map((not) => (
  <div className='rounded'>
    <h1 className='text-black h-30'>Notifications</h1>
    <div className="flex bg-gray-200">
    <div  className="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <img src={imges} alt="image" className='uSn-two-img' />
      </div>
        <div className="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">{not.name}</div>
        <div className="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
         {not.Typ == 'request' ?  <button>
            Accept
          </button> :
           <button>
           delete
         </button>
}
        </div>  
      </div>
      </div>
      ))
      )
}</Popup></div> 
<div><img src={imges} alt="image" className='uSn-one-img' /></div>
<div><img src={imges} alt="image" className='uSn-one-img' /></div>
</div>
{/* ****************** ButtonBody ************************** */}


{/* ******************LOGO************************** */}
<div>
{/* <div>Logo</div> */}
<div><img src={imges} alt="image" className='uSn-one-img' /></div>
</div>

{/* ******************LOGO************************** */}

      </div>
    </div>
  )
}

export default HomeOne