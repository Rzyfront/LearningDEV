// ESTRUCTURA DE DATOS -- LISTA ENLAZADA

// LISTA ENLAZADA FORMA 1



//clase Lista Enlazada
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    
    //agregar al final
    append(value) {
      //crear un nodo
      const newNode = {
        value: value,
        next: null
      };
  
      //si la lista esta vacia
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      }
  
      //si la lista no esta vacia
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
  
    //agregar al inicio
    prepend(value) {
      //crear un nodo
      const newNode = {
        value: value,
        next: this.head
      };
  
      //si la lista esta vacia
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      }
  
      //si la lista no esta vacia
      this.head = newNode;
      return this;
    }
  
    //buscar
    search(value) {
      //si la lista esta vacia
      if (!this.head) {
        return null;
      }
  
      //si la lista no esta vacia
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
      return null;
    }
  
    //eliminar
    delete(value) {
      //si la lista esta vacia
      let valoractual=this.head;
      let valoranterior=null;

      while (valoractual!=null) {
          if (valoractual.value===value) {
              if (!valoranterior) {
                  this.head=valoractual.next;
              }
              else{
                  valoranterior.next=valoractual.next;
                }
             
              this.size--;
              return valoractual.value;
          }
    
          valoranterior=valoractual;
          valoractual=valoractual.next;
      }
      return null;

      
    }
  
    //imprimir
    printList() {
      let currentNode = this.head;
      let values = [];
      while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return values.join(' --> ');
    }
  
    //obtener el tamaño
    getSize() {
      let currentNode = this.head;
      let size = 0;
      while (currentNode) {
        size++;
        currentNode = currentNode.next;
      }
      return size;
    }
  }

  const prueva = new LinkedList();

  prueva.append("1");
  prueva.append("2");
  prueva.append("3");
  prueva.append("4");
  prueva.append("5");
  console.log(prueva);
  console.log(prueva.getSize());
  prueva.prepend("0");
  console.log(prueva);
  prueva.delete("5");  !!!
  console.log(prueva.getSize());
  console.log(prueva.printList());
  console.log(prueva);
  console.log(prueva.search("2"));




  // LISTA ENLAZADA FORMA 2

//Clase para crear Nodos
class Nodo{
    //Recibe el valor y el puntero
    constructor(data,next){
        this.data=data;
        this.next=next;
    };
};

//Clase para crear listas enlazadas
class LinkedList2{
    constructor(){
    this.head=null;
    this.size=0;
    }
    // Metodo para agregar al final de la lista
    addEnd(data){
        const newNodo = new Nodo(data,null);

        if (!this.head) {
            this.head=newNodo;
        }
        else{
            let valoractual = this.head;
            while (valoractual.next) {
                valoractual=valoractual.next;
            }
            valoractual.next=newNodo;
        }
        this.size++;
    }
    // Metodo para agregar en el index pasado por parametros a la lista, recordar que los index iniciar de 0 en adelante.
    indexAdd(data,index){
        if (index<0 || index > this.size) {
            return null;
        }
        
        const newNodo= new Nodo(data);
        let valoractual=this.head;
        let valoranterior;

        if (index===0) {
            newNodo.next=valoractual;
            this.head=newNodo;
        }
        else{
            for (let i = 0; i < index; i++) {
                valoranterior=valoractual;
                valoractual=valoractual.next;
            }
            newNodo.next=valoractual;
            valoranterior.next=newNodo;
        }
        this.size++;
    }
    // Metodo para escribir de forma visiblemente ordenada la lista
    print(){
        if (!this.size) {
            return null;
        }
        let valoractual=this.head;
        let Print="";

        while (valoractual) {
           Print+="["+valoractual.data + "]--> ";
            valoractual=valoractual.next;
        }
        Print+="Null";
        return Print;
    }
    // Metodo para eliminar datos de la lista sengun el valor
    removeData(data){
        let valoractual=this.head;
        let valoranterior=null;

        while (valoractual!=null) {
            if (valoractual.data===data) {
                if (!valoranterior) {
                    this.head=valoractual.next;
                }
                else{
                    valoranterior.next=valoractual.next;
                }
                this.size--;
                return valoractual.data;
            }
            valoranterior=valoractual;
            valoractual=valoractual.next;
        }
        return null;

        
    }

    removeIndex(index){
        if (index<0 || index>this.size) {
            return null;
        }
        
        let valoractual=this.head;
        let valoranterior= null;

        if (index===0) {
        this.head=valoractual.next;        
        }
        else{
            for (let i = 0; i < index; i++) {
                valoranterior=valoractual;
                valoractual=valoractual.next;
            }
            valoranterior.next=valoractual.next;
        }
        this.size--;
        return valoractual.data;
    }

    isEmpy(){
        return this.size===0;

        // O
        
        // if (this.size===0) {
        //     return true;
        // }
        // else{
        //     return false;
        // }
    }

    getSize(){
        return this.size;
    }


}

const prueva2 = new LinkedList2();

prueva2.addEnd("0");
prueva2.addEnd("1");
prueva2.addEnd("2");
prueva2.addEnd("3");
console.log(prueva2.print());
prueva2.indexAdd("METIDO",3);
console.log(prueva2.print());
prueva2.removeData("METIDO");
console.log(prueva2.print());
prueva2.removeData("3");
console.log(prueva2.print());
console.log(prueva2.removeIndex(1));
console.log(prueva2.print());
console.log(prueva2.isEmpy());
console.log(prueva2.getSize());