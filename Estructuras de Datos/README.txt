En este registro de estudio, trabaje las estructuras de datos,
con el fin de aprenderlas, practicarlas y tener un soporte para
cualquier ocasion en que necesite una plantilla de estas.

Las estructuras de datos como su nombre lo dice es una estructuras para el almacenamiento y procesamiento optimo de datos
pueden existes 2 tipos de estructuras, Lineales y No Lineales.
Las lineales se caractericas por mantener un orden unico, es decir un dato tras otro consecutivamente.
Las no lineales tienen otro tipo de orden estruturado mas complejo y de diversas relaciones segun se necesite.

¡----------------------------------------------------------------------------------------------------------------------------!


Las estructuras Lineales que estan contempladas en este documentos son:

#1 Fila = Fila.js | El termino global de esta estructura es Queue y la representacion grafica es la siguiente:

[0][1][2][3]

Y se procesa desde el primer dato ingresado.

#2 Pila = Pila.js | El termino global de esta estructura es Stack y la representacion grafica es la siguiente:

[3]
[2]
[1]
[0]

Y se procesa desde el ultimo dato ingresado.

#3 Lista Enlazada = ListaEnlazada.js | El termino global de esta estructura es Linked List y la representacion grafica es la siguiente:

[0]->[1]->[2]->[3]->null

Se procesa desde el dato "NODO" deseado y cada nodo referencia al siguiente, pero el ultimo referencia a "NULL" de este modo sabemos donde termina
dicha lista o si el inicio esta en "NULL" sabemos que esta vacia.

#4 Lista Doblemente Enlazada = ListaDoblementeEnlazada.js | El termino global es DoubleLinkedList, en esta lista cada nodo referencia
al siguiente y al anterior.

null <- [0] <-> [1] <->[2] <->[3] -> null

¡----------------------------------------------------------------------------------------------------------------------------!

Las estructuras No Lineales que estan contempladas en este documentos son:

#1 Arboles = Arboles.js | El termino global es Tree y su reprentacion grafica es compleja, Sin embargo hay varias carateristicas
de esta estructura que se deben tener en cuenta.

os arboles tienen nodos.
Los nodos apuntan a otro nodos.
El nodo que apunta a otros nodos se llama Padre.
El nodo al que lo apunta un nodo se llama Hijo.
La cantidad de nodos al que un Padre puede apuntar depende del grado del arbol.
El primero nodo de un arbol no tiene padre y se llama nodo raiz.
Los ultimos nodos de un arbol se llaman Hojas.
Los nodos se acomodan de forma "decendente", y cada una de estas instancias se llaman niveles.
La cantidad de niveles des la raiz hasta la ultima hoja, se le llama profundidad.
La cantidad de hijos que puede tener cada nodo padre se le llama orden. Ejem: Orden 2 (Cada padre puede tener 2 hijos)
Los nodos de un arbol no puedes tener bucles.
Los arboles tienen ramas que son el conjunto de nodos que van desde la raiz hasta la hoja de una direccion unica.
El termino arbol full completo, se refiere a un arbol en donde todos los nodos padres tienen hijos.
EL termino arblo completo, se refiere a un arblo en donde todos los nodos padres tienen hijos pero puede permitirse solo tener uno en el ultimo nivel.
El termino arbol degenerado, son arboles en los que cada nodo solo tiene un hijo y se comporta como una lista.
