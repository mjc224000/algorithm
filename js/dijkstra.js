let map = {}

function makeMap(k, v, val) {
    map[k] = map[k] || {};
    map[v] = map[v] || {};
    map[k][v] = val;

}


makeMap('a', 'b', 2)
makeMap('a', 'f', 9)
makeMap('a', 'd', 6)
makeMap('b', 'c', 30)
makeMap('b', 'd', 1)
makeMap('c', 'h', 5)
makeMap('d', 'e', 2);
makeMap('e', 'g', 7)
makeMap('f', 'e', 3)
makeMap('f', 'g', 24);
makeMap('g', 'h', 21);
console.log(map);
let set = {};
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(function (item) {
    set[item] = 999;
})
set['a'] = 0;

function dijkstra(vertex) {
    let traveled = [map[vertex]];
    for (let i = 0; i < traveled.length; i++) {
        let cur = traveled[i];
        for (let key in cur) {
            if (cur[key] + set[vertex] < set[key]) {
                set[key] = cur[key] + set[vertex]
            }
        }
        for (let key in set) {

        }
    }
}

dijkstra(map['a']);

