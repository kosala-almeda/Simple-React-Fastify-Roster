
require('dotenv').config();

const fastify = require('fastify');

const app = fastify({ logger: true }); // using default pino logger

const startServer = async () => {
    try {

        app.get('/GetCooks', () => require('../data/cooks.json'));
        app.get('/GetWaiters', () => require('../data/waiters.json'));

        const address = await app.listen({
            port: process.env.SERVER_PORT || 3000
        });
        console.log(`Server is listening at ${address}`);
    } catch (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
};

startServer();
