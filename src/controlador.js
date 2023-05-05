import { consultarPlanetas } from "../services/servicioConsultar.js"

let fila = document.querySelector("#fila")

consultarPlanetas()
.then(function(respuesta){
    console.log(respuesta)

   respuesta.results.forEach(function(planeta){

        let columna = document.createElement("div")
        columna.classList.add("col","mb-3")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let nombre = document.createElement("h4")
        nombre.classList.add("text-center", "fw-bold")
        nombre.textContent=planeta.name

        let clima = document.createElement("p")
        clima.classList.add("text-right","p-2", "pb-0")
        clima.innerHTML = "<strong>Clima: </strong>"+ planeta.climate

        let terreno = document.createElement("p")
        terreno.classList.add("text-right","p-2", "pb-0")
        terreno.innerHTML = "<strong>Terreno: </strong>" + planeta.terrain
        

            tarjeta.appendChild(nombre)
            tarjeta.appendChild(terreno)
            tarjeta.appendChild(clima)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
    })

})
