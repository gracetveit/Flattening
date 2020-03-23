'use strict'

let arrays = [[1, 2, 3], [4, 5], [6]];

const reduce = function (array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce(arrays, (a, b) => a.concat(b), []))

// > [1, 2, 3, 4, 5, 6]