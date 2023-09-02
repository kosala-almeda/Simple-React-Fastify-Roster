import { loadDataIfEmpty } from '../../src/db/initDb.js';
import { promises as fs } from 'fs';

jest.mock('fs', () => ({
    promises: {
        readFile: jest.fn().mockResolvedValue('{}'),
    }
}));



describe('loadDataIfEmpty', () => {
    it('should not load data if count is not empty', async () => {
        const staffCollection = {
            countDocuments: jest.fn().mockResolvedValue(1), // Count is not empty
            insertOne: jest.fn()
        };

        await loadDataIfEmpty({ staffCollection });

        expect(staffCollection.insertOne).not.toBeCalled();
    });

    it('should load data if count is empty', async () => {
        const staffCollection = {
            countDocuments: jest.fn().mockResolvedValue(0), // Count is empty
            insertOne: jest.fn()
        };

        await loadDataIfEmpty({ staffCollection });

        expect(staffCollection.insertOne).toBeCalled();
    });
});