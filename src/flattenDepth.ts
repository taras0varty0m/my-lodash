const arr: any[] = [];
const flattenDepth = (array: any[], depth = 1) => {
  array.forEach((element: any) => {
    Array.isArray(element) && depth !== 0 ? flattenDepth(element, depth - 1) : arr.push(element);
  });
  return arr;
};
export { flattenDepth };
