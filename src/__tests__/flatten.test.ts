import { flatten } from '../flatten';

test('flatten', () => {
  expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual([1, 2, [3, [4]], 5]);
});
