/*
 * pipedreams-react/src/pages/RosterPage.js
 * 
 */

import React, { useState, useEffect, useContext } from 'react';

import { DayContext } from '../App';
import StaffList from '../components/StaffList';
import DayNavigator from '../components/DayNavigator';
import StaffNavigator from '../components/StaffNavigator';
import { fetchStaffData } from '../services/StaffService';

/**
 * Page for each staff type and list
 */
function StaffPage({ staffType, staffTypes }) {

  // week of day contex (app wide)
  const { currentDay, setCurrentDay } = useContext(DayContext);

  // states
  const [staffData, setStaffData] = useState(null);
  const [staffLoading, setStaffLoading] = useState(true);

  // effect
  // load staff list on staff type or day change
  useEffect(() => {
    const fetchData = async () => {
      // show loading spinner
      setStaffLoading(true);

      const data = await fetchStaffData({
        staffType,
        day: currentDay.toLowerCase()
      });
      setStaffData(data);

      // show loading spinner
      setStaffLoading(false);
    };

    fetchData();
  }, [staffType, currentDay]);

  const handleDayChange = (newDay) => setCurrentDay(newDay);

  // page content
  // - title
  // - day navigation
  // - staff list (or state)
  // - staff types buttons
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
        // show loading animation
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : staffData ? (
        // show staff list if data is available for the day
        <StaffList staffData={staffData[currentDay.toLowerCase()]} />
      ) : (
        // show alert if an error occured while loading
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
