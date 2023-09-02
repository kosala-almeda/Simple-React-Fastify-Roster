/*
 * pipedreams-react/src/components/StaffList.js
 * 
 */

import React from 'react';

/**
 * Staff list display component
 * @param staffData array of staff names
 */
function StaffList({ staffData }) {

  // if staff data is not present dispaly message
  if (!staffData || staffData.length === 0) {
    return (
      <div className="alert alert-secondary" role="alert">
        No staff
      </div>
    );
  }

  // component content
  // - formatted list of passed staff names
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <ul className="list-group">
            {staffData.map((staffMemberName) => (
              <li className="list-group-item" key={staffMemberName}>
                {staffMemberName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffList;
