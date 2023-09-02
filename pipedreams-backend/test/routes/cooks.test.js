// src/routes/__tests__/cooks.test.js

import { getCooksHandler } from '../../src/routes/cooks.js';
import { getStaffByType } from '../../src/db/staffRepository.js';

jest.mock('../../src/db/staffRepository');

describe('getCooksHandler', () => {
  it('should return cooks data', async () => {

    getStaffByType.mockResolvedValue(['cook1', 'cook2']);

    const request = {};
    const reply = {};
    const staffCollection = {};

    const result = await getCooksHandler({ staffCollection })(request, reply);

    expect(getStaffByType).toHaveBeenCalledWith({ staffCollection, type: 'cooks' });
    expect(result).toEqual(['cook1', 'cook2']);
  });

});
