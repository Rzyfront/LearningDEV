//ESTRUCTURAS DE DATOS -- FILAS



// FILA FORMA 1

class Queue {
    constructor() {
      this.item = [];
    }
  
    enqueue(dato) {
      this.item.push(dato);
    }
  
    dequeue() {
      return this.item.shift();
    }
  
    front() {
      return this.item[0];
    }
  
    end() {
      return this.item[this.item.length - 1];
    }
  
    isEmpy() {
      return this.item.length === 0;
    }
  
    size() {
      return this.item.length;
    }
  
    clear() {
      this.item = [];
    }
    
    print(){
      let Print=[];
      for (let i = 0; i < this.item.length; i++) {
        Print+= this.item[i]+" | ";
      }
      return Print;
    }
  }
  
  const fila = new Queue();

  fila.enqueue("Hola");
  fila.enqueue("Como");
  fila.enqueue("Estas");
  fila.enqueue("Bebe");
  fila.dequeue();
  console.log(fila.front());
  console.log(fila.end());
  console.log(fila);
  console.log(fila.print());
  console.log(fila.isEmpy());
  fila.clear();
  console.log(fila);


//FILA FORMA 2

class fullQueue{
    constructor(){
         this.item={};
         this.front=0;
         this.end=0;
    };

     enqueue(dato){
         this.item[this.end]=dato;
         this.end++;
      };

      dequeue(){
        if (this.front===this.end) {
          return null;
        }
        else{
          var data=this.item[this.front];
          delete this.item[this.front];
          this.front++;
          return data;
        };
      };
      
      size(){
        return this.end-this.front;
      };
      
      isEmpy(){
        if (this.size()===0) {
          return true;
        }
        else{
          return false;
        }
      }

      fFront(){
        if (this.isEmpy===true) {
          return null;
        }
        else{
          return this.item[this.front];
        }
        
      };

      fEnd(){
        if (this.isEmpy===true) {
          return null;
        }
        else{
          return this.item[this.end-1];
        }
        
      };

      clear() {
        this.item = [];
        this.front=0;
        this.end=0;
      };

      print(){
        if (this.isEmpy===true) {
          return null;
        };

        let Print=[];
        for (let i = this.front; i < this.end; i++) {
          Print+= this.item[i]+" | ";
        }
        return Print;
      };
};


const fullfila = new fullQueue();

fullfila.enqueue("Hola");
fullfila.dequeue();

fullfila.enqueue("Como");
fullfila.enqueue("Estas?");
fullfila.enqueue("Bebe");
fullfila.dequeue();
fullfila.dequeue();
console.log(fullfila.fFront());
fullfila.enqueue("Como");
fullfila.enqueue("Estas?");
fullfila.enqueue("caca");
console.log(fullfila.fEnd());
console.log(fullfila);
console.log(fullfila.size());
console.log(fullfila.print());
fullfila.dequeue();
console.log(fullfila.isEmpy());
fullfila.clear();
console.log(fullfila);
console.log(fullfila.isEmpy());