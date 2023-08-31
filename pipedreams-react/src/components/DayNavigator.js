// components/DayNavigation.js
import React from 'react';
import { previousDay, nextDay } from '../utils/DateUtils';

function DayNavigation({ currentDay, handleDayChange }) {
  return (
    <div className="d-flex justify-content-center my-2">
      <button
        className="btn btn-secondary mx-4"
        disabled={currentDay === 'Monday'}
        onClick={() => handleDayChange(previousDay(currentDay))}
      >
        &lt;
      </button>
      <h3>{currentDay}</h3>
      <button
        className="btn btn-secondary mx-4"
        disabled={currentDay === 'Friday'}
        onClick={() => handleDayChange(nextDay(currentDay))}
      >
        &gt;
      </button>
    </div>
  );
}

export default DayNavigation;
