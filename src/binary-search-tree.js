const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor(){
    this.roots = null;
  }

  root() {
    if(!this.root){
      return 
    }
    return this.roots
  }

  add(data) {
    let newNode = new Node(data);
    if(!this.roots){
      this.roots = newNode
      return
    }
    
    let current = this.roots;
  
    while(true){
        if(data < current.data){
          if(!current.left){
            current.left = newNode;
            return
        }
        current = current.left
      } else {
        if(!current.right){
          current.right = newNode
          return 
        }
        current = current.right
      }
    }
  }

  has(data) {
    let current = this.roots;
    while(current !== null){
      if(data < current.data){
        current = current.left
      } else if(data > current.data){
        current = current.right
      } else if(data === current.data){
        return true
      }
    }
    return false
  }

  find(data) {
    let current = this.roots;
    while(current !== null){
      if(data < current.data){
        current = current.left
      } else if(data > current.data){
        current = current.right
      } else if(data === current.data){
        return current;
      }
    }
    return null
  }

  remove(data) {
      let current = this.roots;
      let parent = null;
  
      while (current && current.data !== data) {
        parent = current;
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
  
      if (current === null) {
        return;
      }
  
      if (current.left === null && current.right === null) {
        if (parent === null) {
          this.root = null; 
        } else if (parent.left === current) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }

      else if (current.left === null || current.right === null) {
        const child = current.left ? current.left : current.right;
  
        if (parent === null) {
          this.root = child;
        } else if (parent.left === current) {
          parent.left = child;
        } else {
          parent.right = child;
        }
      } else {
        let minNodeParent = current;
        let minNode = current.right;
        while (minNode.left !== null) {
          minNodeParent = minNode;
          minNode = minNode.left;
        }
        current.data = minNode.data;
        if (minNodeParent.left === minNode) {
          minNodeParent.left = minNode.right;
        } else {
          minNodeParent.right = minNode.right;
        }
    }
    return 
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};