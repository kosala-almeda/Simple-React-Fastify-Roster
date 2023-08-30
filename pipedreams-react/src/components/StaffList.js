// StaffList.js
import React from 'react';

function StaffList({ staffData }) {
  if (!staffData) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {staffData.map((staffMember) => (
        <li key={staffMember.id}>{staffMember.name}</li>
      ))}
    </ul>
  );
}

export default StaffList;
