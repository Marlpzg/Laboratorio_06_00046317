function sumProm(arreglo){
    let suma = 0.0;
    let contador = 0.0;

    for(let x of arreglo){
        suma += x;
        contador++;
    }

    console.log("Suma: "+suma);
    console.log("Promedio: "+ (suma/contador))
}