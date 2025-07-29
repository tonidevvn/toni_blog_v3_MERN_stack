import express from 'express'
import Post from '../models/post.model.js'
const router = express.Router()

router.get('/', async (req, res) => {
  res.send('User route')
})

module.exports = router
