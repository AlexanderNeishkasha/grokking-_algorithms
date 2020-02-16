function findMin(arr) {
  let min = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
      console.log(min);
    }
  }
  return index;
}

function selectionSort(arr) {
  let result = [];
  while (arr.length > 0) {
    let min = findMin(arr);
    result.push(arr.splice(min, 1)[0]);
  }
  return result;
}

console.log(selectionSort([5, 4, 6, 2, 10]));
