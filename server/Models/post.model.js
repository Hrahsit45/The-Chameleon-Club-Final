const mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    image: String,
    caption: String,
    name: String,
    date: String,
    time: String,
    likes:[{
        type : String,
    }]
})

module.exports = mongoose.model('Posts', PostsSchema)