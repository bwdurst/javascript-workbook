var array1 = [1, 2, 3, 4, 5, 6];

const sumRec = (arr, i = 0) => {
  let len = arr.length;
  let sum = 0;
  let el = i;
  while ( el < len ) {
    sum += arr[el];
    el++
    sumRec(arr, el)
  }
  return sum;
}

sumRec(array1);