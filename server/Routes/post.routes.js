const express = require('express')

const multer = require('multer')

const {v4: uuidv4} = require('uuid');

const path = require('path')

const mongoose = require('mongoose');

let Users = require('../Models/user.model')

let Posts = require('../Models/post.model');


const DIR = './public/';

const  router = express.Router();

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




const savePost = async(req, res, next) => {
    
    const url = req.protocol + '://' + req.get('host')
    var name1;
    var profile;

    await Users.findOne({_id : req.params.id}).then((docs)=>{
        name1 = docs.name , 
        profile = docs.profile
    })


    const Post = {
        userId : req.params.id,
        likes : [req.params.id],
        image: url + '/public/' + req.file.filename,
        caption: req.body.caption,
        name: name1,
        date: req.body.date,
        time: req.body.time,
        profile: profile
    }; 

  ////  console.log(Post)
    Posts.create(Post)
   
    }
  
const getPost = async (req , res , next) => {

    console.log("hello")
    let FriendIds 

    const userid = req.params.id;

    await Users.findOne({_id : userid}).then((res) => {
        FriendIds =  res.AcceptedReq;
    })
  
    let Araay = []
 
    FriendIds.map((mem) => {
        Araay.push(mem.userId), console.log(mem.userId + "...");
    })
  
    Araay.push(userid)

    try{

        Posts.find({userId : { $in : Araay}}).then((docs) => {
             res.json(docs)
           //// console.log(docs)
        }
        ).catch((err) => {
            console.log(err);
        })

    }catch (error) {
        console.log(error)
    }
    
}


const getUserPost = async (req , res , next) => {

   

    const userid = req.params.id;

  
    let Araay = []

   

    Araay.push(userid)

    try{

        Posts.find({userId : { $in : Araay}}).then((docs) => {
             res.json(docs)
          //  console.log(docs)
        }
        ).catch((err) => {
            console.log(err);
        })

    }catch (error) {
        console.log(error)
    }
    
}


const updatePost =async (req , res) => {

    console.log("updating post " + req.body.caption)
   
    const id = req.params.id

    await Posts.updateOne({_id : id } , {
        caption : req.body.caption
    })

    await Posts.findOne({_id : id}).then((docs) => {
      //  console.log(docs)
    })


}


 

const deletePost = (req , res) => {
   
    const id = req.params.id
    Posts.findOneAndDelete({_id : id}).then(
        console.log("post deleted")
    ).catch((err) => {
        console.log(err)
    }    
    ) 

    console.log("deleted")
}  


const getFollowers = async (req , res , next) => {

    console.log("hello")
    let FriendIds 
  
    const userid = req.params.id; 
  
    await Users.findOne({_id : userid}).then((res) => {
        FriendIds =  res.AcceptedReq;
    }) 

    let Araay = [];

    FriendIds.map((mem) => {
      Araay.push(mem.userId);
    });

    try{
  
        Posts.find({userId : { $in : Araay }}).then((docs) => {
             res.json(docs)
          //  console.log(docs)
        }
        ).catch((err) => {
            console.log(err);
        })

    }catch (error) {
        console.log(error)
    }
    
}

const Like = async(req , res , next) => {

    var id = req.params.id;
    var fid = req.params.fid;
        
    await Posts.findOne({_id : fid}).then(async(docs) => {
          await Users.updateOne(
            { _id: id },
            { $push: { likedpost: docs.userId } }
          );
          await Users.updateOne({ _id: id }, { $push: { notification : {
              name : docs.name,
              text : "Liked your Post",
              userId : docs.userId,
              Typ : 'Like',
              profile : docs.profile
          }} });
    })
}

router.post('/like/:id/:fid' , Like)

router.post('/:id', upload.single('photo'), savePost)

router.get('/f/:id' , getFollowers)

router.get('/:id' , getPost)
 
router.patch('/:id',  updatePost)

router.delete('/:id' , deletePost)

router.get('/userPost/:id' , getUserPost)


module.exports = router;