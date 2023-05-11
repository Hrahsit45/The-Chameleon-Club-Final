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

    var fetchUrl = "http://localhost:5000/feed/" + props.data._id
     
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
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={img.caption}   />
    </div>
  </div>
  <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" type="file"
      accept= ".png, .jpg, ,jpeg" 
      name = "photo"
       />
      <span class="text-sm">
      </span>
    </label>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"
      >
        update
      </button>
      <img   alt="tweetImg"  />
    </div>
  </div>
</form>
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
