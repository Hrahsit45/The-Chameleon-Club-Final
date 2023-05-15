const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"})
const Users = require("./Models/user.model")
const path = require('path')
const PostRoutes  = require('./Routes/post.routes')
const UserRoutes = require('./Routes/user.routes')
const NotificationRoutes = require('./Routes/notification.routes')
const CustomizationRoutes = require('./Routes/verification.routes')
const messageRoutes = require("./Routes/messageFile")
const {v4: uuidv4} = require('uuid');
const { spawn } = require('child_process');
const multer = require('multer')
const socket = require("socket.io")

const app = express();
app.use(cors())


let { PythonShell } = require("python-shell");
var package_name = "python-avatars";
let options = {
  args: [package_name],
}; 

 

// setTimeout(() => {
  
   PythonShell.run("install_package.py", options).then(message => {
    
       console.log(message);
     });

     // end the input stream and allow the process to exit
    
  
     
// },100)

   

// const DIR = './public/';()

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

// const URL="mongodb+srv://harshitshahi54:09polkmnA@cluster0.dsl99dy.mongodb.net/TCC?retryWrites=true&w=majority"

app.use(morgan('dev'));
app.use(express.json())
app.use("/feed" , PostRoutes)
app.use("/user" , UserRoutes)
app.use("/notify" , NotificationRoutes)
app.use("/custom" , CustomizationRoutes)
app.use("/messages" , messageRoutes);

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const DB = process.env.URL;

mongoose

  .connect(DB, {
    useNewUrlParser: true, // The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser. // useCreateIndex: true, // Again previously MongoDB used an ensureIndex function call to ensure that Indexes exist and, if they didn't, to create one. This too was deprecated in favour of createIndex . the useCreateIndex option ensures that you are using the new function calls. // useFindAndModify: false, // findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.

    useUnifiedTopology: true, // Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true , except for the unlikely case that it prevents you from maintaining a stable connection.
  })

  .then(() => {
    console.log("DB Connection successful");
  });


app.post('/' ,(req ,res) => {
  
     console.log(req.body.Name)   
    
})



// verification session 
app.post('/upload/:id', upload.fields([{ name: 'upload', maxCount: 1 }, { name: 'photo', maxCount: 1 }]), function (req, res, next) {

    const id = req.params.id
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
   
    pythonProcess.stdout.on('data', async(data) => {
      if (data.toString().trim() === 'not_found') {
        // res.redirect('/');
      } else {
         console.log("py",data.toString());
         if(data.toString == '0'){
         await Users.updateOne(
           { _id: id },
           {
             Verified : false
           }
         );
         res.send("0")
         }
         else if (data.toString == '1'){
            await Users.updateOne(
              { _id: id },
              {
                Verified: true,
              }
            );
         res.send("1")
         }
         else
         {
           res.send("0");
         }
         

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



  app.post("/message", (req, res) => {
    const { message } = req.body;
    console.log(message)

    const py = spawn("python", ["bot3.py"]);
    py.stdin.write(JSON.stringify({ message }) + "\n");
    py.stdin.end();

    let response = "";
    py.stdout.on("data", (data) => {
      response += data.toString();
      console.log(response)
      // If the response ends with a newline, we assume it's complete
       if (response.endsWith("\n")) {
        const jsonResponse = JSON.parse(response.trim());
        res.json(jsonResponse);
      }
    });
  });


const port = 5000;

// app.listen(port , ()=>{
//     console.log('app running on the port '+port);
// });




const server = app.listen(process.env.PORT, () =>

 console.log(`Server started on ${process.env.PORT}`)

);

const io = socket(server, {
  cors: {
    origin: "https://thechameleonapp.netlify.app",

    credentials: true,
  },
});




global.onlineUsers = new Map();

io.on("connection", (socket) => {

 global.chatSocket = socket;

 socket.on("add-user", (userId) => {

  onlineUsers.set(userId, socket.id);

 });




 socket.on("send-msg", (data) => {

  const sendUserSocket = onlineUsers.get(data.to);

  if (sendUserSocket) {

   socket.to(sendUserSocket).emit("msg-recieve", data.msg);

  }

 });

});


