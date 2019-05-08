import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [ errors, setErrors ] = useState([]);
  const [ newUser, setNewUser ] = useState({
    name: '',
    email: '',
    city: '',
    password: '',
    password2: ''
  });

    const handleChange = e => {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async e => {
      e.preventDefault();
      console.log(newUser);

      try {
        const result = await axios.post('http://localhost:4000/api/v1/auth/register', newUser, {withCredentials: true});
        console.log(result)
      } catch(err) {
        console.log(err);
        setErrors(err.response.data.errors);
      }

    }

    const { name, email, password, password2, city } = newUser;

  return (
    <>
      { errors ? errors.map(error => `${error.message}. `) : null }
      <section className="form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={name} placeholder="Name" onChange={handleChange} />
          <input type="email" name="email" value={email} placeholder="Email Address" onChange={handleChange} />
          <input type="text" name="city" value={city} placeholder="Current City" onChange={handleChange} />
          <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange} />
          <input type="password" name="password2" value={password2} placeholder="Confirm Password" onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  )
}

export default Register;
