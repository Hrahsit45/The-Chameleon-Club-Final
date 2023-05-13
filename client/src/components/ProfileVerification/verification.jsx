import react from "react";
import { useEffect , useRef , useState } from "react";
import ".//verfication.css"
import src1 from "../Images/Home/cam.png";
import src2 from "../Images/Home/cam3.png"


const Verifiy = () => {

    var video
    var context
    var canvas
    var snap
    const canvasRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
           video = document.getElementById('video');
          video.srcObject = stream;
          video.play();
        })
        .catch(function(err) {
          console.log('Error accessing camera:', err);
        });
        
      // Take a photo and add it to the canvas
       canvas = document.getElementById('canvas');
       context = canvas.getContext('2d');
       snap = document.getElementById('snap');
    },)

    

      function snapFunction() {    
        // if(btnState == "Capture an Image"){ 
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          var preview = document.getElementById("file-ip-1-preview");
          // preview.style.visibility = "visible"
        //   setBstate("Retake")
        //  }
          // else{
          //   var preview = document.getElementById("file-ip-1-preview");
          //  // preview.style.visibility = "hidden"
          //   setBstate("Capture an Image")
          // }

      };
      
      // Send the photos to the server when the button is clicked
     // var sendBtn = document.getElementById('sendBtn');
       function sendBtnFunction() {
        // Get the uploaded file
        var fileInput = document.getElementById('fileInput');
        var file = fileInput.files[0];
        var formData = new FormData();
        formData.append('upload', file);
        
        // Get the captured photo from the canvas
        canvas.toBlob(function(blob) {
          formData.append('photo', blob);
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://localhost:5000/upload', true);
          xhr.onload = function() {
            console.log('Photos uploaded');
            var res = this.response
            console.log(res)
          };
          xhr.send(formData);
        });
      };

      const [file , setFile] = useState("");
      const [btnState , setBstate] = useState("Capture an Image")

      function handleChange(e) {
        console.log(e.target.files);
       // console.log(context.drawImage(video, 0, 0, canvas.width, canvas.height))
        setFile(URL.createObjectURL(e.target.files[0]));

    }

    //   function showPreview(event){
    //     console.log("eee")
    //   if(event.target.files.length > 0){
    //     var src = URL.createObjectURL(event.target.files[0]);
    //     var preview = document.getElementById("file-ip-1-preview");
    //     preview.src = src;
    //     preview.style.display = "block";
    //   }
    // }

    return(
        <div className="vbody">
              
  <img id="img1" className="vimg1" src={src1} />
  <br />
  <br />
  <h1 className="var-hn-one">Credibility Checkpoint</h1>
  <br />
  <h2 className="var-hn-two">Let's Get Verified!!</h2>
  <br />
  <table className = "table">
    <tr>
      <td className = "td"><b></b>Your Best Shot: </td>
      <td className = "td">Show us Your Face:</td>
      <td className = "td">Voila! You're Verified:<b></b></td>
    </tr>
   
  </table>
    <table class="t1"> 
      <tr>
        <td className = "td">Upoad a picture of yourself that's<br></br> worth a thousand words.</td>
        <td className = "td">Look into the camera and flash a smile <br /> for a quick real-time verification.</td>
        <td className = "td">Your Credibility is now confirmned and <br />ready to rock the social world.</td>
      </tr>
    </table>
    

   <br></br>
    <div id="camera">
      <button id="snap"  onClick = {snapFunction} className="cbtn" ><b>{btnState}</b></button>
      <video className="vvideo" id = "video" ></video>
    </div>

    <form className = 'vform'id="form" enctype="multipart/form-data">
     
    <input type="file" id = 'fileInput' onChange={handleChange} class="pre"/>
      <div class="preview">
      <img src={file} className='file-ip-1-preview' />
      </div>
    </form>
    <canvas id="canvas"  className="canvas" ref={canvasRef}></canvas>
    <button id="sendBtn" className="vsendBtn" onClick={sendBtnFunction}><b>Upload my Images</b></button>
    <img id="img2" className=".vimg2" src={src2} />

        </div>
    )
}


export default Verifiy;