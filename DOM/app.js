// Ejemplos de Modelado de documento
// En este DOC encontrarimos varios metodos que sirver para interactuar con los elementos
// del archivo HTML.

//La palabra reservada document es una funcion que permite llamar los siguientes metodos
// y así usar sus metodos con el documento HTML enlazado al JS.

document;



//querySelector() sirve para seleeccionar elementos del archivo HTML de forma
//dinamica, es decir puedes seleccionar varios tipos de elemtos como por ejemplo:

//!Importante querySelector() solo selecciona el primer elemento que conincide
//! con el parametro.

//etiquetas
console.log(document.querySelector("h2"));
//clases
console.log(document.querySelector(".h2-2"));
//id's
console.log(document.querySelector("#parrafo1"));
//esto utilizando los seleectores que se conocen para cada uno.

//getElementById sirve para seleccionar unicamente ID´s existentes en nuestro arhivo
//HTLM es decir no es dinamico.
console.log(document.getElementById("parrafo2"));

//A estos metodos se les llaman selectores porque es su funcion.

//querySelectorAll() selecciona todos los elementos que coincidan con el parametro
console.log(document.querySelectorAll(".all"));

//Podemos guardar el elemento html seleccionado en una variable y utilizarla
const parrafo1= document.getElementById("parrafo1");
//textContent modifica el contenido del texto de un elemento.
parrafo1.textContent="Texto desde JavaScrip";

const parrafo2 = document.getElementById("parrafo2");
//innetHTML modifica el contenido de un texto pero conservando el uso de Etiquetas
parrafo2.innerHTML="<b>texto Inner HTML</b>";

parrafo1.classList.add("all");


//Crear un elemto en la lista
const lista= document.getElementById("lista");

const li= document.createElement("li");
li.textContent="Primer Elemto";
//Agrega la etiqueta dentro de la etiqueta seleccionada
lista.appendChild(li);

//Crear varios elemnto usando arrays
const Arrayelement= ["Segundo Elemento", "Tercer Elemento"];

Arrayelement.forEach(item => {
    const liarray= document.createElement("li");
    liarray.textContent=item;
    lista.appendChild(liarray);
});

//Crear varios elemtos y agregarlos a la lista con InnerHTML
const listainner= document.getElementById("innerlist");
const ArrayInner= ["Primer Inner", "Segundo Inner", "Tercer Inner"];

ArrayInner.forEach(Elemt=>{
    listainner.innerHTML+= `<li>${Elemt}</li>`;
});



const listafragmentada= document.getElementById("frangmentlist");
const Fragment = document.createDocumentFragment();
const Arrayfragment= ["Fragment 1","Fragment 2","Fragment 3"];

Arrayfragment.forEach(Obj=>{
    const lifrag= document.createElement("li");
    lifrag.textContent= Obj;
    Fragment.appendChild(lifrag);
})

listafragmentada.appendChild(Fragment);