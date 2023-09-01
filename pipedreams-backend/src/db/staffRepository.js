// src/db/staffRepository.js

export async function getStaffByType({staffCollection, type}) {
    const staffDocument = await staffCollection.findOne({ type });
    return staffDocument ? staffDocument.data : null;
}