const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.theRoot = null;
  }

  root() {
    return this.theRoot;
  }

  add(data) {
    var newNode = new Node(data);
    if (!this.theRoot) {
      this.theRoot = newNode;
    }
    else {
      this.insertNode(this.theRoot, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left)
        node.left = newNode;
      else this.insertNode(node.left, newNode);
    }
    else {
      if (!node.right)
        node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  has(data) {
    var node = this.theRoot;
    if (!node) return null;
    else while (node) {
      if (data == node.data)
        return true;
      else if (data < node.data)
        node = node.left;
      else if (data > node.data)
        node = node.right;
    }
    return false;
  }

  find(data) {
    var node = this.theRoot;
    if (!node) return null;
    else while (node) {
      if (data == node.data)
        return node;
      else if (data < node.data)
        node = node.left;
      else if (data > node.data)
        node = node.right;
    }
    return null;
  }

  remove(data) {
    this.theRoot = this.removeNode(this.theRoot, data);
  }

  removeNode(node, key) {
    if (!node)
      return null;

    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      else if (!node.left) {
        node = node.right;
        return node;
      }
      else if (!node.right) {
        node = node.left;
        return node;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  min() {
    if (!this.theRoot)
      return null;

    var min = this.theRoot;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.theRoot)
      return null;

    var max = this.theRoot;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }

}

module.exports = {
  BinarySearchTree
};