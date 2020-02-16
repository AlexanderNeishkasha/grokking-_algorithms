const graph = {
  book: {
    cd: 5,
    poster: 0,
  },
  cd: {
    poster: 1,
  },
  poster: {
    drums: 35,
  },
  drums: {},
};

let costs = {
  cd: 5,
  poster: 0,
  drums: Infinity,
};

let parents = {
  cd: 'book',
  poster: 'book',
  drums: null,
};

let processed = [];

function find_lowest_cost_node(costs) {
  let lowest_cost = Infinity;
  let lowest_cost_node = null;
  for (let node in costs) {
    let cost = costs[node];
    if (cost < lowest_cost && processed.indexOf(node) == -1) {
      lowest_cost = cost;
      lowest_cost_node = node;
    }
  }
  return lowest_cost_node;
}

let node;
do {
  node = find_lowest_cost_node(costs);
  let cost = costs[node];
  let neighbors = graph[node];
  for (let n in neighbors) {
    let new_cost = cost + neighbors[n];
    if (costs[n] > new_cost) {
      costs[n] = new_cost;
      parents[n] = node;
    }
  }
  processed.push(node);
  node = find_lowest_cost_node(costs);
} while (node != null);

console.log(costs);
