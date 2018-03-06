const bst = require('./bst.js');

const newTree = new bst();

newTree.insert(3, 3);
newTree.insert(1, 1);
newTree.insert(4, 4);
newTree.insert(6, 6);
newTree.insert(5, 5);

console.log(newTree);
