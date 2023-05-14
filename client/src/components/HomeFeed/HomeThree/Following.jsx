import './Feed.css';
import axios from 'axios';
import React, { useState , useEffect } from 'react';




const Following = (props) => {

  


  const url = "http://localhost:5000/feed/f/"  + props.id

 let [data , setData] = useState([])
  
 const [loading, setLoading] = useState(true);
 

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setData([])
    fetchPost()
  },[])
 
  const [img , setImg] = useState();

  const fetchPost = async() => {
    await axios.get(url).then(
    (res) => {
    
      console.log(res.data)
    
    setData([])
    
     const newData = res.data.map(Object => ({
        //  only use these fields for newData
               id: Object._id,
               name: Object.name,
               image: Object.image,
               caption: Object.caption,
               userId : Object.userId,
               date : Object.date,
               time : Object.time,
               profile : Object.profile
      }));
      
      setData(data => [...data, ...newData]);
    }
    ).catch((err) => {
      console.log(err)
    })
  }
 
  // const [feeds, setFeeds] = useState([
  //   {
  //     id: 1,
  //     name:'TrishaGeorge',
  //     text: 'Time and Tide waits for none ',
  //     image: Peace,
  //     date: 'May 5, 2023',
  //     time: '9:00 AM',
  //     likes: 10,
  //   },
  //   {
  //     id: 2,
  //     name:'TrishaGeorge',
  //     text: 'Another post here!',
  //     image: Nature,
  //     date: 'May 4, 2023',
  //     time: '6:30 PM',
  //     likes: 5,
     
  //   },
  //   {
  //     id: 3,
  //     name:'TrishaGeorge',
  //     text: 'Another post here!',
  //     image: Nature,
  //     date: 'May 4, 2023',
  //     time: '6:30 PM',
  //     likes: 5,
     
  //   },
  // ]);

  // const handleLike = (id) => {
  //   const updatedFeeds = feeds.map((feed) => {
  //     if (feed.id === id) {
  //       return { ...feed, likes: feed.likes + 1 };
  //     }
  //     return feed;
  //   });
  //   setFeeds(updatedFeeds);
  // };


  return (
    loading ? <div>Loading...</div> :
    <div className="feed-container">
      {data.map((feeed) => (
        <div className="feed" key={feeed._id}>
          <div className="feed-header">
            <div className='feed-header-bdy'>
            <div className='pro-fed-img'><img src={feeed.profile} alt="feed" className="feed-image" />
            <span  className='pro-fed-img-txt'>{feeed.name}</span></div>
            <div><span>{feeed.date}</span> &nbsp;
              <span>{feeed.time}</span></div>
              </div>
            <div className="feed-text text-black">
              <div className="feed-image-two-ctr"><img src={feeed.image} alt="feed" className="feed-image-two"/></div>
             
              
            </div>
          </div>



          <div className="feed-likes">
          <p className="feed-image-two-tx text-black">{feeed.caption}</p>
            <button > ({})</button>
          </div>
        
        </div>
))}
    </div>
  );
};

export default Following;
