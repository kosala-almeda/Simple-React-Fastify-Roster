// App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RosterPage from './pages/RosterPage';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 

export const DayContext = React.createContext();

const staffTypes = [
  'Waiters',
  'Cooks'
];

function App() {
  const [currentDay, setCurrentDay] = useState('Monday');

  return (
    <DayContext.Provider value={{ currentDay, setCurrentDay }}>
      <Router>
        <Switch>
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
