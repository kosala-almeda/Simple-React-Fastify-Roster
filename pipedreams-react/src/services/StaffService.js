// StaffService.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchStaffData(staffType) {
  try {
    const response = await fetch(`${API_BASE_URL}/Get${staffType}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching staff data:', error);
    return null;
  }
}