// src/db/staffRepository.js

export async function getStaffByType({ staffCollection, type, day }) {
    const projection = day ? { [`data.${day}`]: 1 } : { data: 1 };
    const staffDocument = await staffCollection.findOne({ type }, {projection});
    return staffDocument ? staffDocument.data : null;
  }
  