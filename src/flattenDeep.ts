const arr: any[] = [];
const flattenDeep = (array: any[]) => {
  array.forEach((element: any) => {
    Array.isArray(element) ? flattenDeep(element) : arr.push(element);
  });
  return arr;
};
export { flattenDeep };
