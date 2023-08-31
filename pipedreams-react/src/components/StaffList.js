// components/StaffList.js
import React from 'react';

function StaffList({ staffData }) {
  
  if (!staffData) {
    return <p>No staff today</p>;
  }

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <ul className="list-group">
            {staffData.map((staffMember) => (
              <li className="list-group-item">
                {staffMember}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffList;
