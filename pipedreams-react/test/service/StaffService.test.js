// /test/services/StaffService.test.js
import { fetchStaffData } from '../../src/services/StaffService';

describe('fetchStaffData', () => {
  // Mock the global fetch function
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  // Clean up after each test
  afterEach(() => {
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

    // Check that the function returns the expected data
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

    // Check that the function returns null in case of an error
    expect(result).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});
