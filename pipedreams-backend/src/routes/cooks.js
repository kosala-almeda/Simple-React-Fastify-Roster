// src/routes/cooks.js

import { getStaffByType } from '../db/staffRepository.js';

export function getCooksHandler({ staffCollection }) {
  return async (request, reply) => {
    return await getStaffByType({staffCollection, type: 'cooks'});
  };
}
