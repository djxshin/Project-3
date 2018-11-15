const User = require('../models/User')
const Playlist = require('../models/Playlist')


const userController = {
  index: (req, res) => {
  
    User.find({})
      .then(user => {
          res.send(user);
      })
},
show: (req, res) => {
    User.findById(req.params.userId).populate('playlist')
        .then((user) => {
            res.send(user)
        })
},
  create: (req, res) => {
    User.create(req.body)
        .then((user) => {
            res.send(user)
        })
},
update: (req, res) => {
    User.findByIdAndUpdate(req.params.userId, req.body)
        .then((updatedUser) => {
            updatedUser.save()
            res.send(updatedUser)
        })
},
delete: (req, res) => {
    User.findByIdAndDelete(req.params.userId)
        .then(() => {
            res.send(200)
        })
}
      

}

module.exports = userController