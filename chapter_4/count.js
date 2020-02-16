function count(arr) {
  if (arr.length != 0) {
    arr.pop();
    return 1 + count(arr);
  } else {
    return 0;
  }
}

console.log(count([1, 2, 3, 4]));
