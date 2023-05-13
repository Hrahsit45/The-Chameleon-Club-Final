const express = require('express')

const multer = require('multer')

const {v4: uuidv4} = require('uuid');

const path = require('path')

const mongoose = require('mongoose');

let Users = require('../Models/user.model')

let Posts = require('../Models/post.model');
const { Console } = require('console');

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




const savePost = (req, res, next) => {
    
    const url = req.protocol + '://' + req.get('host')
    const Post = {
        userId : req.params.id,
        likes : [req.params.id],
        image: url + '/public/' + req.file.filename,
        caption: req.body.caption,
        name: req.body.name,
        date: req.body.date,
        time: req.body.time
    };

    console.log(Post)
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
        Araay.push(mem.userId)
    })

    Araay.push(userid)

    try{

        Posts.find({userId : { $in : Araay}}).then((docs) => {
             res.json(docs)
            console.log(docs)
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
            console.log(docs)
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
        console.log(docs)
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

    console.log(FriendIds)

    try{

        Posts.find({userId : { $in : FriendIds}}).then((docs) => {
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





router.post('/:id', upload.single('photo'), savePost)

router.get('/:fid/:id' , getFollowers)

router.get('/:id' , getPost)

router.patch('/:id',  updatePost)

router.delete('/:id' , deletePost)

router.get('/userPost/:id' , getUserPost)


module.exports = router;