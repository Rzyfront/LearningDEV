//Consumir api publica de nombres de pokemon y pintandola en pantalla.


const container = document.querySelector(".container");

//Fech para consumir api por su URL
fetch("https://pokeapi.co/api/v2/pokemon/")
//promesa en la que se espera la data
.then( res => res.json())
//promesa donde se guarda la data para utilizarla
.then( data => {
    data.results.forEach(element => {
        const h2= document.createElement("h2");
        h2.textContent=element.name;
        container.appendChild(h2);
    });
})
// si las promesas fallan catch da el error que tenga por defecto la api
.catch((err) => console.log(err));


// Async Await
const container2 = document.querySelector(".container2");

const obtenerPokemones = async()=>{
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await res.json();
        data.results.forEach(element=>{
        const h2 = document.createElement("h2");
        h2.textContent=element.name;
        container2.appendChild(h2);
        })
    } catch (error) {
        console.log("!!!"+ error);
    }

}
obtenerPokemones();

