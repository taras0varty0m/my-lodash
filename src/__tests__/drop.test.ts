import { drop } from '../drop';

test('drop', () => {
  expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
  expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
  expect(drop([1, 2, 3], 5)).toStrictEqual([]);
  expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
});
