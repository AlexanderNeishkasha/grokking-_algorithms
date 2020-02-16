const items = {
  guitar: {
    size: 1,
    price: 1500,
  },
  bumbox: {
    size: 4,
    price: 3000,
  },
  laptop: {
    size: 3,
    price: 2000,
  },
  iphone: {
    size: 1,
    price: 2000,
  },
};

const bagSize = 4;

function getMaxSize(items, bagSize) {
  let result = [];
  let itemsCount = Object.keys(items).length;

  for (let i = 0; i < itemsCount; i++) {
    result[i] = [];
    for (let j = 0; j < bagSize; j++) {
      result[i][j] = {size: j + 1, price: 0, items: []};
    }
  }

  let i = 0;
  for (let key in items) {
    for (let j = 0; j < bagSize; j++) {
      let itemsInCell = [key];
      let price = items[key].price;
      let freeSpace = result[i][j].size - items[key].size;
      if (freeSpace > 0 && j > 0) {
        price += result[j - 1][freeSpace - 1].price;
        itemsInCell = itemsInCell.concat(result[j - 1][freeSpace - 1].items);
      }
      if (price > result[i][j].price && freeSpace >= 0) {
        result[i][j].price = price;
        result[i][j].items = itemsInCell;
      }
    }
    i++;
  }
  return result[itemsCount - 1][bagSize - 1];
}

console.log(getMaxSize(items, bagSize));
