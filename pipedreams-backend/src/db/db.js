/*
 * pipedreams-backend/src/db/db.js
 * 
 * Initialize the database
 */

import { MongoClient } from 'mongodb';

let dbInstance = null;

/**
 * Chached (singleton) db connection getter
 * @returns mongodb connection
 */
async function createDBConnection() {
    if (!dbInstance) {
        const client = new MongoClient(process.env.DB_URL,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        await client.connect();
        dbInstance = client.db();
    }

    return dbInstance;
}

/**
 * Get a collection from database
 */
export async function getCollection({ collectionName }) {
    const db = await createDBConnection();
    const collection = db.collection(collectionName);
    return collection;
}
