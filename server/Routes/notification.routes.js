const Users = require("../Models/user.model")

const express = require('express')

const  router = express.Router();


const saveNotifications = async(req , res  , next) => {
   
    console.log("yooo")

    console.log(req.body)


    const userId = req.params.id;

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



router.post('/save/:id/:fid' , saveNotifications)
router.get('/get/:id' , getNotification)


module.exports = router