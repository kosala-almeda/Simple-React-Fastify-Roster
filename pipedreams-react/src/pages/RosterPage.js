// pages/StaffPage.js
import React, { useState, useEffect, useContext } from 'react';
import { DayContext } from '../App';
import StaffList from '../components/StaffList';
import DayNavigator from '../components/DayNavigator';
import StaffNavigator from '../components/StaffNavigator';
import { fetchStaffData } from '../services/StaffService';

function StaffPage({ staffType, staffTypes }) {
  const { currentDay, setCurrentDay } = useContext(DayContext);
  const [staffData, setStaffData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStaffData(staffType);
      setStaffData(data);
    };

    fetchData();
  }, [staffType]);

  const handleDayChange = (newDay) => {
    setCurrentDay(newDay);
  };

  return (
    <div className="container mt-3">

      
      <h2 className='text-center fw-bold'>{staffType}</h2>

      <DayNavigator
        currentDay={currentDay}
        handleDayChange={handleDayChange}
      />


      {staffData ? (
        <StaffList staffData={staffData[currentDay.toLowerCase()]} />
      ) : (
        <p>Loading staff data...</p>
      )}

      <StaffNavigator
        staffTypes={staffTypes}
        currentType={staffType}
      />
    </div>
  );
}

export default StaffPage;
