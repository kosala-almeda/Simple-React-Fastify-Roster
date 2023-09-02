// src/routes/waiters.js

import { getStaffByType } from '../db/staffRepository.js';

export function getWaitersHandler({ staffCollection }) {
  return async (request, reply) => {
    const { query } = request;
    return await getStaffByType({
      staffCollection,
      type: 'waiters',
      day: query ? query.day : undefined
    });
  };
}
