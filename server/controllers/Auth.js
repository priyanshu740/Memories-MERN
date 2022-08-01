import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import authModel from '../models/authModel.js'

const secret = 'test'

export const signin = async (req,res) => {
    const {email,password} = req.body
    try {
        const oldUser = await authModel.findOne({email})

        const checkPassword = await bcrypt.compare(password,oldUser.password)

        if(!oldUser) return res.status(404).json({message:"user not exists"})

        if(!checkPassword) return res.status(400).json({message:"invalid credentials"})

        const token = jwt.sign({ email:oldUser.email,id:oldUser._id },secret, {expiresIn:'1h'})
        
        res.status(201).json({result,token})
    } catch (error) {
        console.log(error);
    }
}

export const signup = async (req,res) => {
    const {email,password,firstname,lastname} = req.body
    try {
        const oldUser = await authModel.findOne({email})

        const hashPassword = await bcrypt.hash(password,12)

        if(!oldUser) return res.status(404).json({message:"user not exists"})

        const result = await authModel.create({ email:result.email,password : hashPassword,name:`${firstname} ${lastname}`})

        const token = jwt.sign({ email:oldUser.email,id:result._id },secret, {expiresIn:'1h'})

        res.status(200).json({result,token})
    } catch (error) {
        console.log(error);
    }
}



