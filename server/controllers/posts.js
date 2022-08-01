import PostMessage from '../models/postMessage.js';
import  mongoose  from 'mongoose';
import express from 'express'

const router = express.Router()

export const getPosts = async (req,res) => {
    try{
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    }catch(err){
        console.log(err);
    }
} 

export const createPost = async (req,res) => {
    const post = req.body
    const newPostMessage = new PostMessage(post)
    try{
        await newPostMessage.save()
        res.json(newPostMessage)
    }catch(err){
        console.log(err);
    }
} 

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id)

    res.json({mes:"post deleted successfully"})

}

export const likePost = async (req,res) => {
    try {
        const {id} = req.params
    
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no post find with ${id}`)
    
        const post = await PostMessage.findById(id)
        const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount + 1},{new:true})

        res.json(updatedPost)
        
    } catch (error) {
        console.log(error)
    }
    console.log(likePost);
  
}
export default router

export const searchPost = async (req,res) => {
    const {searchQuery} = req.query

    try {
        const title = new RegExp(searchQuery,'i')
        const posts = await PostMessage.find({title})

        res.json({data:posts})
    } catch (error) {
        console.log(error)
    }
}