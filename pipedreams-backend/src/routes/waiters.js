/*
 * pipedreams-backend/src/routes/waiters.js
 * 
 * Handlers for waiters endpoints
 */

import { getStaffByType } from '../db/staffRepository.js';

/**
 * Handler for GET /waiters
 * 
 * @param staffCollection db table
 */
export function getWaitersHandler({ staffCollection }) {
  return async (request, reply) => {
    const { query } = request;
    return await getStaffByType({
      staffCollection,
      type: 'waiters',
      // use day query parameter if exists
      day: query ? query.day : undefined
    });
  };
}
