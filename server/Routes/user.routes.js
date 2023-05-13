
const Users = require("../Models/user.model")

const express = require('express')

const  router = express.Router();


// send a request  
const sendRequest = async (req , res) => {

    const UserId = req.params.id
    const fid = req.params.fid
    var name2
    var name1
await Users.findOne({_id : fid}).then((docs) => {  
   name2 = docs.name 
}
).catch((err) => {
console.log(err);
})

// await Users.findOne({_id : UserId}).then((docs) => {  
//     name1 = docs.name 
// }
// ).catch((err) => {
// console.log(err);
// })


    const friendId = {
        name : name2,
        userId : req.params.fid
    } 
 
    // const mainUser = {
    //     name : name1,
    //     id : req.params.id
    // } 

await Users.updateOne({ _id: UserId }, { $push : { friendList: friendId } })
  
Users.findOne({_id : UserId}).then((docs) => {  
          console.log(docs)   
         // res.json({message : "updated"})
  }
  ).catch((err) => {
      console.log(err);
  })

}


// accept a request 
const updateRequest = async (req , res) => {

  //  console.log(req.params)

     const UserId = req.params.id
     const fid = req.params.fid
     var name2
     var name1

await Users.findOne({_id : fid}).then((docs) => {  
    name2 = docs.name 
}
).catch((err) => {
console.log(err);
})

await Users.findOne({_id : UserId}).then((docs) => {  
   name1 = docs.name 
}
).catch((err) => {
console.log(err);
})


    const friendId = {
        name : name2,
        userId : req.params.fid
    } 
 
    const data = {
        name : name1,
        userId : req.params.id
    } 
    

     await Users.updateOne({ _id: UserId }, { $pull : { friendList: friendId } })

     await Users.updateOne({ _id: UserId }, { $push : { AcceptedReq: friendId } })

     await Users.updateOne({ _id: fid }, { $push : { AcceptedReq: data } })

      
Users.findOne({_id : UserId}).then((docs) => {  
    console.log(docs)   
}
).catch((err) => {
console.log(err);
})
    
}


//delete a request
const DeleteRequest = async (req , res) => {

    const UserId = req.params.id
    const fid = req.params.fid
    var name2
    var name1

await Users.findOne({_id : fid}).then((docs) => {  
   name2 = docs.name 
}
).catch((err) => {
console.log(err);
})

await Users.findOne({_id : UserId}).then((docs) => {  
  name1 = docs.name 
}
).catch((err) => {
console.log(err);
})


   const friendId = {
       name : name2,
       userId : req.params.fid
   } 

   const data = {
       name : name1,
       userId : req.params.id
   }  

    await Users.updateOne({ _id: UserId }, { $pull : { friendList: friendId } })

    await Users.updateOne({ _id: UserId }, { $pull : { AcceptedReq: friendId } })

    await Users.updateOne({ _id: fid }, { $pull : { AcceptedReq: data } })

    await Users.findOne({_id : fid}).then((docs) => {  
        console.log(docs) 
     }
     ).catch((err) => {
     console.log(err);
     })
     
     await Users.findOne({_id : UserId}).then((docs) => {  
       console.log(docs)
     }
     ).catch((err) => {
     console.log(err);
     })

}

const getAll = async (req , res) => {
     
    const userId = req.params.id
    console.log(userId)
    Users.findOne({_id : userId}).then((docs) => {  
        res.json(docs)
        console.log(docs)  
    }
    ).catch((err) => {
    console.log(err);
    })

}

const getFreind = async(req , res , next) => {

    var id = req.params.id
    var fid = req.params.fid

    await Users.findOne({_id : id}).then((docs) => {
        res.json(docs)
    }) 

}

const All = async(req , res , next) => {

    console.log("hiiii")
    Users.find().then(
        (docs) => {
            res.json(docs) 
            console.log(docs)
        } 
    )
}
 
router.post('/sendRequest/:id/:fid' , sendRequest );

router.post('/acceptRequest/:id/:fid' , updateRequest)

router.post('/deleteRequest/:id/:fid' , DeleteRequest)
 
router.get('/fetchUserid/:id' , getAll)

router.get('/isfriend/:id/:fid' , getFreind)

router.get('/all' , All)

module.exports = router 


  






