//Esta es una implementación básica de un árbol X-nario en Javascript.


// Esta clase se trata de un árbol de estructuras naturales de uso de datos. 


//Esta es una clase para crear un Node de un arbol
//Cada Node tendra un dato que el usuario le asignara y 
//una lista de hijos que contienen otros Nodes

class Node {
 //el constructor toma un parametro que es el dato que se le asignara a este Node
constructor(data){
    this.data = data; //se asigna el dato al atributo data
    this.children = []; //se crea una lista de hijos vacia
}
  }

    //Esta clase crea un árbol con los datos especificados, asignando un nodo raíz y permitiendo agregar sus hijos.
    class Tree {

        //Constructor
    constructor(){
        //Inicializamos el nodo raíz en null
        this.root = null;
    }

    //Función para añadir datos al árbol
    add(data, toNodeData) {
        //Creamos el nodo con los datos especificados
        const node = new Node(data);
        //Verificamos si los datos de nodo padre estan especificados
        const parent = toNodeData ? this.findBFS(toNodeData) : null; 
        //Si se especificó un nodo padre
        if(parent) {
            //Agregamos el nodo como hijo del nodo padre
            parent.children.push(node);
        } else {
            //Si no hay nodo raíz
            if(!this.root) {
                //Asignamos el nodo como el nodo raíz
                this.root = node;
            } else {
                //Si ya existe un nodo raíz
                return 'Root node is already assigned';
            }
        }
    }



    // Método para eliminar un nodo de un árbol n-ario
    remove(data) {
    // Si el nodo raíz tiene el mismo dato que el nodo a eliminar, se establece el nodo raíz en null
    if (this.root.data === data) {
        this.root = null;
    }

    // Se crea una cola y se añade el nodo raíz
    const queue = [this.root];

    // Mientras la cola tenga elementos, se itera sobre ella
    while (queue.length) {
        // Se obtiene el primer elemento de la cola
        const node = queue.shift();

        // Se recorren todos los hijos del nodo
        for (let i = 0; i < node.children.length; i++) {
            // Si algún hijo tiene el mismo dato que el nodo a eliminar, se elimina ese hijo
            if (node.children[i].data === data) {
                node.children.splice(i, 1);
            } 
            // Si ningún hijo tiene el mismo dato que el nodo a eliminar, se añaden a la cola para explorarlos en iteraciones posteriores
            else {
                queue.push(node.children[i]);
            }
        }
    }
}


    contains(data) {
        return this.findBFS(data) ? true : false;
    }

// Este método encuentra un nodo en un árbol n-ario utilizando búsqueda en anchura (BFS, por sus siglas en inglés).
// Recibe un parámetro 'data', que es el valor del nodo que estamos buscando.
findBFS(data) {
    // Creamos una cola (queue) y le agregamos el nodo raíz del árbol.
    // La cola es una estructura de datos que se utiliza para almacenar temporalmente los elementos durante la búsqueda.
    // Los elementos se sacan de la cola en el orden en que se han agregado (FIFO, por sus siglas en inglés).
    const queue = [this.root];
    
    // Mientras la cola no esté vacía...
    while(queue.length) {
        // Sacamos el primer elemento de la cola y lo asignamos a la variable 'node'.
        const node = queue.shift();
        
        // Si el valor del nodo es igual al valor que estamos buscando...
        if(node.data === data) {
            // Devolvemos el nodo.
            return node;
        }
        
        // Recorremos cada uno de los hijos del nodo actual...
        for(let i = 0; i < node.children.length; i++) {
            // ...y agregamos cada hijo a la cola.
            queue.push(node.children[i]);
        }
    }
    
    // Si no se encuentra el nodo, devolvemos null.
    return null;
}


    // Este método recorre el árbol n-ario en preorden (primero el nodo raíz, luego sus hijos).
// Recibe dos parámetros: 'node' es el nodo a partir del cual se iniciará el recorrido y 'fn' es una función que se aplicará a cada nodo durante el recorrido.
_preOrder(node, fn) {
    // Si el nodo no es null...
    if(node) {
        // Si se ha proporcionado una función 'fn'...
        if(fn) {
            // ...aplicamos la función al nodo actual.
            fn(node);
        }
        
        // Recorremos cada uno de los hijos del nodo actual...
        for(let i = 0; i < node.children.length; i++) {
            // ...y realizamos un recorrido en preorden desde cada hijo.
            this._preOrder(node.children[i], fn);
        }
    }
}


// Este método recorre el árbol n-ario en orden post-order
// es decir, primero procesa los hijos de un nodo, luego el nodo en sí.
_postOrder(node, fn) {
    // Si el nodo no es nulo, entonces continuamos con el procesamiento
    if(node) {
        // Recorremos todos los hijos del nodo actual
        for(let i = 0; i < node.children.length; i++) {
            // Aplicamos el método de forma recursiva a cada uno de los hijos
            this._postOrder(node.children[i], fn);
        }
        // Si se ha especificado una función, la aplicamos al nodo actual
        if(fn) {
            fn(node);
        }
    }
}

// Este método recorre el árbol n-ario utilizando una búsqueda en profundidad (DFS)
traverseDFS(fn, method) {
    // Obtenemos la raíz del árbol
    const current = this.root;
    // Si se ha especificado un método de recorrido, lo utilizamos
    if(method) {
        // Ejecutamos el método de recorrido especificado de forma recursiva a partir de la raíz
        this[`_${method}`](current, fn);
    } 
    // Si no se ha especificado un método de recorrido, utilizamos el recorrido en pre-order por defecto
    else {
        this._preOrder(current, fn);
    }
  }
  
  // Este método recorre el árbol n-ario utilizando una búsqueda en anchura (BFS)
traverseBFS(fn) {
    // Creamos una cola con la raíz del árbol
    const queue = [this.root];
    // Mientras la cola no esté vacía, procesamos los nodos
    while(queue.length) {
      // Sacamos el primer elemento de la cola
      const node = queue.shift();
      // Si se ha especificado una función, la aplicamos al nodo
      if(fn) {
          fn(node);
      }
      // Añadimos todos los hijos del nodo a la cola
      for(let i = 0; i < node.children.length; i++) {
          queue.push(node.children[i]);
      }
    }
  }
  
  // Este método imprime el árbol n-ario en consola utilizando una búsqueda en anchura (BFS)
print() {
    // Si no hay raíz, no podemos imprimir el árbol
    if(!this.root) {
        return console.log('No root node found');
    }
    // Creamos un nodo auxiliar para marcar el final de un nivel del árbol
    const newline = new Node('|');
    // Creamos una cola con la raíz del árbol y el nodo auxiliar
    const queue = [this.root, newline];
    // Inicializamos una cadena vacía para ir concatenando los datos de los nodos
    let string = '';
    // Mientras la cola no esté vacía, procesamos los nodos
    while(queue.length) {
      // Sacamos el primer elemento de la cola
      const node = queue.shift();
      // Añadimos el dato del nodo a la cadena
      string += node.data.toString() + ' ';
      // Si el nodo es el nodo auxiliar y la cola no está vacía, añadimos otro nodo auxiliar a la cola
      if(node === newline && queue.length) {
          queue.push(newline);
      }
      // Añadimos todos los hijos del nodo a la cola
      for(let i = 0; i < node.children.length; i++) {
          queue.push(node.children[i]);
      }
    }
    // Imprimimos la cadena resultante, eliminando el último espacio y eliminando los espacios en blanco al principio y al final
    console.log(string.slice(0, -2).trim());
  }
  

// Este método imprime el árbol n-ario en consola por niveles, utilizando una búsqueda en anchura (BFS)
printByLevel() {
    // Si no hay raíz, no podemos imprimir el árbol
    if(!this.root) {
        return console.log('No root node found');
    }
    // Creamos un nodo auxiliar para marcar el final de un nivel del árbol
    const newline = new Node('\n');
    // Creamos una cola con la raíz del árbol y el nodo auxiliar
    const queue = [this.root, newline];
    // Inicializamos una cadena vacía para ir concatenando los datos de los nodos
    let string = '';
    // Mientras la cola no esté vacía, procesamos los nodos
    while(queue.length) {
      // Sacamos el primer elemento de la cola
      const node = queue.shift();
      // Añadimos el dato del nodo a la cadena
      string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
      // Si el nodo es el nodo auxiliar y la cola no está vacía, añadimos otro nodo auxiliar a la cola
      if(node === newline && queue.length) {
          queue.push(newline);
      }
      // Añadimos todos los hijos del nodo a la cola
      for(let i = 0; i < node.children.length; i++) {
          queue.push(node.children[i]);
      }
    }
    // Imprimimos la cadena resultante, eliminando los espacios en blanco al principio y al final
    console.log(string.trim());
  }
} 

const prueva = new Tree();


prueva.add(1);
console.log(prueva);
prueva.add(2,1);
prueva.add(3,1);
console.log(prueva);
prueva.add(4,3);
console.log(prueva);
prueva.add(7,3);
