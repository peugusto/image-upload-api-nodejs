import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const db = async () =>{
    try {
    await mongoose.connect(process.env.MONGO_URI).then(console.log('db connected'))      
    } catch (error) {
        console.error(error)
    }
}
export default db