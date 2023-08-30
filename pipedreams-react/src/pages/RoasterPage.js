// pages/StaffPage.js
import React, { useState } from 'react';
import StaffList from '../components/StaffList';
import { previousDay, nextDay } from '../utils/DateUtils';

function StaffPage({ staffType }) {
  const [currentDay, setCurrentDay] = useState('Monday');
  const [staffData, setStaffData] = useState({}); // Fetch and set staff data here

  return (
    <div>
      <h1>{staffType}</h1>
      <h2>{currentDay}</h2>
      <StaffList staffData={staffData[currentDay]} />

      <button
        disabled={currentDay === 'Monday'}
        onClick={() => setCurrentDay(previousDay(currentDay))}
      >
        Prev
      </button>
      <button
        disabled={currentDay === 'Friday'}
        onClick={() => setCurrentDay(nextDay(currentDay))}
      >
        Next
      </button>

      <a href={staffType === 'Waiters' ? '/cooks' : '/waiters'}>
        Switch to {staffType === 'Waiters' ? 'Cooks' : 'Waiters'}
      </a>
    </div>
  );
}

export default StaffPage;
