import request from 'supertest';

// Mock the dependencies
jest.mock('../src/db/db.js', () => ({
  getCollection: jest.fn(),
}));

jest.mock('../src/db/initDb.js', () => ({
  loadDataIfEmpty: jest.fn(),
}));

jest.mock('../src/routes/cooks.js', () => ({
  getCooksHandler: jest.fn().mockReturnValue((rq, rp)=>{
    console.log('serving cooks');
  }),
}));

jest.mock('../src/routes/waiters.js', () => ({
  getWaitersHandler: jest.fn().mockReturnValue(()=>{
    console.log('serving waiters');
  }),
}));

// Import the module for testing // This will execute the code in index.js without exporting anything

// Your actual test cases
describe('Server Integration Tests', () => {

  // moved here to prevent running during other tests
  let server;
  let address;

  beforeAll(async () => {
    server = require('../src/index.js');
    address = await server.address;
  });

  afterAll(async () => {
    await server.app.close();
  });

  it('should spinup a local server', ()=>{
    expect(address).toMatch(/(localhost|127\\.0\\.0\\.1|::1)/);
  })

  // TODO: Add more tests
});
