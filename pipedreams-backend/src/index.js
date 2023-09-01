
import dotenv from 'dotenv';
dotenv.config();
import fastify from 'fastify';

import { getCollection } from './db/db.js';
import { loadDataIfEmpty } from './db/init.js';
import { getCooksHandler } from './routes/cooks.js';
// src/index.js

import { getWaitersHandler } from './routes/waiters.js';

const createApp = () => {
    const app = fastify({ logger: true });
    app.addHook('onSend', (request, reply, payload, next) => {
        reply.header('Access-Control-Allow-Origin', '*');
        next();
    });
    return app;
};

const startServer = async (app) => {
    try {

        const staffCollection = await getCollection({ collectionName: 'staff' });
        await loadDataIfEmpty({ staffCollection });

        app.get('/GetCooks', getCooksHandler({ staffCollection }));
        app.get('/GetWaiters', getWaitersHandler({ staffCollection }));

        const address = await app.listen({
            port: process.env.SERVER_PORT || 3000
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

const app = createApp();
startServer(app);
