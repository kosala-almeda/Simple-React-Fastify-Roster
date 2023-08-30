// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoasterPage from './pages/RoasterPage';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/waiters">
          <RoasterPage staffType="Waiters" />
        </Route>
        <Route path="/cooks">
          <RoasterPage staffType="Cooks" />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
