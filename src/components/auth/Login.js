import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setCurrentUser, history }) => {
  const [ error, setError ] = useState(null);
  const [ userData, setUserData ] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/auth/login`, userData, { withCredentials: true });
      // console.log(response);
      const currentUser = response.data.currentUser;
      localStorage.currentUser = currentUser;
      setCurrentUser(currentUser);
      history.push(`/profile/${currentUser}`);
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  }

  const { email, password } = userData;

  return (
    <section className="form">
      <div>
        {error ? error : null}
      </div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email Address"  />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  )

}

export default Login;
