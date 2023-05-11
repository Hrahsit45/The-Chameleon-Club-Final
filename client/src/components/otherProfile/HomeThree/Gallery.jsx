import axios from 'axios';
import { useState , useEffect} from 'react';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import Imag from "../Images/peace.jpg"
function Gallery(props) {
  const [selectedImage, setSelectedImage] = useState(null);


  const [posts , setPosts] = useState([{}])


  useEffect(() => {

     fetchPost()

  },[])

  const fetchPost = async() => {

    var fetchUrl = "http://localhost:5000/feed/userPost/" + props.data._id
     
  //  console.log(props.data.name)
    console.log(props.data._id)
     await axios.get(fetchUrl).then((res) => {
       //console.log(res.data) 
       setPosts(res.data)
       //console.log(posts)
     })
  }

  const images = [
    { id: 1, src: Imag, postUrl: '#' },
    { id: 2, src: Imag, postUrl: '#' },
    { id: 3, src: Imag, postUrl: '#' },
    { id: 4, src: Imag, postUrl: '#' },
    { id: 1, src: Imag, postUrl: '#' },
    { id: 2, src: Imag, postUrl: '#' },
    { id: 3, src: Imag, postUrl: '#' },
    { id: 4, src: Imag, postUrl: '#' },
  ];

  const handleImageClick = (id) => {
    // const selected = images.find((img) => img.id === id);
    // if (selected) {
    //   window.location.href = selected.postUrl;
    // }
  };

  return (
    <div className="ugallery">
      {posts.map((img) => (
        <div key={img._id} className="uimage-container" onClick={() => handleImageClick(img._id)}>
          <Popup trigger={ <img class = 'uimg' src={img.image} alt=" profile pic" /> }
           modal nested>{
             close => (
              <div
              class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                class="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={img.image}
                  alt="" />
                <a href="#!">
                  <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div class="p-6">
              <div
  class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div class="p-6">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {img.name}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
     {img.caption}
    </p>
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Button
    </button>
  </div>
</div>
              </div>
            </div>
             )
           }</Popup>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
