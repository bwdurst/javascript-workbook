const expoRec = (base, expo) => {
  let result = base;
  let count = expo;
  while (count > 1) {
    result = result * base;
    count--
    expoRec(base, count);
  }
  return result;
}

expoRec(8, 2);