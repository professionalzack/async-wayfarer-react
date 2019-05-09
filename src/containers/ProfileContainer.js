import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from '../components/Profile/Profile';

const ProfileContainer = ({ currentUser, match }) => {
  const [ error, setError ] = useState(null);
  const [ user, setUser ] = useState({});
  const [ userPosts, setUserPosts ] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const userId = match.params.userId;
        const response = await axios.get(`${process.env.REACT_APP_API}/users/${userId}`);
        console.log(response);
        setUser(response.data.user);
        setUserPosts(response.data.userPosts);
      } catch (err) {
        console.log(err);
        setError(err.response.data.error);
      }
    }

    getProfile()
  }, [match.params.userId]);

  const deletePost = async postId => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await axios.delete(`${process.env.REACT_APP_API}/posts/${postId}`, { withCredentials: true });
        // console.log(response);
        const updatedPosts = userPosts.filter(post => post._id !== postId);
        setUserPosts(updatedPosts);
      } catch (err) {
        console.log(err);
        setError(err.response.data.error);
      }
    }
  }

  return (
    <Profile user={user} userPosts={userPosts} currentUser={currentUser} deletePost={deletePost} />
  )
}

export default ProfileContainer;
