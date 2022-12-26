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


    _postOrder(node, fn) {
        if(node) {
            for(let i = 0; i < node.children.length; i++) {
                this._postOrder(node.children[i], fn);
            }
            if(fn) {
                fn(node);
            }
        }
    }

    traverseDFS(fn, method) {
        const current = this.root;
        if(method) {
            this[`_${method}`](current, fn);
        } else {
            this._preOrder(current, fn);
        }
    }

    traverseBFS(fn) {
        const queue = [this.root];
        while(queue.length) {
            const node = queue.shift();
            if(fn) {
                fn(node);
            }
            for(let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
    }

    print() {
        if(!this.root) {
            return console.log('No root node found');
        }
        const newline = new Node('|');
        const queue = [this.root, newline];
        let string = '';
        while(queue.length) {
            const node = queue.shift();
            string += node.data.toString() + ' ';
            if(node === newline && queue.length) {
                queue.push(newline);
            }
            for(let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
        console.log(string.slice(0, -2).trim());
    }

    printByLevel() {
        if(!this.root) {
            return console.log('No root node found');
        }
        const newline = new Node('\n');
        const queue = [this.root, newline];
        let string = '';
        while(queue.length) {
            const node = queue.shift();
            string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
            if(node === newline && queue.length) {
                queue.push(newline);
            }
            for(let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
        console.log(string.trim());
    }
}


const prueva = new Tree();


prueva.add(1,0);
console.log(prueva);
prueva.add(2,1);
prueva.add(3,2);
console.log(prueva);
prueva.add(4,0);
console.log(prueva);