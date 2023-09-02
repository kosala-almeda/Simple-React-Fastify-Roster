/*
 * pipedreams-react/src/components/StaffNavigator.js
 * 
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Staff types navigation component
 * @param staffTypes list of staff types
 * @param [currentType] type to be selected
 */
function StaffTypeNavigation({ staffTypes, currentType }) {

  // using history to update window location
  const history = useHistory();
  const handleTypeChange = (newType) => {
    history.push(`/${newType}`);
  };

  // component content
  // - horizontal set of buttons
  return (
    <div className="d-flex justify-content-center my-3">
      {staffTypes.map((type) => (
        // a button for each staff type
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

