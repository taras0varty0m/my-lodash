import { concat } from '../concat';

test('concat', () => {
  expect(concat([1], 2, [3], [[4]])).toStrictEqual([1, 2, 3, [4]]);
});
