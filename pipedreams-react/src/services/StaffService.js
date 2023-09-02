/*
 * pipedreams-react/src/services/StaffService.js
 * 
 */

// Use base url from environment variable (or .env file)
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Get staff list(s) from API
 * @param staffType type of staff members
 * @param [day] day of week
 * @returns StaffData
 *  - list of staff members in an assosiative array of days
 *  - null if there is an error
 */
export async function fetchStaffData({staffType, day}) {
  try {
    // use fetch to access the api for each staff type
    const url = `${API_BASE_URL}/Get${staffType}${day ? `?day=${day}` : ''}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok. (${response.statusText})`);
    }
    // return data as json
    const data = await response.json();
    return data;
  } catch (error) {
    // log error and return null
    console.error('Error fetching staff data:', error);
    return null;
  }
}
