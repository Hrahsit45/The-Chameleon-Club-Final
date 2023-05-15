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
         data : props.data,
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
      //  console.log(data)
        setNotifications(data)
       // console.log(notifications)
      }
    ).catch(err => {
      console.log(err);
    })  

  }, [])

  // const addNot = () => {

  //   console.log("inside at not")

  //    var url = "http://localhost:5000/notify/get/" + props.data._id;
  //    axios
  //      .get(url)
  //      .then((res) => {
  //        // console.log(res.data.notification)
  //        var data = res.data.notification;
  //        //  console.log(data)
  //        setNotifications(data);
  //        // console.log(notifications)
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //      });  

  // }

  const acceptRequest = async(ffid , uid, Typ , name , text) => {
        
         const id = props.data._id;
         const fid = ffid
         console.log(ffid)

         const formData = new FormData()
         formData.append('name' , name)
    formData.append('text' , text)
    formData.append('type' , Typ)
     
       var url1 = 'http://localhost:5000/notify/del/'+id+'/'+ffid
       var url = 'http://localhost:5000/user/acceptRequest/'+id+'/'+uid

        axios.post(url)


      var url1 = 'http://localhost:5000/notify/del/'+id+'/'+ffid

       axios.post(url1 , formData ,  {
       headers: {
         'Content-Type': 'application/json'
       }
     })


      window.location.reload()



         //this.setState()

         
  }


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

  console.log(id)
  
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

  const DeleteRequest = async(ffid , uid , Typ , name , text) => {
    const id = props.data._id;
    const fid = ffid

    var url = 'http://localhost:5000/user/deleteRequest/'+id+'/'+uid

    await axios.post(url).then((res) => {
      alert("deleted")
    }
    )

    console.log(Typ)
    console.log(name)
    console.log(text)
  
    
    const formData = new FormData()
    formData.append('name' , name)
    formData.append('text' , text)
    formData.append('type' , Typ)

   var url1 = 'http://localhost:5000/notify/del/'+id+'/'+fid

 await axios.post(url1 , formData ,  {
  headers: {
    'Content-Type': 'application/json'
  }


})
window.location.reload()

  }

  const goToEditProfile = () => {
     navi("/profile", {
       state: {
         email: props.data.email,
         name: props.data.name,
         Mobile_no: props.data.mobile,
         profile:props.data.profile,
         var:0
        //  logout: logOut(),
       },
     });
  }

  const goToChat = () => {
    navi("/chat", {
      state: {
        id: props.data._id,

        name: props.data.name, // number: props.data.number,

        email: props.data.email,
      },
    });
  }


  return (
    <div>
      <div className="uSn-one border-4 border-black">
        {/* ******************LOGO************************** */}
        <video
          src={Logo}
          autoPlay
          loop
          muted
          type="video/mp4"
          className="ulogo"
        />
        {/* ******************LOGO************************** */}

        {/* ****************** ButtonBody ************************** */}
        <div className="">
          <div>
            <img
              src={imges}
              alt="image"
              className="uSn-one-img"
              onClick={goToFeed}
            />
          </div>
          <div>
            <Popup
              trigger={<img src={imges} alt="image" className="uSn-one-img" />}
              modal
              nested
            >
              {(close) =>
                notifications.map((not) => (
                  <div className="rounded">
                    <div className="flex bg-gray-200">
                      <div className="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                        <img src={imges} alt="image" className="uSn-two-img" />
                      </div>
                      <div className="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                        {not.name}
                      </div>
                      <div className="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                        {not.text}
                      </div>
                      <div className="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                        {not.Typ == "request" ? (
                          <div>
                            {" "}
                            <button
                              onClick={(e) => {
                                acceptRequest(
                                  not._id,
                                  not.userId,
                                  not.Typ,
                                  not.name,
                                  not.text
                                );
                              }}
                              key={not.userId}
                              name={not.userId}
                              name1={not.Typ}
                              name3={not.name}
                              name4={not.text}
                            >
                              Accept
                            </button>
                            <button
                              onClick={(e) => {
                                DeleteRequest(
                                  not._id,
                                  not._userId,
                                  not.Typ,
                                  not.name,
                                  not.text
                                );
                              }}
                              name={not.userId}
                              name1={not.Typ}
                              name3={not.name}
                              name4={not.text}
                            >
                              delete
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              DeleteRequest(
                                not._id,
                                not.Typ,
                                not.name,
                                not.text
                              );
                            }}
                          >
                            Delete Notifcation
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              }
            </Popup>
          </div>
          <div>
            <img
              src={imges}
              alt="image"
              className="uSn-one-img"
              onClick={goToEditProfile}
            />
          </div>
          <div>
            <img
              src={imges}
              alt="image"
              className="uSn-one-img"
              onClick={(e) => {
                goToChat();
              }}
            />
          </div>
        </div>
        {/* ****************** ButtonBody ************************** */}

        {/* ******************LOGO************************** */}
        <div>
          {/* <div>Logo</div> */}
          <div>
            <Popup
              trigger={<img src={imges} alt="image" className="uSn-one-img" />}
              nested
              modal
            >
              {(close) => (
                <div>
                  <form class="w-full max-w-sm" encType="multipart/form-data">
                    <div class="md:flex md:items-center mb-6">
                      <div class="md:w-1/3">
                        <label
                          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                          for="inline-full-name"
                        >
                          Caption
                        </label>
                      </div>
                      <div class="md:w-2/3">
                        <input
                          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          id="inline-full-name"
                          type="text"
                          value={caption}
                          onChange={(e) => setCaption(e.target.value)}
                        />
                      </div>
                    </div>
                    <label class="md:w-2/3 block text-gray-500 font-bold">
                      <input
                        class="mr-2 leading-tight"
                        type="file"
                        accept=".png, .jpg, ,jpeg"
                        name="photo"
                        onChange={(e) => setPhoto(e.target.files[0])}
                      />
                      <span class="text-sm"></span>
                    </label>
                    <div class="md:flex md:items-center">
                      <div class="md:w-1/3"></div>
                      <div class="md:w-2/3">
                        <button
                          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                          type="button"
                          onClick={handleSubmit}
                        >
                          POST
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </Popup>
          </div>
        </div>

        {/* ******************LOGO************************** */}
      </div>
    </div>
  );
}

export default HomeOne