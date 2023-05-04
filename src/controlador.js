import { consultarPlanetas } from "../services/servicioConsultar.js"

let fila = document.querySelector("#fila")

consultarPlanetas()
.then(function(respuesta){
    console.log(respuesta)

   respuesta.results.forEach(function(planeta){

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let nombre = document.createElement("h1")
        nombre.classList.add("text-center", "fw-bold")
        nombre.textContent=planeta.name

        let clima = document.createElement("h4")
        clima.classList.add("test-center")
        clima.textContent=clima.climate

            tarjeta.appendChild(nombre)
            tarjeta.appendChild(clima)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
    })

})
