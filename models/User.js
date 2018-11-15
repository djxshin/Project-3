const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    image: String,
    instagram: String,
    mainStreamingService: String,
    streamingUsername: String,
    playlist: [
        {
            type: Schema.Types.ObjectId,
            ref: 'playlistName'
        }
    ]
})

module.exports = mongoose.model('User', User)