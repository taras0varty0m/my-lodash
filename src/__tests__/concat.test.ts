import { concat } from '../concat';

test('concat', () => {
  console.log(concat([1], 2, [3], [[4]]));
  expect(concat([1], 2, [3], [[4]])).toStrictEqual([1, 2, 3, [4]]);
});
