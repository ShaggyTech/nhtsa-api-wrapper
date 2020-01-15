/** Run the scripts `yarn watch` or `yarn build:dev`
 * if the tests fail due to missing imports from the `./dev` folder.
 */
import UMD = require('../../dev/');
import CJS = require('../../dev/dist/cjs/');

describe('UMD bundle required from main folder', () => {
  test('it exists', () => {
    expect(UMD).toBeDefined();
  });

  test('greet function is callable and returns expected result', async () => {
    const result = await UMD.greet('Shaggy', 106);
    expect(result).toEqual('Hello Shaggy, you are 106 years old!');
  });

  test('isValidType function is callable and returns expected result', async () => {
    const result = await UMD.isValidType({
      type: 'string',
      value: 'is a string'
    });
    expect(result).toEqual(true);
  });
});

describe('CJS bundle import', () => {
  test('it exists', () => {
    expect(CJS).toBeDefined();
  });

  test('greet function is callable and returns expected result', async () => {
    const result = await CJS.greet('Shaggy', 106);
    expect(result).toEqual('Hello Shaggy, you are 106 years old!');
  });

  test('isValidType function is callable and returns expected result', async () => {
    const result = await CJS.isValidType({
      type: 'string',
      value: 'is a string'
    });
    expect(result).toEqual(true);
  });
});
