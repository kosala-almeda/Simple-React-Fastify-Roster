// src/db/db.js

import { MongoClient } from 'mongodb';

let dbInstance = null;

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

export async function getCollection({ collectionName }) {
    const db = await createDBConnection();
    const collection = db.collection(collectionName);
    return collection;
}
