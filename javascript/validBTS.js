class Node {
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  if(!root) return true;
  if (root.left && root.left.val > root.val) return false;
  if (root.right && root.right.val < root.val) return false;
    
  return (isValidBST(root.left) && isValidBST(root.right))

}

if (require.main === module) {

// add your own tests in here
const T = (v, l, r) => new Node(v, l, r)

console.log("Expecting: true");
console.log("=>", isValidBST(T(2, T(1), T(3))));

}

module.exports = {
  isValidBST,
  Node
}

// Please add your pseudocode to this file
// And a written explanation of your solution