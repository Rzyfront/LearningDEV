// ! Manipular contador con addEventListener individualmente
// const btnAumentar= document.querySelector(".btn-info");
// const span= document.querySelector("span");
// let contador=0;

// btnAumentar.addEventListener("click", ()=>{
//     contador++;
//     span.textContent=contador;
// });

// const btnDismimnuir= document.querySelector(".btn-danger");

// btnDismimnuir.addEventListener("click", ()=>{
//     if (contador>0) {
//         console.log("holis")
//         contador--;
//         span.textContent=contador; 
//     }
// });


// ! Manipular contador con addEventListener delegando funciones.
const container = document.querySelector(".container");
const span= document.querySelector("span");
let contador=0;

container.addEventListener("click", e=>{
    if (e.target.classList.contains("btn-info")) {
        contador++;
        span.textContent=contador;
    }
    if (e.target.classList.contains("btn-danger")) {
        contador--;
        span.textContent=contador;
    }
    e.stopPropagation();
})

