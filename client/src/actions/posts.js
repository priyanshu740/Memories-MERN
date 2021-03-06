import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE ,SEARCH_POST,FETCH_BY_SEARCH} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"))
  try {
    const { data } = await api.likePost(id,user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const searchPost = (searchQuery) => async (dispatch) => {
  try {
    
    const {data:{data}} = await api.searchPost(searchQuery)
    dispatch({type: FETCH_BY_SEARCH ,payload:data})
    console.log(data)
    
  } catch (error) {
    console.log(error)
  }
}


