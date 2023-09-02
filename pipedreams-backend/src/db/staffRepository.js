/*
 * pipedreams-backend/src/db/staffRepository.js
 * 
 * Access staff data in DB
 */

/**
 * Get staff object with list(s) of members
 * @param staffCollection db table to query
 * @param type staff type name
 * @param day day of week
 * @returns StaffData
 *  - list of staff members in an assosiative array of days
 *  - or null
 */
export async function getStaffByType({ staffCollection, type, day }) {
  // set projection to fetch only required data
  const projection = day ? { [`data.${day}`]: 1 } : { data: 1 };

  // there should only be one record
  const staffDocument = await staffCollection.findOne({ type }, { projection });

  // return only data without ids and keys
  return staffDocument ? staffDocument.data : null;
}
