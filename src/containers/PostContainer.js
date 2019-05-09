import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Posts/Post';

const PostContainer = ({ currentUser, match }) => {
  const [ post, setPost ] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API}/posts/${match.params.postId}`, { withCredentials: true });
      console.log(result);
      setPost(result.data.post);
    }

    getPost();
  }, [match.params.postId]);

  const postOrLoading = post.title ? <Post post={post} showButtons={true} currentUser={currentUser} /> : <h2>Loading...</h2>;

  return (
    <section className="single-post">
      {postOrLoading}
    </section>
  )
}

export default PostContainer;
