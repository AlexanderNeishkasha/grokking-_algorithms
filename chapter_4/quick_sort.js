function quick_sort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr.splice(Math.floor((arr.length - 1) / 2), 1)[0];
    let lesser = [];
    let bigger = [];
    let item;
    while (item = arr.pop()) {
      if (item > pivot) bigger.push(item);
      else lesser.push(item);
    }
    return quick_sort(lesser).concat([pivot], quick_sort(bigger));
  }
}

console.log(quick_sort([4, 3, 5, 1, 9, 50, 23, 4, 12, 3, 3]));
