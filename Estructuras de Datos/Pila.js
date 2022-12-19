//ESTRUCTURAS DE DATOS -- PILAS

//PILA FORMA 1

class Stack {
    constructor() {
      this.items = [];
    };
  
    // agrega un elemento a la cima de la pila
    push(element) {
      this.items.push(element);
    };
  
    // elimina el elemento de la cima de la pila y lo devuelve
    pop() {
      return this.items.pop();
    };
  
    // devuelve el elemento de la cima de la pila
    peek() {
      return this.items[this.items.length - 1];
    };
  
    // devuelve verdadero si la pila está vacía y falso en caso contrario
    isEmpty() {
      return this.items.length === 0;
    };
  
    // elimina todos los elementos de la pila
    clear() {
      this.items = [];
    };
  
    // devuelve el número de elementos en la pila
    size() {
      return this.items.length;
    };

    // Escribe en pantalla unicamente los elementos de la pila
    print(){
        if (this.isEmpty=== true) {
            return null;
        }
        let Print=[];
        for (let i = this.items.length-1; i >= 0; i--) {
            Print+= this.items[i] + "\n";
        }
        return Print;
    }
  }


  const pila = new Stack();


  pila.push("#1 ELEMENT");
  pila.push("#2 ELEMENT");
  pila.push("#3 ELEMENT");
  console.log(pila.size());
  pila.push("#4 ELEMENT");
  pila.push("#5 ELEMENT");
  console.log(pila);
  console.log(pila.pop());
  console.log(pila);
  console.log(pila.print());
  console.log(pila.peek());
  console.log(pila.isEmpty());
  pila.clear();
  console.log(pila);
  console.log(pila.size());
  console.log(pila.isEmpty());



  // PILA FORMA 2

  class Stack2{

    constructor(){
        this.items ={};
        this.top=0;
    };

    push(data){
        this.top++
        this.items[this.top]=data;
    };

    pop(){
        let deletedata;
        if (this.top!==0) {
            deletedata=this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedata;
        };
    };

    size(){
        return this.top;
    }

    isEmpty(){
        if (this.size()===0) {
            return true;
        }
        else{
            return false;
        }
    }

    peek(){
        if (this.isEmpty()===true) {
            return null;            
        }
        else{
            return this.items[this.top];
        }
    }
    clear() {
        this.items = [];
        this.top=0;
      };

    print(){
        if (this.isEmpty=== true) {
            return null;
        }
        let Print=[];
        for (let i = this.top; i > 0; i--) {
            Print+= this.items[i] + "\n";
        }
        return Print;
    }
  }


  const pila2 = new Stack2();


  pila2.push("#1 item");
  pila2.push("#2 item");
  pila2.push("#3 item");
  console.log(pila2.size());
  pila2.push("#4 gato");
  pila2.push("#5 item");
  console.log(pila2);
  console.log(pila2.pop());
  console.log(pila2);
  console.log(pila2.print());
  console.log(pila2.peek());
  console.log(pila2.isEmpty());
  pila2.clear();
  console.log(pila2);
  console.log(pila2.size());
  console.log(pila2.isEmpty());