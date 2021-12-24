const differenceBy = (array: any[], ...values: any) => {
  const iteratee = values.at(-1);
  const arr = [];
  if (typeof iteratee === 'function') {
    for (const key of array)
      for (const k of values)
        if (Array.isArray(k)) if (!k.map((el: any) => iteratee(el)).includes(iteratee(key))) arr.push(key);
  } else {
    for (const key of array)
      for (const k of values)
        if (Array.isArray(k))
          for (const el of k)
            if (el[iteratee] === key[iteratee]) break;
            else arr.push(key);
  }
  return arr;
};
export { differenceBy };
