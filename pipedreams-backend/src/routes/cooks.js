// src/routes/cooks.js

import { getStaffByType } from '../db/staffRepository.js';

export function getCooksHandler({ staffCollection }) {
  return async (request, reply) => {
    const { query } = request;
    return await getStaffByType({
      staffCollection,
      type: 'cooks',
      day: query ? query.day : undefined
    });
  };
}
