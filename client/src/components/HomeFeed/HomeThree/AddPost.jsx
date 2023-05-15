import axios from 'axios';
import React, { useState , useEffect } from 'react';
import Axios from 'axios'
import { useLocation , Link , useNavigate } from "react-router-dom";




const AddPost = (props) => {

  const [USERS ,setUsers] = useState([{}])
  const [load , setLoad] = useState(true)
  const [data , setData] = useState([{}])

  const navi = useNavigate()

  useEffect(() => {
     console.log(props.id)
      setTimeout(() => {
      setLoad(false)
      },2000)
       fetch()
  },[])

  const fetch = async() => {
    
    console.log("yoooooooooo")
    let url = 'http://localhost:5000/user/all'
     await axios.get(url).then(
     (docs) => {
       setUsers(docs.data)
       console.log(docs.data)
     })
     
  }

  

  // const USERS = [
  //   { id: 1, name: 'Andy', age: 32 },
  //   { id: 2, name: 'Bob', age: 30 },
  //   { id: 3, name: 'Tom Hulk', age: 40 },
  //   { id: 4, name: 'Tom Hank', age: 50 },
  //   { id: 5, name: 'Audra', age: 30 },
  //   { id: 6, name: 'Anna', age: 68 },
  //   { id: 7, name: 'Tom', age: 34 },
  //   { id: 8, name: 'Tom Riddle', age: 28 },
  //   { id: 9, name: 'Bolo', age: 23 },
  // ];

  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  

  

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
 
   foundUsers.map((mem) => (
     console.log(mem)
   ))

   const handleClick = async(fid , id) => {


  await axios.get("http://localhost:5000/user/fetchUserid/" + fid).then((docs) => {
      console.log("go to other profile")
       navi("/otherProfile", {
         state: {
           rdata: props.data,
           data: docs.data,
           uid: props.data._id,
           id: id,
         },
       });
      })}
    return(
      <div class="mb-3 py-5 px-3">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2" 
          value={name}
          onChange={filter}
/>
  
        <span
          class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
          id="basic-addon2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </div>
      {load ? <div /> :
       <div className="user-list">
       {foundUsers && foundUsers.length > 0 ? (
         foundUsers.map((user) => (
           <li  className="user" onClick={(e) => {handleClick(user._id , props.id)}}>
             
             {/* <span className="user-id text-black">{user.id}</span> */}
             <span className="user-name text-black" >{user.name}</span>
           
           </li>
         ))
       ) : (
         <h1>No results found!</h1>
       )}
     </div> }
     
    </div>
    )
}


export default AddPost;