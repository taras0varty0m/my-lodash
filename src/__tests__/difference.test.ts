import { difference } from '../difference';

test('difference', () => {
  expect(difference([2, 1], [2, 3])).toStrictEqual([1]);
});
