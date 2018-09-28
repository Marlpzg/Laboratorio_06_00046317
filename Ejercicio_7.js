function incerteza(promedio, cantidad, mediciones){
    let sumatoria = 0;
    for(let x of mediciones){
        sumatoria += Math.pow((x-promedio),2);
    }

    return Math.sqrt((1/(cantidad-1))*sumatoria);
}

function promedio(mediciones){
    let suma = 0.0;
    let contador = 0.0;
    let promedio = 0.0;

    for(let x of mediciones){
        suma += x;
        contador++;
    }

    promedio = suma/contador;
    return "x = "+(Math.round(promedio*10)/10)+" ± "+(Math.round(incerteza(promedio, contador, mediciones)*10)/10);

}