// components/StaffList.js
import React from 'react';

function StaffList({ staffData }) {
  if (!staffData || staffData.length === 0) {
    return (
      <div className="alert alert-secondary" role="alert">
        No staff
      </div>
    );
  }

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
