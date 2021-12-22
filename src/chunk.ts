const chunk = (array: any[], size = 1): any[] => {
  const arr: any[] = [];
  let temp: any[] = [];
  let counter = 0;
  for (const i of array) {
    if (counter < size) {
      temp.push(i);
      counter++;
    } else {
      arr.push(temp);
      temp = [];
      temp.push(i);
      counter = 1;
    }
  }
  if (!!temp) arr.push(temp);
  return arr;
};
export { chunk };
