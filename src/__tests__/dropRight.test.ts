import { dropRight } from '../dropRight';

test('dropRight', () => {
  expect(dropRight([1, 2, 3])).toStrictEqual([1, 2]);
  expect(dropRight([1, 2, 3], 2)).toStrictEqual([1]);
  expect(dropRight([1, 2, 3], 5)).toStrictEqual([]);
  expect(dropRight([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
});
