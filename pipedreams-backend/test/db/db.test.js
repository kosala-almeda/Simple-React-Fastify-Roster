/*
 * Testing pipedreams-backend/src/db/db.js
 */

import { getCollection } from '../../src/db/db.js';
import { MongoClient } from 'mongodb';

jest.mock('mongodb');

const connect = jest.fn();
MongoClient.mockReturnValue({
    connect,
    db: jest.fn().mockReturnValue({
        collection: jest.fn().mockReturnValue({})
    })
});

describe('getCollection', () => {
  it('should return a collection', async () => {
    const db = {
      collection: jest.fn().mockReturnValue({}),
    };

    const collectionName = 'staff';
    const collection = await getCollection({ collectionName, db });

    expect(collection).toBeDefined();
    expect(connect).toBeCalled();
  });
  
  it('should not open another connection', async () => {

    const db = {
      collection: jest.fn().mockReturnValue({}),
    };

    const collection1 = await getCollection({ collectionName: 'abc', db });
    const collection2 = await getCollection({ collectionName: 'def', db });

    expect(collection1).toBeDefined();
    expect(collection2).toBeDefined();
    expect(connect).toBeCalledTimes(1);
  });

});

