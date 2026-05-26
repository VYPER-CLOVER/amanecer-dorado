import {BD} from "./BD"

function TraerDatos(Datos) {

    let Contenedor = document.querySelector('.contenedor')
    Contenedor.innerHTML = "";

    Datos.forEach(i => {
        let ContenedorAux = document.createElement('div')
        ContenedorAux.className = 'Tarjetas'

        ContenedorAux.innerHTML=
        `
            <h1>${i.Nombre}</h1>
            <h2>$${i.Precio}</h2>
            <h3>Cantidad: ${i.Stock}</h3>
            <p>${i.Descripcion}</p>
            <img src="${i.Imagen}" alt="img">
        `
        Contenedor.appendChild(ContenedorAux)
    });

}

TraerDatos(DB)