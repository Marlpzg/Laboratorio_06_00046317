function ocurrenciasEn(num, arreglo){
    let contador = 0;
    for(let x of arreglo){
        if(x == num){
            contador++;
        }
    }
    return contador;
}