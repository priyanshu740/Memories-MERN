import axios from 'axios';

const url = 'http://localhost:5000/posts';
const API = axios.create({baseURL:'http://localhost:5000'}) ;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const signUp = (formData) => API.post('/auth/signup',formData)
export const signIn = (formData) => API.post('/auth/signin',formData)
