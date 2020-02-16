let states_need = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];
let stations = {
  kfour: ['nv', 'ut'],
  ktwo: ['wa', 'id', 'mt'],
  kthree: ['or', 'nv', 'ca'],
  kfive: ['ca', 'az'],
  kone: ['id', 'nv', 'ut'],
};
let final_stations = [];

while (states_need.length != 0) {
  let best = null;
  let states_covered = [];
  for (let station in stations) {
    let covered = stations[station].filter(item => states_need.indexOf(item) !== -1);
    if (covered.length > states_covered) {
      states_covered = covered;
      best = station;
    }
  }
  final_stations.push(best);
  states_need = states_need.filter(item => states_covered.indexOf(item) === -1);
}

console.log(final_stations);
