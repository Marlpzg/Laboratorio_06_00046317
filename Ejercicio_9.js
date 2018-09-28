function crearArreglo(n){
    let arreglo = [];
    for(let i = 0; i < n; i++){
        arreglo.push(Math.floor(Math.random() * 100) + 1);
    }
    return arreglo;
}

function adivinar(num){
    let arreglo = crearArreglo(20);
    console.log(arreglo);
    if(arreglo.includes(num)){
        console.log("¡Has ganado!");
    }else{
        console.log("¡Has perdido!");
    }
}