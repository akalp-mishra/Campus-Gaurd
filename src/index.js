import dotenv from "dotenv"
import mongoose from "mongoose"
import { db_name } from "./constants.js";
import { connectDB } from "./db/index.js" 

dotenv.config({
  path: '.env'
})

connectDB()
