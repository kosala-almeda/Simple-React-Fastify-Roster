// src/db/init.js

import { promises as fs } from 'fs';

export async function loadDataIfEmpty({ staffCollection }) {
    const count = await staffCollection.countDocuments();
    if (count === 0) {
        await loadData({ staffCollection });
    }
}

async function loadData({ staffCollection }) {
    const cooks = readJsonFile('../../data/cooks.json');
    const waiters = readJsonFile('../../data/waiters.json');

    await insertData(staffCollection, 'cooks', cooks);
    await insertData(staffCollection, 'waiters', waiters);
}

async function insertData(collection, type, data) {
    await collection.insertOne({ type, data });
}

async function readJsonFile(filePath) {
    const fileData = await fs.readFile(filePath);
    return JSON.parse(fileData);
}
