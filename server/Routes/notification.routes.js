const Users = require("../Models/user.model")

const express = require('express')

const  router = express.Router();
 

const saveNotifications = async(req , res  , next) => {
   
    console.log("yooo")

    console.log(req.body)
    var fid = req.params.fid


    const userId = req.params.id;

     var name1;
     var profile;

     await Users.findOne({ _id: fid }).then((docs) => {
       name1 = docs.name;
       profile = docs.profile
     });

    console.log(userId)

    var n = name1
    var t = req.body.text
    var fid = req.params.fid
    var ty = req.body.type

    const data = {
        name : n,
        text : t,
        userId : fid,
        Typ : ty,
        profile : profile
}
    

   
await Users.updateOne({ _id: userId}, { $push : { notification : data }})

await Users.findOne({ _id : userId}).then((doc) => {
    console.log("whooo")
    console.log(doc)
}).catch((Err) => {
    console.log(Err)
})

}

const getNotification = async(req , res , next) => {

    const userId = req.params.id;

    console.log("get notificATIONS")

    await Users.findOne({_id : userId}).then((doc) => {
        console.log(doc.notification)
        res.json(doc)
    }).catch((Err) => {
        console.log(Err)
    })
}


const deleteNotification = async(req , res , next) => {
    
    const userId = req.params.id;
    const notid = req.params.fid

    console.log(userId)

    var n = req.body.name
    var t = req.body.text
    var fid = req.params.fid
    var ty = req.body.type

    const data = {
        name : n,
        text : t,
        userId : fid,
        Typ : ty
}
    
console.log(data)
   
await Users.updateOne({ _id: userId}, { $pull : { notification : { _id : notid } }})
await Users.updateOne({ _id: userId }, { $pull: { friendList  : { name : n , userId : fid}}});

await Users.findOne({ _id : userId}).then((doc) => {
    console.log("whooo")
    console.log(doc)
}).catch((Err) => {
    console.log(Err)
})

}


router.post('/save/:id/:fid' , saveNotifications)
router.get('/get/:id' , getNotification)
router.post('/del/:id/:fid' , deleteNotification)


module.exports = router