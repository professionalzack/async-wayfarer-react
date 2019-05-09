import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Routes from './config/routes';
import './App.css';
import axios from 'axios';

const App = ({ history }) => {
  const [ currentUser, setCurrentUser ] = useState(localStorage.currentUser);

  const handleLogout = async () => {
    if (localStorage.currentUser && window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('currentUser');
      const response = await axios.post(`${process.env.REACT_APP_API}/auth/logout`, { withCredentials: true });
      console.log(response);
      history.push('/login');
    }
  } 

  return (
    <>
      <NavBar currentUser={currentUser} logout={handleLogout} />
      <main>
        <Routes currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </main>
    </>
  );
}

export default withRouter(App);
