// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RosterPage from './pages/RosterPage';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 

const staffTypes = [
  'Waiters',
  'Cooks'
];

function App() {
  return (
    <Router>
      <Switch>
        {staffTypes.map((staffType) => (
          <Route key={staffType} path={`/${staffType}`}>
            <RosterPage staffType={staffType} staffTypes={staffTypes} />
          </Route>
        ))}
        <Route path="/">
          <HomePage staffTypes={staffTypes} />
        </Route>
      </Switch>
    </Router>
  );
}

function HomePage({ staffTypes }) {
  return (
    <div>
      <h1>Welcome to the Staff Roster App</h1>
      {staffTypes.map((staffType) => (
        <a key={staffType.id} href={`/${staffType.id}`}>View {staffType.label}</a>
      ))}
    </div>
  );
}

export default App;
