const bst = require('./bst.js');
const util = require('util');

const newTree = new bst();

newTree.insert(10, 10);
newTree.insert(3, 3);
newTree.insert(2, 2);
newTree.insert(4, 4);
newTree.insert(6, 6);
newTree.insert(1, 1);
// newTree.insert(5, 5);
// newTree.insert(10, 10);
// newTree.insert(0, 0);
// newTree.insert(7, 7);
// newTree.insert(2, 2);
// newTree.insert(27, 27);
// newTree.insert(26,26);
// newTree.insert(24, 24);
// newTree.insert(23, 23);


const findHeight = (tree) => {
  if (tree.right === null && tree.left === null) {
    return 1;
  }
  let leftHeight = null;
  let rightHeight = null;
  if (tree.left) {
    leftHeight = findHeight(tree.left);
  }
  if (tree.right) {
    rightHeight = findHeight(tree.right);
  }
  if (leftHeight >= rightHeight) {
    return leftHeight + 1;
  } else {
    return rightHeight +1;
  }
  // leftHeight > rightHeight ? leftHeight + 1: rightHeight + 1;
};

console.log(newTree);
console.log(findHeight(newTree));


// does root.left AND root.right exist?
// if only right exists keep going to the right until null while keeping track of levels
// ^ same for left side

// initial call is made
// pass by base case
// 