const bst = require('./bst.js');
const util = require('util');


const newTree = new bst();

newTree.insert(3, 3);
newTree.insert(1, 1);
newTree.insert(4, 4);
newTree.insert(6, 6);
newTree.insert(5, 5);
newTree.insert(10, 10);
newTree.insert(0, 0);
newTree.insert(7, 7);
newTree.insert(2, 2);



console.log(util.inspect(newTree, { showHidden: true, depth: null }));
