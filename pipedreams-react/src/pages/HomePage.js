/*
 * pipedreams-react/src/pages/HomePage.js
 * 
 */

import React from 'react';
import StaffNavigator from '../components/StaffNavigator';

/**
 * Homepage for root path
 */
function HomePage({staffTypes}) {

    // Title and staff type buttons
    return (
      <div className="container mt-3">
        <h2 className='text-center fw-bold'>the Staff Roster</h2>
        <p className='text-center mt-4'>Select the staff type and the day to see the roster</p>
        <StaffNavigator staffTypes={staffTypes} />
      </div>
    );
  }

export default HomePage;