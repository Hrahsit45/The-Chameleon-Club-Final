const mongoose = require('mongoose');

const LikedPostSchema = mongoose.Schema({
    likedPostId: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('LikedPost', LikedPostSchema)