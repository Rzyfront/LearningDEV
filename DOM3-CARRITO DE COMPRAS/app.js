// Consumir base de datos
const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
let carrito = {};

//Cuando el la pagina inicie Cargar los elemtos del DOM y ejecutar el fetch
document.addEventListener("DOMContentLoaded", ()=>{
    fetchData();
})

//Fetch async await
const fetchData = async()=>{
    try {
        // Guardamos en una const la respuesta de la direccion
        const res= await fetch("api.json");
        // guardamos los datos recibidos en json.
        const data = await res.json();
        // enviamos los datos a la funcion
        pintarCards(data);
    } catch (error) {
        // si algo falla mandamos el error por defecto del backend
        console.log(error);
    }
}

//Funcion para crear y pintar las tarjetas con objetos de la base de datos
const pintarCards = data =>{
    // recorremos la coleccion de objetos de la bd
    data.forEach(productos => {
        templateCard.querySelector("h5").textContent= productos.title;
        templateCard.querySelector("p").textContent= productos.precio;
        templateCard.querySelector("img").setAttribute("src", productos.thumbnailUrl)
        templateCard.querySelector(".btn-dark").dataset.id=productos.id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}

// Añadir objetos al carrito
items.addEventListener("click", e =>{
    addCarrito(e);
})

const addCarrito = e=>{
    serCarrito(e.target.parentElement);
    e.stopPropagation();
}

const serCarrito = objeto =>{
    console.log(objeto);
    const producto = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        title: objeto.querySelector(".btn-dark").textContent,
        precio: objeto.querySelector(".btn-dark").textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad= carrito[producto.id].cantidad +1;
    }
}