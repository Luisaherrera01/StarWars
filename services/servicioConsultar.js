export async function consultarPlanetas(){
    const URL = "https://swapi.dev/api/planets/1/"

    const PETICION = {
        method: "GET"
    }
    let respuesta=await fetch(URL,PETICION)
    let planetasEntregados=await respuesta.json()
    return planetasEntregados

}