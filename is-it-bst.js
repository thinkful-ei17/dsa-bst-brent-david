const bst = require('./bst.js');
const util = require('util');
// start at root
// while (root.left !== null)
// if root.left < root, go on to root.left
// if root.right > root, go on to root.right


// if(root.left && root.right) 
// if(root.left > root || root.right < root)
// declare root value to compare to values on left and right

// ONLY SOMETING ON LEFT
// ONLY SOMETHING ON RIGHT
// LEFT < ROOT < RIGHT
// move the comparision to top 
// instead of putting the array every recursive call, just input our newMax and newMin
const isItBst = (tree, leftArr = [], rightArr=[]) => {
  // NOTHING ON LEFT OR RIGHT OF ROOT
  if (tree.left === null && tree.right === null) {
    return true;
  } else {     
    if (tree.right) {
      console.log('traverse right');
      //comparison stuff here
      // if tree.key > Math.max(leftArr)
      if (tree.key > Math.max(leftArr)) {
        console.log('one');
        return false;
      }
      
      if (tree.key < Math.min(rightArr)) {
        console.log('two');
        return false;
      }
      
      console.log('three');
      return isItBst(tree.right, leftArr, [...rightArr, tree.key]);
      //eihter return false or pass through
      // console.log('only traverse right side ran');
      // if (isItBst(tree.left,[...leftArr, tree.key], rightArr) && isItBst(tree.right, leftArr, [...rightArr, tree.key])){
      //   return true;
      // } else {
      //   return false;
      // } 
    } 
    if (tree.left) {
      console.log('only traverse left');
      for (let i=0; i<leftArr.length; i++) {
        if (tree.key < leftArr[i]) {
          return false;
        }
      }
      for (let i=0; i<rightArr.length; i++) {
        if (tree.key > rightArr[i]) {
          return false;
        }
      }
      return isItBst(tree.left, [...leftArr, tree.key], rightArr);
    } 
  }
  return true;
};

const newTree = new bst();

newTree.insert(0, 0);
newTree.insert(4, 4);
newTree.insert(5, 5);
newTree.insert(6, 6);
// newTree.insert(5, 5);
// newTree.insert(10, 10);
// newTree.insert(0, 0);
newTree.insert(7, 7);
// newTree.insert(2, 2);
// newTree.insert(27, 27);
// newTree.insert(26,26);
// newTree.insert(24, 24);
console.log(isItBst(newTree));
// console.log(util.inspect(newTree, { showHidden: true, depth: null }));

