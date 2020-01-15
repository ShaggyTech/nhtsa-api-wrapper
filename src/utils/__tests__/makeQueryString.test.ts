import { makeQueryString } from '../makeQueryString';

describe('makeQueryString() - API Utils Method', () => {
  test('it is defined', () => {
    expect(makeQueryString).toBeDefined();
  });

  /**************
   * Successes
   **************/
  describe('Returns correct string with: ', () => {
    test('one param', async () => {
      const qs = await makeQueryString({
        format: 'xml'
      }).catch(err => err);
      expect(qs).toStrictEqual('?format=xml');
    });

    test('two params', async () => {
      const qs = await makeQueryString({
        empty: '',
        format: 'xml',
        modelYear: '2019'
      }).catch(err => err);
      expect(qs).toStrictEqual('?format=xml&modelYear=2019');
    });

    test('more than two params', async () => {
      const qs = await makeQueryString({
        format: 'xml',
        modelYear: 2019,
        empty: '',
        page: 1
      }).catch(err => err);
      expect(qs).toStrictEqual('?format=xml&modelYear=2019&page=1');
    });

    test('param values equal to empty strings #1', async () => {
      const qs = await makeQueryString({
        empty: '',
        format: 'csv'
      }).catch(err => err);
      expect(qs).toStrictEqual('?format=csv');
    });

    test('param values equal to empty strings #2', async () => {
      const qs = await makeQueryString({
        format: 'csv',
        empty: ''
      }).catch(err => err);
      expect(qs).toStrictEqual('?format=csv&');
    });

    test('a param value containing spaces', async () => {
      const qs = await makeQueryString({
        format: 'csv',
        empty: '',
        make: 'VW Audi'
      }).catch(err => err);
      expect(qs).toStrictEqual('?format=csv&make=VW%20Audi');
    });
  });

  describe('Returns empty string when: ', () => {
    test('params arg is an empty object', async () => {
      const qs = await makeQueryString({}).catch(err => err);
      expect(qs).toStrictEqual('');
    });

    test('params arg is undefined', async () => {
      const qs = await makeQueryString(undefined as any).catch(err => err);
      expect(qs).toStrictEqual('');
    });

    test('only one param is provided containing an empty string value', async () => {
      const qs = await makeQueryString({ nothingHere: '' }).catch(err => err);
      expect(qs).toStrictEqual('');
    });

    test('param value is in an invalid nested object format', async () => {
      const params = { outer: { inner: true } };
      const qs = await makeQueryString(params as any).catch(err => err);
      expect(qs).toStrictEqual('');
    });
  });

  /**************
   * Failures
   **************/
  describe('Fails when ', () => {
    test('sanity check, should not fail', async () => {
      const qs = await makeQueryString({ testParam: 'testing' }).catch(err => {
        expect(err).toEqual('should never be reached');
      });
      expect(qs).toBeDefined();
    });

    test('arg is array', async () => {
      const qs = await makeQueryString(['test', 'invalid'] as any).catch(
        err => {
          expect(err).toEqual(expect.any(Error));
        }
      );
      expect(qs).toBeUndefined();
    });

    test('arg is a string', async () => {
      const qs = await makeQueryString('test' as any).catch(err => {
        expect(err).toEqual(expect.any(Error));
      });
      expect(qs).toBeUndefined();
    });
  });
});