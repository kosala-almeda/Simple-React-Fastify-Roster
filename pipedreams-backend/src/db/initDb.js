/*
 * pipedreams-backend/src/db/initDb.js
 * 
 * Initialize the database
 */

import { promises as fs } from 'fs';

/**
 * Load data into data base if given table is empty (or not present)
 * @param staffCollection db table to use
 */
export async function loadDataIfEmpty({ staffCollection }) {
    const count = await staffCollection.countDocuments();
    if (count === 0) {
        await loadData({ staffCollection });
    }
}
// load data from files and insert
async function loadData({ staffCollection }) {
    console.log('Loading data into database');

    const cooks = readJsonFile('./data/cooks.json');
    const waiters = readJsonFile('./data/waiters.json');

    await insertData({collection: staffCollection, type: 'cooks', data: cooks});
    await insertData({collection: staffCollection, type: 'waiters', data: waiters});
}

async function insertData({collection, type, data}) {
    await collection.insertOne({ type, data });
}

async function readJsonFile(filePath) {
    const fileData = await fs.readFile(filePath);
    return JSON.parse(fileData);
}
