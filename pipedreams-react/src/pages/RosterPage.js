// pages/StaffPage.js
import React, { useState, useEffect } from 'react';
import StaffList from '../components/StaffList';
import { previousDay, nextDay } from '../utils/DateUtils';
import { fetchStaffData } from '../services/StaffService';

function StaffPage({ staffType, staffTypes }) {
  const [currentDay, setCurrentDay] = useState('Monday');
  const [staffData, setStaffData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStaffData(staffType);
      setStaffData(data);
    };

    fetchData();
  }, [staffType]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center mb-3">
        {staffTypes.map((type) => (
          <a
            key={type.id}
            className={`btn btn-${type === staffType ? 'primary selected-btn' : 'light text-decoration-underline'} m-2`}
            href={`/${type}`}
          >
            {type}
          </a>
        ))}
      </div>

      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-secondary m-2"
          disabled={currentDay === 'Monday'}
          onClick={() => setCurrentDay(previousDay(currentDay))}
        >
          &lt;
        </button>
        <h2>{currentDay}</h2>
        <button
          className="btn btn-secondary m-2"
          disabled={currentDay === 'Friday'}
          onClick={() => setCurrentDay(nextDay(currentDay))}
        >
          &gt;
        </button>
      </div>

      <StaffList staffData={staffData[currentDay.toLowerCase()]} />
    </div>
  );
}

export default StaffPage;
