//Esta es una implementación básica de un árbol binario en Javascript.


// Esta clase se trata de un árbol binario de búsqueda. 



class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      } else {
        let current = this.root;
        while (true) {
          if (value === current.value) return "This value is in tree";
          if (value < current.value) {
            if (current.left === null) {
              current.left = newNode;
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  
    find(value) {
      if (!this.root) return null;
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) return "El valor no existe";
      return current;
    }
  
    contains(value) {
      if (!this.root) return false;
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }

        inorder() {
          if (!this.root) return [];
          let result = [];
          function traverseInOrder(node) {
            if (node.left) traverseInOrder(node.left);
            result.push(node.value);
            if (node.right) traverseInOrder(node.right);
          }
          traverseInOrder(this.root);
          return result;
        }
      
        preorder() {
          if (!this.root) return [];
          let result = [];
          function traversePreOrder(node) {
            result.push(node.value);
            if (node.left) traversePreOrder(node.left);
            if (node.right) traversePreOrder(node.right);
          }
          traversePreOrder(this.root);
          return result;
        }
      
        postorder() {
          if (!this.root) return [];
          let result = [];
          function traversePostOrder(node) {
            if (node.left) traversePostOrder(node.left);
            if (node.right) traversePostOrder(node.right);
            result.push(node.value);
          }
          traversePostOrder(this.root);
          return result;
        }

  }
  
  

  const tree = new BinarySearchTree();

  tree.insert(5);
  tree.insert(2);
  tree.insert(1);
  tree.insert(6);
  tree.insert(7);
  tree.insert(8);
  tree.insert(3);
  tree.insert(4);
  console.log(tree.inorder());
  console.log(tree.preorder());
  console.log(tree.postorder());
  console.log(tree.find(8));
  console.log(tree.contains(9));