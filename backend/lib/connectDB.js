import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongooseURI);
    console.log("MongoDB is connected!");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
