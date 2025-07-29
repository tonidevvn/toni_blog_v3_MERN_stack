import express from 'express'
import { clerkMiddleware } from '@clerk/express'
import connectDB from './lib/connectDB.js'
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import commentRouter from './routes/comment.route.js'
import webhookRouter from './routes/webhook.route.js'
import cors from 'cors'

const app = express()
const port = 3000

// Middleware (e.g., app.use(express.json())) goes here
app.use(express.json())
app.use(clerkMiddleware())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Success!')
})

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)
app.use('/webhooks', webhookRouter)

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    message: error.message || 'Something went wrong!',
    status: error.status,
    stack: error.stack
  })
})

app.listen(port, () => {
  connectDB()
  console.log(`Server is running on port ${port}`)
})
