const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Playlist = new Schema({
  playlistName: String,
  image: String,
  track1: String,
  Track2: String,
  Track3: String,
  Track4: String,
  Track5: String
})

module.exports = mongoose.model('Playlist', Playlist)