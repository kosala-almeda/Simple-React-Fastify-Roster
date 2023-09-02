// HomePage.js

import React from 'react';
import StaffNavigator from '../components/StaffNavigator';


function HomePage({staffTypes}) {
    return (
      <div className="container mt-3">
        <h2 className='text-center fw-bold'>the Staff Roster</h2>
        <p className='text-center mt-4'>Select the staff type and the day to see the roster</p>
        <StaffNavigator staffTypes={staffTypes} />
      </div>
    );
  }

export default HomePage;