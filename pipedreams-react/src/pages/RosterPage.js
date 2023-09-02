// pages/RosterPage.js
import React, { useState, useEffect, useContext } from 'react';
import { DayContext } from '../App';
import StaffList from '../components/StaffList';
import DayNavigator from '../components/DayNavigator';
import StaffNavigator from '../components/StaffNavigator';
import { fetchStaffData } from '../services/StaffService';

function StaffPage({ staffType, staffTypes }) {
  const { currentDay, setCurrentDay } = useContext(DayContext);
  const [staffData, setStaffData] = useState(null);
  const [staffLoading, setStaffLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setStaffLoading(true);
      const data = await fetchStaffData({
        staffType,
        day: currentDay.toLowerCase()
      });
      setStaffData(data);
      setStaffLoading(false);
    };

    fetchData();
  }, [staffType, currentDay]);

  const handleDayChange = (newDay) => setCurrentDay(newDay);

  return (
    <div className="container mt-3">
      <div className="bg-light">
        <h2 className="text-center fw-bold">{staffType}</h2>
      </div>

      <DayNavigator
        currentDay={currentDay}
        handleDayChange={handleDayChange}
      />

      {staffLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : staffData ? (
        <StaffList staffData={staffData[currentDay.toLowerCase()]} />
      ) : (
        <p className="alert alert-danger">Error fetching staff data</p>
      )}

      <StaffNavigator
        staffTypes={staffTypes}
        currentType={staffType}
      />
    </div>
  );
}

export default StaffPage;
