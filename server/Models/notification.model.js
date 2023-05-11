const mongoose = require('mongoose');

const notifcationSchema = mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    Notification : [{
        name : String,
        text : String,
        userId : String,
        type : String
    }]

})

module.exports = mongoose.model('Posts', PostsSchema)