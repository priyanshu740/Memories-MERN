import mongoose from 'mongoose'

const authSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    id:{type:String}
})

const authModel = mongoose.model("authModel",authSchema)

export default authModel