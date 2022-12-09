/*if(localStorage.getItem('LOGIN') == null || localStorage.getItem('LOGIN') == 'NO'){ 
    location.href = "../pages/iniciarsesion.html";
}*/

//SALIR DE LA SESION
const desloguear = document.getElementById(`desloguear`);
desloguear.addEventListener("click", () => {
    localStorage.setItem('LOGIN', 'NO');
    location.href = "../pages/iniciarsesion.html";
})





// SERVICIOS
const servicios = [
     // CEJAS Y PESTAÑAS
    {
        id: "cejas-01",
        titulo: "Microshading",
        imagen: "./multimedia/images/microshading.jpg ",
        categoria: {
            nombre: "Cejas y pestañas",
            id: "cejasYpestanias"
        },
        precio: 18800
    },

    {
        id: "cejas-02",
        titulo: "Lifting de Pestañas",
        imagen: "./multimedia/images/liftinghombre.jpg",
        categoria: {
            nombre: "Cejas y pestañas",
            id: "cejasYpestanias"
        },
        precio: 2800
    },
     {
        id: "cejas-03",
        titulo: "Lifting Nutritivo",
        imagen: "./multimedia/images/liftingdepestanas.jpg ",
        categoria: {
            nombre: "Cejas y pestañas",
            id: "cejasYpestanias"
        },
        precio: 2800
    },
    {
        id: "cejas-04",
        titulo: "Laminado y Perfilado",
        imagen: "./multimedia/images/laminado.jpg",
        categoria: {
            nombre: "Cejas y pestañas",
            id: "cejasYpestanias"
        },
        precio: 2500
    },
    {
        id: "cejas-05",
        titulo: "Henna",
        imagen: "./multimedia/images/cejashenna.jpg",
        categoria: {
            nombre: "Cejas y pestañas",
            id: "cejasYpestanias"
        },
        precio: 600
    },

   
 // FACIALES
    {
        id: "facial-01",
        titulo: "Tratamiento Ati-ojeras",
        imagen: "./multimedia/images/mascarilla.jpg",
        categoria: {
            nombre: "Faciales",
            id: "faciales"
        },
        precio: 3200
    },
    {
        id: "facial-02",
        titulo: "Limpieza de cutis",
        imagen: "./multimedia/images/limpiezadecutis.jpg",
        categoria: {
            nombre: "Faciales",
            id: "faciales"
        },
        precio: 3800
    },
    {
        id: "facial-03",
        titulo: "Radiofrecuencia facial",
        imagen: "./multimedia/images/radiofrecuenciafacial.jpg",
        categoria: {
            nombre: "Faciales",
            id: "faciales"
        },
        precio: 4000
    },
    {
        id: "facial-04",
        titulo: "Electroporación",
        imagen: "./multimedia/images/electroporacion.jpg",
        categoria: {
            nombre: "Faciales",
            id: "faciales"
        },
        precio: 3200
    },
    {
       id: "facial-05",
        titulo: "Peeling químico",
        imagen: "./multimedia/images/peelingquimico.jpg",
        categoria: {
            nombre: "Faciales",
            id: "faciales"
        },
        precio: 3200
    },

// DEPILACION
   
    {
        id: "depilacion-01",
        titulo: "Espalda completa",
        imagen: "./multimedia/images/zonaparahombres.jpg",
        categoria: {
            nombre: "Depilación",
            id: "depilacion"
        },
        precio: 90671
    },
    {
        id: "depilacion-02",
        titulo: "Pierna entera",
        imagen: "./multimedia/images/piernas.jpg",
        categoria: {
            nombre: "Depilación",
            id: "depilacion"
        },
        precio: 107429
    },
    {
        id: "depilacion-03",
        titulo: "Cavado",
        imagen: "./multimedia/images/cavado.jpg",
        categoria: {
            nombre: "Depilación",
            id: "depilacion"
        },
        precio: 34365
    },
    {
        id: "depilacion-04",
        titulo: "Bozo",
        imagen: "./multimedia/images/bozo.jpg",
        categoria: {
            nombre: "Depilación",
            id: "depilacion"
        },
        precio: 17390
    },
    {
        id: "depilacion-05",
        titulo: "Axilas",
        imagen: "./multimedia/images/axila.jpg",
        categoria: {
            nombre: "Depilación",
            id: "depilacion"
        },
        precio: 21944
    },
    {
        id: "depilacion-06",
        titulo: "Media pierna",
        imagen: "./multimedia/images/piernass.jpg",
        categoria: {
            nombre: "Depilación",
            id: "depilacion"
        },
        precio: 48771
    },

    {
        id: "depilacion-07",
        titulo: "Pectorales",
        imagen: "./multimedia/images/pechohombre.jpg",
        categoria: {
            nombre: "Depilación",
            id: "depilacion"
        },
        precio: 48150
    },

    // UÑAS
    {
        id: "unias-01",
        titulo: "Mantenimiento",
        imagen: "./multimedia/images/manosrosabrillos.jpg",
        categoria: {
            nombre: "Uñas",
            id: "unias"
        },
        precio: 3200 
    },
    {
        id: "unias-02",
        titulo: "Uñas esculpidas",
        imagen: "./multimedia/images/manosblancobrillos.jpg",
        categoria: {
            nombre: "Uñas",
            id: "unias"
        },
        precio: 3900
    },
    {
        id: "unias-03",
        titulo: "Esmalte semipermanente",
        imagen: "./multimedia/images/manosrosa.jpg ",
        categoria: {
            nombre: "Uñas",
            id: "unias"
        },
        precio: 1800
    },
    {
        id: "unias-04",
        titulo: "Esmalte permanente",
        imagen: "./multimedia/images/manosflores.jpg ",
        categoria: {
            nombre: "Uñas",
            id: "unias"
        },
        precio: 3200
    },
    {
        id: "unias-05",
        titulo: "Esculpidas con decoración",
        imagen: "./multimedia/images/manosflores.jpg",
        categoria: {
            nombre: "Uñas",
            id: "unias"
        },
        precio: 3700
    }

];

const contenedorServicios = document.querySelector("#contenedor-servicios");
const botonesCategorias = document.querySelectorAll(".boton__categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".servicio__agregar");
let botonAgregar = document.querySelectorAll(".favoritos1");
const numerito = document.querySelector("#numerito");

// FETCH a catalogo.json

fetch('./catalogo.json')
    .then((response) => response.json())
    .then((data) => console.log(data));




/*let ul = document.getElementById("contenedor-servicios");
async function perdirPosts() {
    const response = await fetch('./catalogo.json');
    const data = await response.json();
    data.results.forEach ((element) => {
        let li = document.createElement ('li');
        li.innerText = element.titulo;
        ul.append (li);
        
    })
}
perdirPosts(); */



// Mostrar los servicios
function cargarServicios (serviciosElegidos){
    contenedorServicios.innerHTML = "";

    serviciosElegidos.forEach (servicio => {

        const section = document.createElement ("section");
        section.classList.add("servicio");
        section.innerHTML = `
        <div class="contenedor1 hover " > 
                <img class=" servicio__imagen "
                    src="${servicio.imagen}" loading="lazy" alt="${servicio.titulo}"> 
                    
                    <div class="card-body servicios__detalles">
                        <h4 class="d-lg-block d-md-block d-sm-none d-none card-title servicio">${servicio.titulo}</h4>
                        <p class="d-lg-block d-md-block d-sm-none d-none card-text servicio__precio">$ ${servicio.precio} <button id=${servicio.id} class="corazon"><i class="favoritos1 bi bi-heart"></i></button>
                        <button class="servicio__agregar" id="boton${servicio.id}">Agregar</button>
                    </div> 
        </div>              
        `;
        contenedorServicios.append(section);

        // Toastify
        const boton = document.getElementById(`boton${servicio.id}`);
        boton.addEventListener("click", () => {
        Toastify({
            text: `${servicio.titulo} agregado al carrito!🛒🔥`,
            duration: 3000,
            gravity: "bottom",
            position: "right"
        }).showToast();
        
    })
    
    
    })

    actualizarBotonesAgregar();
}

cargarServicios(servicios);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const servicioCategoria = servicios.find (servicio => servicio.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = servicioCategoria.categoria.nombre;

            const serviciosBoton = servicios.filter(servicio => servicio.categoria.id === e.currentTarget.id);
            cargarServicios(serviciosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los servicios";
            cargarServicios(servicios);
        }
})
});

function actualizarBotonesAgregar () {
    botonesAgregar= document.querySelectorAll(".servicio__agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    });
}

let serviciosEnCarrito;

let serviciosEnCarritoLS = localStorage.getItem("servicios-en-carrito");
if (serviciosEnCarritoLS) {
    serviciosEnCarrito = JSON.parse(serviciosEnCarritoLS);
    actualizarNumerito();
} else {
    serviciosEnCarrito = [];
}

function agregarAlCarrito (e) {
    const idBoton = e.currentTarget.id;
    const servicioAgregado = servicios.find(servicio => `boton${servicio.id}` === idBoton);



    if(serviciosEnCarrito.some(servicio => `boton${servicio.id}` === idBoton)){
      const index =  serviciosEnCarrito.findIndex(servicio => `boton${servicio.id}` === idBoton);
      serviciosEnCarrito[index].cantidad++;

    } else{
        servicioAgregado.cantidad = 1;
        serviciosEnCarrito.push(servicioAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
};

function actualizarNumerito (){
    let nuevoNumerito = serviciosEnCarrito.reduce((acc, servicio) => acc + servicio.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}



