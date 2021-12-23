const difference = (array: any[], ...values: any[]) => {
  const arr = [];
  for (const key of array) for (const k of values) if (!k.includes(key)) arr.push(key);
  return arr;
};
export { difference };
