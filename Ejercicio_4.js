function sumarExtremos(arreglo){
    sumas = [];
    for(let i = 0; i < Math.round(arreglo.length/2); i++){
        sumas.push(arreglo[i]+arreglo[arreglo.length-1-i]);
    }
    return sumas;
}