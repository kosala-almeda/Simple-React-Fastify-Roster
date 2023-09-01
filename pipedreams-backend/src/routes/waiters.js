// src/routes/waiters.js

import { getStaffByType } from '../db/staffRepository.js';

export function getWaitersHandler({ staffCollection }) {
  return async (request, reply) => {
    return await getStaffByType({staffCollection, type: 'waiters'});
  };
}
