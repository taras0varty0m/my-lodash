import { flattenDeep } from '../flattenDeep';

test('flattenDeep', () => {
  expect(flattenDeep([1, [2, [3, [4]], 5]])).toStrictEqual([1, 2, 3, 4, 5]);
});
