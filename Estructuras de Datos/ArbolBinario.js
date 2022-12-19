//Esta es una implementación básica de un árbol binario en Javascript.


// Esta clase se trata de un árbol binario de búsqueda. 


// La clase Node contiene una propiedad de datos para almacenar un valor, 
// junto con dos enlaces, uno al nodo izquierdo y otro al nodo derecho. 
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
   }
   
   // La clase BinarySearchTree contiene los métodos insert, remove, findMinNode, getRootNode, search, inorder, preorder y postorder. 
   class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    //El método insert recibe un valor y crea un nodo nuevo con ese valor. 
    // Si el árbol está vacío, entonces el nodo se convierte en la raíz del árbol. 
    insert(data) {
      let newNode = new Node(data);
      if (this.root === null)
        this.root = newNode;
      else
        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null)
          node.left = newNode;
        else
          this.insertNode(node.left, newNode);
      } else {
        if (node.right === null)
          node.right = newNode;
        else
          this.insertNode(node.right, newNode);
      }
    }

    // El método remove recibe un valor y elimina el nodo con ese valor. 
    remove(data) {
      this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
      if (node === null)
        return null;
      else if (key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
      } else if (key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        let aux = this.findMinNode(node.right);
        node.data = aux.data;
        node.right = this.removeNode(node.right, aux.data);
        return node;
      }
    }
    // El método findMinNode recibe un nodo y devuelve el nodo más a la izquierda del nodo dado. 
    findMinNode(node) {
      if (node.left === null)
        return node;
      else
        return this.findMinNode(node.left);
    }
    // El método getRootNode devuelve la raíz del árbol. 
    getRootNode() {
      return this.root;
    }
    // El método search recibe un valor y busca el nodo con el valor dado. 
    search(node, data) {
      if (node === null)
        return null;
      else if (data < node.data)
        return this.search(node.left, data);
      else if (data > node.data)
        return this.search(node.right, data);
      else
        return node;
    }
    // Los métodos inorder, preorder y postorder recorren el árbol en orden in-order, pre-order y post-order respectivamente.
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    } 
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
   }



//    ------------------------------------------------------------------------------------------------------------------------------

//FORMA 2

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
  tree.insert(10);
  tree.insert(5);
  tree.insert(13);
  tree.insert(11);
  tree.insert(2);
  tree.insert(16);
  tree.insert(7);
  console.log(tree.inorder());
  console.log(tree.postorder());
  console.log(tree.preorder());
  
  