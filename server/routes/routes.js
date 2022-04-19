import express  from "express";
import { createPost, getPosts, updatePost,deletePost ,likePost} from "../controllers/posts.js";
import { authMiddlware } from "../middleware/auth.js";

const route = express.Router()

route.get('/',getPosts)
route.post('/',createPost)
route.patch('/:id',authMiddlware,updatePost)
route.patch('/:id/likePost',authMiddlware,likePost)
route.delete('/:id',authMiddlware,deletePost)

export default route