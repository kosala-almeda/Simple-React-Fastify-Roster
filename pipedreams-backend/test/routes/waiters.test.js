/*
 * Testing pipedreams-backend/src/routes/waiters.js
 */

import { getWaitersHandler } from '../../src/routes/waiters.js';
import { getStaffByType } from '../../src/db/staffRepository.js';

jest.mock('../../src/db/staffRepository.js');

describe('getWaitersHandler', () => {
  it('should return waiters data', async () => {
    
    getStaffByType.mockResolvedValue(['waiter1', 'waiter2']);

    const request = {};
    const reply = {};
    const staffCollection = {};

    const result = await getWaitersHandler ({ staffCollection })(request, reply);

    expect(getStaffByType).toHaveBeenCalledWith({ staffCollection, type: 'waiters' });
    expect(result).toEqual(['waiter1', 'waiter2']);
  });

});
