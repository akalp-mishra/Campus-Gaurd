import mongoose from "mongoose"

const institute_schema= new mongoose.Schema({
    institute_name:{
        type:String,
        required: true,
        unique: true,
        index : true
    },
    institute_id:{
        type:Number,
        unique:true,
        required:true,
        index : true
    },
    location:{
        type :String,
        unique: true,
        required:true
    },
    institute_logo:{
        type:String,  //cloudinary url would go here
        required:true
    },
    subscription:{
        type :String,
        enum:["tier-1","tier-2","tier-3"]
    }
},{timestamps:true})

export const institute=mpngoose.model("institute",institute_schema)