import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Contact from '../components/pages/Contact';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import ProfileContainer from '../containers/ProfileContainer';
import PostContainer from '../containers/PostContainer';

const Routes = ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/contact' component={Contact} />
    <Route path='/register' component={Register} />
    <Route path='/login' render={(props) => <Login {...props} setCurrentUser={setCurrentUser} />} />
    <Route path='/profile/:userId' render={(props) => <ProfileContainer {...props}  currentUser={currentUser} />} />
    <Route path='/posts/:postId' render={(props) => <PostContainer {...props} currentUser={currentUser} />} />
  </Switch>
);

export default Routes;
