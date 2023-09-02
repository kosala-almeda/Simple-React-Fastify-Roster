/*
 *
 * Testing pipedreams-react/src/pages/RosterPage.js
 */

import { fetchStaffData } from '../../src/services/StaffService';

describe('fetchStaffData', () => {
  beforeEach(() => {
    // Mock the global fetch function
    global.fetch = jest.fn();
  });

  afterEach(() => {
    // Clean up after each test
    jest.clearAllMocks();
  });

  it('fetches staff data successfully', async () => {
    // Mock a successful fetch response
    const mockData = { Monday: ['John', 'Jane'] };
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const staffType = 'Waiters';
    const result = await fetchStaffData(staffType);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_BASE_URL}/Get${staffType}`);

    expect(result).toEqual(mockData);
  });

  it('fetches staff data successfully with day', async () => {
    // Mock a successful fetch response
    const mockData = { Monday: ['John', 'Jane'] };
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });
  
    const staffType = 'Waiters';
    const day = 'Monday';
    const result = await fetchStaffData(staffType, day);
  
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_BASE_URL}/Get${staffType}?day=${day}`);
  
    expect(result).toEqual(mockData);
  });
  
  it('handles network errors', async () => {
    
    // Suppress console.error during the test
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Mock a failed fetch response
    global.fetch.mockRejectedValue(new Error('Network error'));

    const staffType = 'Waiters';
    const result = await fetchStaffData(staffType);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API_BASE_URL}/Get${staffType}`);

    expect(result).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalled();

    // Unsuppress console.error
    consoleErrorSpy.mockRestore();
  });
});
