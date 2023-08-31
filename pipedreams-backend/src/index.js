
require('dotenv').config();

const fastify = require('fastify');
const { MongoClient } = require('mongodb');

const cooksData = require('../data/cooks.json');
const waitersData = require('../data/waiters.json');

const app = fastify({ logger: true }); // using default pino logger
app.addHook('onSend', (request, reply, payload, next) => {
    reply.header('Access-Control-Allow-Origin', '*');
    next();
});

const startServer = async () => {
    try {

        const client = new MongoClient(process.env.DB_URL);
        await client.connect();
        const db = client.db();

        const staffCollection = db.collection('staff');
        // Drop the "staff" collection to clean the database
        await staffCollection.drop();
        console.log('Dropped "staff" collection');

        // Load data into the database
        await staffCollection.insertOne({ type: 'cooks', data: cooksData })
        await staffCollection.insertOne({ type: 'waiters', data: waitersData });

        app.decorate('mongo', db);


        app.get('/GetCooks', async () => (await staffCollection.findOne({ type: 'cooks' })).data);
        app.get('/GetWaiters', async () => (await staffCollection.findOne({ type: 'waiters' })).data);

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
