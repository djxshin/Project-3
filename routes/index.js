const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const playlistController = require('../controllers/playlist')

router.get('/api/user', userController.index)
router.post('/api/user/', userController.create)
router.get('/api/user/:userId', userController.show)
router.patch('/api/user/:userId', userController.update)
router.delete('/api/user/:userId', userController.delete)

router.get('/api/user/:userId/playlist', playlistController.index)
// router.get('/api/playlist/:playlistId', playlistController.show)
// router.delete('/api/playlist/:playlistId', playlistController.delete)
// router.patch('/api/playlist/:playlistId', playlistController.update)
// router.post('/api/users/:userId/playlist', playlistController.create)

module.exports = router
