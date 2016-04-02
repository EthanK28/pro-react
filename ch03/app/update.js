var update = require('react-addons-update');

// myData = {
//     x: {
//         y: {
//             z: 2
//         }
//     },
//     a: [
//
//     ]
// };
// var newData = update(myData, {
//   x: {y: {z: {$set: 7}}},
//   a: {b: {$push: [9]}}
// });

var initialArray = [1, 2, 3];
var newArray = update(initialArray, {$push: [4, 5]}); // => [1, 2, 3, 4]

var newArray2 = update(initialArray, {$unshift: [4,5]}); // => [1, 2, 3, 4]
console.log(newArray2);


var collection = [1, 2, {a: [12, 17, 15]}, {}];
console.log(collection);
var newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
// var newCollection = update(collection, {3: {$splice: [[1, 1, 13, 14]]}});


// console.log(newArray);
// console.log(newCollection);

var obj = {a: 5, b: 3};
var newObj = update(obj, {b: {$apply: function(x) {return x * 2;}}});
// => {a: 5, b: 6}
// This is equivalent, but gets verbose for deeply nested collections:
var newObj2 = update(obj, {b: {$set: obj.b * 2}});

// Merge
var obj = {a: 5, b: 3};
var newObj = update(obj, {$merge: {b: 6, c: 7}}); // => {a: 5, b: 6, c: 7}
