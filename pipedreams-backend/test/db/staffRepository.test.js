/*
 * Testing pipedreams-backend/src/db/staffRepository.js
 */

import { getStaffByType } from '../../src/db/staffRepository.js';

describe('getStaffByType', () => {

  it('should return staff data', async () => {

    const type = 'cooks';

    const staffCollection = {
      findOne: jest.fn().mockResolvedValue({ type, data: { Monday: ['John', 'Jane'] } }),
    };

    const request = {};
    const reply = {};

    const result = await getStaffByType({ staffCollection, type });

    expect(staffCollection.findOne).toHaveBeenCalledWith({ type }, { projection: { data: 1 } });
    expect(result).toEqual({ Monday: ['John', 'Jane'] });
  });

  it('should return staff data for a specific day', async () => {
    const type = 'cooks';
    const day = 'Monday';

    const staffCollection = {
      findOne: jest.fn().mockResolvedValue({ type, data: { [day]: ['John', 'Jane'] } }),
    };

    const result = await getStaffByType({ staffCollection, type, day });

    expect(staffCollection.findOne).toHaveBeenCalledWith({ type }, { projection: { [`data.${day}`]: 1 } });
    expect(result).toEqual({ [day]: ['John', 'Jane'] });
  });

  it('should handle missing document', async () => {
    const staffCollection = {
      findOne: jest.fn().mockResolvedValue(null), // No cooks document found
    };
    const request = {};
    const reply = {};

    const result = await getStaffByType({ staffCollection, type: 'cooks' });

    expect(result).toBeNull();
  });
});
