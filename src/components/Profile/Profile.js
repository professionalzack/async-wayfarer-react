import React from 'react';
import Post from '../Posts/Post';

const Profile = ({ user, userPosts, currentUser, deletePost }) => {
  const signUpDate = `${new Date(user.sign_up_date).toLocaleDateString()} @ ${new Date(user.sign_up_date).toLocaleTimeString()}`;

  const posts = userPosts
    .sort((a, b) => new Date(b.sign_up_date) - new Date(a.sign_up_date))
    .map(post => <Post key={post._id} post={post} currentUser={currentUser} titleOnly={true} showButtons={true} deletePost={deletePost} />);

  return (
    <>
      <section>
        <h2>Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Current City:</strong> {user.city}</p>
        <p><strong>Sign Up Date:</strong> {signUpDate}</p>
      </section>
      <section>
        <h2>Posts</h2>
        {posts}
      </section>
    </>
  )
}

export default Profile;
