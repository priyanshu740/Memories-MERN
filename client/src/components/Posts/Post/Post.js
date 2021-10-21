import React from 'react';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
    <h1>posts</h1>
    </>
  );
};

export default Post;
