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
const { spawn } = require('child_process');
const multer = require('multer')

const app = express();
app.use(cors())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


const __dirnam = path.resolve();
app.use("/public", express.static(path.join(__dirnam, "/public")));

const URL="mongodb+srv://harshitshahi54:09polkmnA@cluster0.dsl99dy.mongodb.net/TCC?retryWrites=true&w=majority"

app.use(morgan('dev'));
app.use(express.json())
app.use("/feed" , PostRoutes)
app.use("/user" , UserRoutes)
app.use("/notify" , NotificationRoutes)

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

const fetchUser = (req, res) => {


    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
      }
    
    const v = req.params.data
    const check = containsOnlyNumbers(v)
    if(check || v.charAt(0) == '+')
    {
        const num = v.substring(v.length - 10);
        const rnum = num*1
        Users.findOne({mobile : rnum}).then((docs) => {
            res.json(docs)
        }
        ).catch((err) => {
            console.log(err);
        })
    }
    else{
        Users.findOne({email : v}).then((docs) => {
          //  res.json(docs)
            if(docs == null)
            {
               res.json(docs)
            }
            else
            {
                res.json(docs)
            }
        }
        ).catch((err) => {
            console.log(err);
        })
    }
}




const saveUser = (req ,res) =>{

    var n = 10
    var num = req.body.mobile_no;
    num = num.toString()
    var cnum = num.substring(num.length - n)
    var rnum = cnum*1

    const newpost = new Users ({
      name : req.body.Name,
      email : req.body.Email,
      mobile : rnum
    })
    
  newpost.save().then(doc => {
      console.log(doc)
  }).catch(err => {
      console.log(err)
  })

  console.log("heeeeeeeeeee")
}

app.get('/fetchUser/:data' , fetchUser)
app.post('/saveUser' , saveUser )



// verification session 
app.post('/upload', upload.fields([{ name: 'upload', maxCount: 1 }, { name: 'photo', maxCount: 1 }]), function (req, res, next) {
    const uploadFile = req.files['upload'][0];
    const photoFile = req.files['photo'][0];
    console.log('Received files:', uploadFile, photoFile);
  
    const pythonProcess = spawn('python', ['script.py']);
  
    const uploadFileData = uploadFile.buffer;
    const photoFileData = photoFile.buffer;
  
    const inputData = {
      uploadFile: uploadFileData.toString('base64'),
      photoFile: photoFileData.toString('base64')
    };
  
    pythonProcess.stdin.write(JSON.stringify(inputData));
    pythonProcess.stdin.end();
  
    pythonProcess.stdout.on('data', (data) => {
      if (data.toString().trim() === 'not_found') {
        res.redirect('/');
      } else {
        console.log(data.toString());
        res.send('File uploaded successfully.');
      }
    });
    
    pythonProcess.on('error', (err) => {
      console.error('Failed to start Python process.', err);
      res.status(500).send('Internal server error.');
    });
  
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