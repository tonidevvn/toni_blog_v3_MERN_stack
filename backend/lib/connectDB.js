import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config() // Load environment variables from .env file

const MONGODB_URI = process.env.mongooseURI

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } }
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, clientOptions)
    console.log('MongoDB is connected!')
  } catch (err) {
    console.log(err)
  }
}

export default connectDB