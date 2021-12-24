import { differenceBy } from '../differenceBy';

test('differenceBy', () => {
  expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toStrictEqual([1.2]);
  expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')).toStrictEqual([{ x: 2 }]);
});
