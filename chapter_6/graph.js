let graph = {};
graph['you'] = ['alice', 'ЬоЬ', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

function check(name) {
  return name == 'peggy_';
}

function searchSeller(graph) {
  let queue = [];
  queue.push(...graph['you']);
  let searched = [];
  while (queue.length != 0) {
    let person = queue.shift();
    if (searched.indexOf(person) == -1) {
      if (check(person)) {
        return person;
      }
      if (graph[person]) {
        searched.push(person);
        queue.push(...graph[person]);
      }
    }
  }
  return false;
}

console.log(searchSeller(graph));
