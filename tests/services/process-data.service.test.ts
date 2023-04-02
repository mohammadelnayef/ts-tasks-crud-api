import processData from '../../src/services/process-data.service';

describe('processData', () => {
    it('returns a string with the name of the first item in the data array', () => {
        const data = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
        const expected = 'Hi i am Alice and i got fetched from an api.';
        const result = processData(data);
        expect(result).toEqual(expected);
    });
});