const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Playlist = new Schema({
  playlistName: String,
  image: String,
  track1: String,
  track2: String,
  track3: String,
  track4: String,
  track5: String
})

module.exports = mongoose.model('Playlist', Playlist)