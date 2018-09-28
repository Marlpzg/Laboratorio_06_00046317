function filtrarArregloPorTipo(arreglo, tipo){
    let nuevoArreglo = [];
    for(let x of arreglo){
        if(typeof(x) == tipo.toLowerCase()){
            nuevoArreglo.push(x);
        }
    }
    return nuevoArreglo;
}