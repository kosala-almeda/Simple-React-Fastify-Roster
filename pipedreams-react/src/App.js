/**
 * pipedreams-react/src/App.js
 * 
 * React App entry point
 */

import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import RosterPage from './pages/RosterPage';
import HomePage from './pages/HomePage';
import './App.css'; 

// day of week is used as an App wide context
//  which is maintained when switching staff type
export const DayContext = React.createContext();

const staffTypes = [
  'Waiters',
  'Cooks'
];

function App() {

  // current day which is the day context value
  const [currentDay, setCurrentDay] = useState('Monday');

  // home and roster pages with their routes
  return (
    <DayContext.Provider value={{ currentDay, setCurrentDay }}>
      <Router>
        <Switch>
          {/* RosterPage for each staff type with route */}
          {staffTypes.map((staffType) => (
            <Route key={staffType} path={`/${staffType}`}>
              <RosterPage staffType={staffType} staffTypes={staffTypes} />
            </Route>
          ))}
          <Route key="home" path="/">
            <HomePage staffTypes={staffTypes} />
          </Route>
        </Switch>
      </Router>
    </DayContext.Provider>
  );
}

export default App;
