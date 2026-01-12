import mongoose from "mongoose";
export const dbConnection=async()=>{
    try {
      await mongoose.connect(process.env.Db_URL)
      console.log("Data base connected")
    } catch (error) {
        console.log("data connection error")
    }
}