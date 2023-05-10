export async function consultarPlanetas(){
    const URL = "https://swapi.dev/api/planets/"

    const PETICION = {
        method: "GET"
    }
    let respuesta=await fetch(URL,PETICION)
    let planetasEntregados=await respuesta.json()
    return planetasEntregados

}

export async function consultarEspecies(){
    const URL = "https://swapi.dev/api/species/"

    const PETICION = {
        method: "GET"
    }
    let respuesta1=await fetch(URL,PETICION)
    let especiesEntregados=await respuesta1.json()
    return especiesEntregados

}