function max(arr) {
  if (arr.length != 1) {
    let val = arr.pop();
    let other = max(arr);
    return val > other ? val : other;
  } else {
    return arr.pop();
  }
}

console.log(max([11, 2, 5, 10, 3]));
