const flattenDeep = (array: any) => {
  const arr: any[] = [];
  array.forEach((element: any) => {
    Array.isArray(element)
      ? element.forEach((el) => {
          arr.push(el);
        })
      : arr.push(element);
  });
  return arr;
};
export { flattenDeep };
