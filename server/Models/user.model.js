const mongoose = require('mongoose');



const NUserSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    profile: String,
    Verified : {
        type : Boolean,
        default : false
    },
    posts : [{
        likeUserId: [mongoose.Schema.Types.ObjectId],
        image: {
            type: String
        },
        caption: String
    }],
    likedpost : [String],
    friendList :[
        {
            name : String,
            userId : String
        }
    ],

    AcceptedReq :  [{
        name : String,
        userId : String,
        profile : String,
    }],
    notification : [{
        name : String,
        text : String,
        userId : String,
        Typ : String, 
        profile : String, 
    }]
    
})

module.exports = mongoose.model('Users', NUserSchema)