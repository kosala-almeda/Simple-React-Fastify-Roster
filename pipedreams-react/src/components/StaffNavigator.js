// components/StaffNavigator.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function StaffTypeNavigation({ staffTypes, currentType }) {
  const history = useHistory();

  const handleTypeChange = (newType) => {
    history.push(`/${newType}`);
  };

  return (
    <div className="d-flex justify-content-center my-3">
      {staffTypes.map((type) => (
        <button
          key={type}
          className={`btn btn-${type === currentType ? 'primary' : 'secondary'} m-2`}
          onClick={() => handleTypeChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default StaffTypeNavigation;

