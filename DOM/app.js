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


const parrafo1= document.getElementById("parrafo1");
parrafo1.textContent="Texto desde JavaScrip"