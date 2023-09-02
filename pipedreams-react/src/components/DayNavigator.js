// components/DayNavigator.js
import React from 'react';
import { previousDay, nextDay } from '../utils/DateUtils';

function DayNavigator({ currentDay, handleDayChange }) {
  return (
    <div className="d-flex justify-content-center my-2">
      <button
        className="btn btn-dark mx-4"
        disabled={currentDay === 'Monday'}
        onClick={() => handleDayChange(previousDay(currentDay))}
      >
        &lt;
      </button>
      <h3>{currentDay}</h3>
      <button
        className="btn btn-dark mx-4"
        disabled={currentDay === 'Friday'}
        onClick={() => handleDayChange(nextDay(currentDay))}
      >
        &gt;
      </button>
    </div>
  );
}

export default DayNavigator;
