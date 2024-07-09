import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async (req, res) => {
  try {
    const connection = await mongoose.connect("mongodb+srv://dileepkumar30827:Mulagada%233@cluster0.th8hl8z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connected successfully");
    return connection;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "MongoDB connection Error" });
  }
};
export default connectDB;