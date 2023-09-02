/*
 * pipedreams-backend/src/index.js
 * 
 * Staff API entry point
 */

import dotenv from 'dotenv';
dotenv.config(); // set environment vars
import fastify from 'fastify';

import { getCollection } from './db/db.js';
import { loadDataIfEmpty } from './db/initDb.js';
import { getCooksHandler } from './routes/cooks.js';
import { getWaitersHandler } from './routes/waiters.js';

// create fastify server
const createApp = () => {
    const app = fastify({ logger: true });
    return app;
};

// configure and start fastify server
const startServer = async (app) => {
    try {

        const staffCollection = await getCollection({
            collectionName: process.env.DB_COLLECTION
        });
        await loadDataIfEmpty({ staffCollection });

        app.get('/GetCooks', getCooksHandler({ staffCollection }));
        app.get('/GetWaiters', getWaitersHandler({ staffCollection }));

        return await app.listen({
            port: process.env.SERVER_PORT || 3000
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const app = createApp();
const address = startServer(app);

// export for testing
export { app, address };