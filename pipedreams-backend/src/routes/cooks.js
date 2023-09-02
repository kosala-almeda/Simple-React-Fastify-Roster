/*
 * pipedreams-backend/src/routes/cooks.js
 * 
 * Handlers for cooks endpoints
 */

import { getStaffByType } from '../db/staffRepository.js';

/**
 * Handler for GET /cooks
 * 
 * @param staffCollection mongo db table
 */
export function getCooksHandler({ staffCollection }) {
  return async (request, reply) => {
    const { query } = request;
    return await getStaffByType({
      staffCollection,
      type: 'cooks',
      // use day query parameter if exists
      day: query ? query.day : undefined
    });
  };
}
