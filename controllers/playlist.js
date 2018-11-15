const User = require('../models/User')
const Playlist = require('../models/Playlist')

const playlistController = {
  index: (req, res) => {
    let userId = req.params.userId
    User.findById(userId).populate('playlist')
      .then((user) => {
        res.send(user.playlist)
      })
  },
//   show: (req, res) => {
//     let playlistId = req.params.playlistId
//     Playlist.findById(playlistId)
//       .then((playlist) => {
//         res.send(playlist)
//       })
//   },
//   delete: (req, res) => {
//     let playlistId = req.params.playlistId
//     Playlist.findByIdAndDelete(playlistId)
//       .then(() => {
//         res.send(200)
//       })
//   },
//   update: (req, res) => {
//     let playlistId = req.params.playlistId
//     Playlist.findByIdAndUpdate(playlistId, req.body, { new: true })
//       .then((updatedPlaylist) => {
//         updatedPlaylist.save()
//         res.send(updatedPlaylist)
//       })
//   },
//   create: (req, res) => {
//     let userId = req.params.userId
//     User.findById(userId)
//       .then((user) => {
//         console.log(user)
//         Playlist.create(req.body)
//           .then((newPlaylist) => {
//             console.log(newPlaylist)
//             user.playlist.push(newPlaylist)
//             user.save()
//             res.send(newPlaylist)
//           })
//       })
//   }

}

module.exports = playlistController
