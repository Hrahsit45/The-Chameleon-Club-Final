const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Users = require("./Models/user.model")
const path = require('path')
const PostRoutes  = require('./Routes/post.routes')
const UserRoutes = require('./Routes/user.routes')
const NotificationRoutes = require('./Routes/notification.routes')
const CustomizationRoutes = require('./Routes/verification.routes')
const {v4: uuidv4} = require('uuid');
const { spawn } = require('child_process');
const multer = require('multer')


const app = express();
app.use(cors())

   

// const DIR = './public/';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => { 
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// }); 


var upload = multer({storage: multer.memoryStorage()})


const __dirnam = path.resolve();
app.use("/public", express.static(path.join(__dirnam, "/public")));
// app.use(express.static(__dirname))

const URL="mongodb+srv://harshitshahi54:09polkmnA@cluster0.dsl99dy.mongodb.net/TCC?retryWrites=true&w=majority"

app.use(morgan('dev'));
app.use(express.json())
app.use("/feed" , PostRoutes)
app.use("/user" , UserRoutes)
app.use("/notify" , NotificationRoutes)
app.use("/custom" , CustomizationRoutes)

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(URL,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


app.post('/' ,(req ,res) => {
  
     console.log(req.body.Name)   
    
})



// verification session 
app.post('/upload', upload.fields([{ name: 'upload', maxCount: 1 }, { name: 'photo', maxCount: 1 }]), function (req, res, next) {
    const uploadFile = req.files['upload'][0];
    const photoFile = req.files['photo'][0];
    console.log('Received files:', uploadFile, photoFile);
  
    const pythonProcess = spawn('python', ['script.py']);
  
    const uploadFileData = uploadFile.buffer;
    const photoFileData =  photoFile.buffer;  
    console.log(uploadFileData,photoFileData);
  
    

    const inputData = {
      uploadFile: uploadFileData.toString('base64'),
      photoFile: photoFileData.toString('base64')
    };

    console.log("gg")
   
    pythonProcess.stdin.write(JSON.stringify(inputData));
    pythonProcess.stdin.end();

    console.log('gg')
   
    pythonProcess.stdout.on('data', (data) => {
      if (data.toString().trim() === 'not_found') {
        // res.redirect('/');
      } else {
         console.log("py",data.toString());
         if(data.toString() ==  'Error: list index out of range'  || data.toString == '0')
         res.send("0")
         else 
         res.send("1")

        // res.send(data.toString());
      }
    });
 
    console.log("gg")
  
    pythonProcess.on('error', (err) => {
      console.error('Failed to start Python process.', err);
      res.status(500).send('Internal server error.');
    });

    console.log("gg")
  
    pythonProcess.on('exit', (code, signal) => {
      if (code !== 0) {

        console.error(`Python process exited with code ${code} and signal ${signal}`);
      } else {
        console.log('Python process exited successfully');
      }
    });
  });




const port = 5000;

app.listen(port , ()=>{
    console.log('app running on the port '+port);
})