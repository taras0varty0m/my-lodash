import { flattenDepth } from '../flattenDepth';

test('flattenDepth', () => {
  expect(flattenDepth([1, [2, [3, [4]], 5]], 2)).toStrictEqual([1, 2, 3, [4], 5]);
});
