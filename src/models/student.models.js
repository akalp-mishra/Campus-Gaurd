import mongoose from 'mongoose'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const student_schema=new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim:true,
        index:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    password:{
        type:String,
        required: true,
        unique:true
    },
    Institute_name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"institute",
        required:true
    },
    classroom_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"teacher",
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        reqired:true,
        enum:["M","F"]
    },
    age:{
        type:Number,
        required:true,
    }
},{timestamps :true})

student_schema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password = bcrypt.hash(this.password,10)
        next()
    }
    next()
})

student_schema.methods.is_password_correct= async function (password){
    return await bcrypt.compare(password,this.password)
}

export const student=mongoose.model('student',student_schema)