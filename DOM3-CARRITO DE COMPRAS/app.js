// Seleccion de elementos de HTML para dinamizar
const cards = document.getElementById('cards');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const templateCarrito = document.getElementById('template-carrito').content;
const templateFooter = document.getElementById('template-footer').content;
const items = document.getElementById('items');
const footer = document.getElementById('footer');
let carrito = {};

// Consumir base de datos

//Cuando el la pagina inicie Cargar los elemtos del DOM y ejecutar el fetch
document.addEventListener("DOMContentLoaded", ()=>{
    fetchData();
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        pintarCarrito();
    };
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
    cards.appendChild(fragment);
}

// Añadir objetos al carrito
cards.addEventListener("click", e =>{
    addCarrito(e);
})

const addCarrito = e=>{
    serCarrito(e.target.parentElement);
    e.stopPropagation();
}

const serCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        title: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad= carrito[producto.id].cantidad +1;
    }

    carrito[producto.id]= {...producto};
     pintarCarrito();
}

  const pintarCarrito = () =>{
      // !Vaciar Template Items antes de agregar uno nuevo
      items.innerHTML="";
    // !Object values para porder usar funcioner de Array en objetos
      Object.values(carrito).forEach(producto =>{
          templateCarrito.querySelector("th").textContent=producto.id;
          templateCarrito.querySelectorAll("td")[0].textContent=producto.title;
          templateCarrito.querySelectorAll("td")[1].textContent=producto.cantidad;
          templateCarrito.querySelector("span").textContent=producto.precio*producto.cantidad;
          templateCarrito.querySelector(".btn-info").dataset.id=producto.id;
          templateCarrito.querySelector(".btn-danger").dataset.id=producto.id;
          const clone = templateCarrito.cloneNode(true);
          fragment.appendChild(clone);
      })
      items.appendChild(fragment);
      pintarFooter();
      localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  const pintarFooter = ()=>{
    // Vaciamos el footer antes de usarlo
    footer.innerHTML ='';
    if (Object.keys(carrito).length===0) {
        footer.innerHTML ='<th scope="row" colspan="5">Carrito Vacío - Comience a Comprar</th>';
        return;
    }

    const totalProductos = Object.values(carrito).reduce((acc,{cantidad})=>acc+cantidad, 0);
    const totalPrecio = Object.values(carrito).reduce((acc,{cantidad,precio})=>acc+cantidad*precio,0);

    templateFooter.querySelectorAll('td')[0].textContent= totalProductos;
    templateFooter.querySelector('span').textContent=totalPrecio;

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    const btnVaciar = document.getElementById('vaciar-carrito');
    btnVaciar.addEventListener('click', ()=>{
        carrito={};
        pintarCarrito();
    })

  }

  //Accion de botones de items
  items.addEventListener('click', e =>{
    btnAccion(e);
  })

  const btnAccion = e =>{
    //Accion aumentar
    if (e.target.classList.contains('btn-info')) {
         const producto = carrito[e.target.dataset.id];
         producto.cantidad=carrito[e.target.dataset.id].cantidad+1;
         carrito[e.target.dataset.id]= {...producto};
         pintarCarrito();
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id];
        producto.cantidad=carrito[e.target.dataset.id].cantidad-1;
        carrito[e.target.dataset.id]= {...producto};
        if (producto.cantidad===0) {
            delete carrito[e.target.dataset.id];
        }
        pintarCarrito();
   }
   e.stopPropagation();
  }