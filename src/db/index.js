import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connection established Succesfully !! DB_Host Name: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection was not established", error);
    process.exit(1);
  }
};

export default connectDB;
