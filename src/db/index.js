import mongoose from "mongoose"
import {db_name} from "../constants.js"

export const connectDB = async ()=>{
    try {
        const connection=await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        console.log(`\n mongodb connected ,don't lose hope ${connection.connection.host}`)
    }catch (error){
        console.log("error",error)
        process.exitCode=1
    }
}