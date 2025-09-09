import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const teacher_schema=new mongoose.Schema({
    username:{
        type: String,
        required : true,
        trim : true,
        index :true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    password:{
        type:String,
        unique:true,
        required:true,
        trim : true
    },
    institute:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"institute",
        required:true
    },
    classroom_id:{
        type:Number,
        unique:true,
        required:True,
    },
    age:{
        type:Number,
        required:true
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
},{timestamps:true})

teacher_schcema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password,10)
        next()
    }
})

teacher_schema.methods.is_password_correct=async function (passsword){
    return await bcrypt.compare(password,this.password)
}

export const teacher= mongoose.model("teacher",teacher_schema)