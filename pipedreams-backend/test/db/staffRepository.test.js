// src/routes/__tests__/cooks.test.js

import { getStaffByType } from '../../src/db/staffRepository.js';

describe('getStaffByType', () => {
  it('should return staff data', async () => {

    const type = 'type1';

    const staffCollection = {
      findOne: jest.fn().mockResolvedValue({ type, data: ['staff1', 'staff2'] }),
    };

    const request = {};
    const reply = {};

    const result = await getStaffByType({staffCollection, type});

    expect(staffCollection.findOne).toHaveBeenCalledWith({ type });
    expect(result).toEqual(['staff1', 'staff2']);
  });

  it('should handle missing document', async () => {
    const staffCollection = {
      findOne: jest.fn().mockResolvedValue(null), // No cooks document found
    };
    const request = {};
    const reply = {};

    const result = await getStaffByType({staffCollection, type: 'type2'});

    expect(result).toBeNull();
  });
});
