function sum(arr) {
  return arr.length != 0 ? arr.pop() + sum(arr) : 0;
}

console.log(sum([1, 2, 4, 5]));
