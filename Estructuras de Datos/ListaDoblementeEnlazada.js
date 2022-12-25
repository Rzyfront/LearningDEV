//LISTA DOBLEMENTE ENLAZADA

//LISTA DOBLEMENTE ENLAZADA FORMA 1

//Clase para construir los nodos doblemente enlazados.
class Node{
    constructor(data,next,prev){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

//Clase para construir las listas doblemente enlazadas con sus metodos.
class DoubleLinkedList{
    constructor(){
        this.head= null;
        this.tail= null;
        this.size=0;
    }

    //Metodo para agregar valores al inicio de la lista doblemente enlazada.
    addHead(data){
        //Crear el nodo.
        const newNode = new Node(data,this.head,null)
        //Si ya tiene valores
        if (this.head) {
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
        //Si esta vacia
        else{
            this.head=newNode;
            this.tail=newNode;
        }
        //Aumenta tamaño cada vez que se agrega un dato a la lista
        this.size++;
    }

    //Metodo para agregar valores al final de la lista doblemente enlazada.
    addTail(data){
        //Crear el nodo.
        const newNode = new Node(data,null,this.tail)
        //Si ya tiene valores.
        if (this.tail) {
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail=newNode;
        }
        //Si esta vacia.
        else{
            this.head=newNode;
            this.tail=newNode;
        }
        //Se incrementa el tamaño cada vez que se agregen valores a la lista.
        this.size++;
    }

    //Metodo para agregar valores en un indice existente en la lista doblemente enlazada.
    addIndex(data,index){
        //Si el indice existe en la lista
        if (index<0 || index > this.size) {
            return null;
        }
        //Crear el nodo.
        const newNode= new Node(data,null,null);
        let valoractual=this.head;
        let valoranterior;
        //Si es el el primero se agrega a la cabeza
        if (index===0) {
            newNode.next=valoractual;
            valoractual.prev=newNode;
            this.head=newNode;
        }
        //Si no es el primero se busca el indice en la lista.
        else{
            for (let i = 0; i < index; i++) {
                valoranterior=valoractual;
                valoractual=valoractual.next;
            }
            //Se agrega el nodo y se enlaza doblemente.
            newNode.next=valoractual;
            valoractual.prev=newNode;
            valoranterior.next=newNode;
            newNode.prev=valoranterior;
        }
        //Se aumenta el tamaño cada vez que se agrege un dato a la lista.
        this.size++;
    }

    //Metodo para eliminar valores desde el final de la lista.
    removeHead(){
        //Si esta vacia
        if (!this.head) {
            return null;
        }
        //Si tiene valores referencia el head.
        const valorBorrado=this.head.data;
        //Si solo hay un valor, se vacia la lista.
        if (this.head===this.tail) {
            this.head=null;
            this.tail=null;
        }
        //Si tiene mas valores, se quita la referencia del valor a borrar.
        else{
            this.head=this.head.next;
            this.head.prev=null;
        }
        //Disminuye el tamaño de la lista
        this.size--;
        return valorBorrado;
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

    removeTail(){
        //Si esta vacia
        if (!this.tail) {
            return null;
        }
        //Si tiene valores referencia el tail.
        const valorBorrado=this.tail.data;
        //Si solo hay un valor, se vacia la lista.
        if (this.head===this.tail) {
            this.head=null;
            this.tail=null;
        }
        //Si tiene mas valores, se quita la referencia del valor a borrar.
        else{
            this.tail=this.tail.prev;
            this.tail.next=null;
        }
        //Disminuye el tamaño de la lista
        this.size--;
        return valorBorrado;
    }

    //Metodo para eliminar un valor especifico de la lista.
    removeData(data){
        //Se crean auxiliares para la iteracion y se referencia el head.
        let valoractual=this.head;
        let valoranterior= null;
        //Si esta vacia no se borra nada.
        if (!this.head) {
            return null;
        }
        //Se itera la lista en busca del dato.
        while (valoractual !== null) {
            //Si se encuentra el valor.
            if (valoractual.data === data) {
                //En la primera posicion se llama el motodo eliminar cabeza
                if (!valoranterior) {
                    return this.removeHead();
                }
                //En la ultima posicion se llama el motodo eliminar cola
                else if (!valoractual.next) {
                    return this.removeTail();
                }
                //Se quita la referencia del nodo que tiene el dato a borrar
                else{
                    valoranterior.next=valoractual.next;
                    valoractual.next.prev=valoranterior;
                }
                //Disminuye el tamaño de la lista
                this.size--;
                return valoractual.data;
            }
            //Iteracion de la lista
            valoranterior=valoractual;
            valoractual=valoractual.next;
        }

    }

    removeIndex(index) {
        //Si el indice existe en la lista
        if (index<0 || index > this.size) {
            return null;
        }
        //Se crean auxiliares para la iteracion y se referencia el head.
        let valoractual=this.head;
        let valoranterior= null;
        //Primer index, se usa metodo borrar cabeza.
        if (index===0) {
        return this.removeHead();        
        }
         //Ultimo index, se usa metodo borrar cola.
        else if (index=== this.size-1) {
            return this.removeTail();    
        }
        //Si no se itera la lista en busca del index
        else{
            for (let i = 0; i < index; i++) {
                valoranterior=valoractual;
                valoractual=valoractual.next;
            }
            //Se quita la referencia al valor borrado
            valoranterior.next=valoractual.next;
            valoractual.next.prev=valoranterior;
        }
        //Se disminuye el tamaño de lista
        this.size--;
        return valoractual.data;
    }

    //Metodo para ver tamaño
    getSize(){
        return this.size;
    }

    //Metodo para saber si esta vacia
    isEmpy(){
        return this.size===0;
    }

    //Metodo para mostrar los valores de la lista doblemente enlazada.
    print(){
        //Se referencia la cabeza y se crea y aux para imprimir.
        let valoractual= this.head;
        let Print= "";
        //Se recorre la lista mientras tenga datos.
        while (valoractual) {
            //Se concatenan los datos de la lista.
            Print+= "[" + valoractual.data + "]<-->";
            //Iteracion.
            valoractual=valoractual.next;
        }
        //Se retorna la lista.
        return "Null<-->" +Print+ "Null"
    }
    //Metodo para mostrar los valores al revez de la lista doblemente enlazada.
    reversePrint(){
        //Se referencia la cola y se crea y aux para imprimir.
        let valoractual= this.tail;
        let Print= "";
        //Se recorre la lista mientras tenga datos.
        while (valoractual) {
        //Se concatenan los datos de la lista.  
            Print+= "["+valoractual.data + "]<-->";
            //Iteracion.
            valoractual=valoractual.prev;
        }
        //Se retorna la lista.
        return "Null<-->"+Print+ "Null";
    }
}

const prueva = new DoubleLinkedList();

prueva.addHead("4");
prueva.addHead("2");
prueva.addHead("1");
prueva.addTail("5");
prueva.addIndex("3",2);
console.log(prueva.print());
console.log(prueva.reversePrint());
console.log(prueva.tail)
console.log(prueva.removeHead());
console.log(prueva.print());
console.log(prueva.removeTail());
console.log(prueva.print());
console.log(prueva.getSize());
console.log(prueva.isEmpy());
prueva.addTail("5");
prueva.addHead("1");
prueva.addHead("0");
console.log(prueva.print());
console.log(prueva.removeHead());
console.log(prueva.removeTail());
console.log(prueva.removeData("2"));
console.log(prueva.print());
console.log(prueva.removeIndex(1));
console.log(prueva.print());