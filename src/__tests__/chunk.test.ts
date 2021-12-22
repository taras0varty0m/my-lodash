import { chunk } from '../chunk';

test('chunk', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 1)).toStrictEqual([['a'], ['b'], ['c'], ['d']]);
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([
    ['a', 'b'],
    ['c', 'd'],
  ]);
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
});
