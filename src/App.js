import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Register from './components/auth/Register';
import './App.css';

function App() {
  return (
    <div>
      <h1>Wayfarer</h1>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
}

export default App;
