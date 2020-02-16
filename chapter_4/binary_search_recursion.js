function binary_search(arr, item) {
  let high = arr.length - 1;
  let mid = Math.floor(high / 2);
  let guess = arr[mid];
  if (guess == item) {
    return mid;
  } else if (arr.length != 1) {
    arr = arr.slice(0);
    return guess > item ? binary_search(arr.splice(0, mid), item) :
        binary_search(arr.splice(mid, high), item);
  } else {
    return null;
  }
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 6));
