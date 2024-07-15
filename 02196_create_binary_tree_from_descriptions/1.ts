/*
https://leetcode.com/problems/create-binary-tree-from-descriptions/description

Time complexity: O(n)
Space complexity: O(n).

Result:
Runtime: 306 ms
Memory: 79.28 MB
 */

// Solution description:
// 1. We need to build treeMap:
//   -> key = parent number
//   -> value = parent treeNode object
//   -> we add child to treeMap if not found
//   -> we add parent to treeMap if not found
// 2. We need to build reverseTree to remember path from parent to level-up parent
//   -> key = child number
//   -> value = parent number
// 3. We need to store current root
//   -> by default we don't know so it's null
//   -> we setup first parent as root (to eliminate null value)
//   -> for each iteration if root equals current child,
//      we need to use reverseTree to find real level-up root

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const reverseTree = new Map<number, number>();
  const treeMap = new Map<number, TreeNode>();
  let root: number | null = null;

  descriptions.forEach(([parent, child, isLeft]) => {
    let childNode: TreeNode | null;
    let parentNode: TreeNode | null;

    if (treeMap.has(parent)) {
      parentNode = treeMap.get(parent)!;
    } else {
      parentNode = new TreeNode(parent);
      treeMap.set(parent, parentNode);
    }
    if (treeMap.has(child)) {
      childNode = treeMap.get(child)!;
    } else {
      childNode = new TreeNode(child, null, null);
      treeMap.set(child, childNode);
    }

    if (isLeft) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }

    if (!reverseTree.has(child)) {
      reverseTree.set(child, parent);
    }
    if (!root || root === child) {
      root = parent;
    }
    while (reverseTree.has(root!)) {
      root = reverseTree.get(root!)!;
    }
  });
  return treeMap.get(root!)!;
};