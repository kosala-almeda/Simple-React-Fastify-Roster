// StaffService.js
const API_BASE_URL = '.'; // Replace with an API URL

export async function fetchStaffData(staffType) {
  try {
    const response = await fetch(`${API_BASE_URL}/Get${staffType}.json`);
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