function contarPorTipo(arreglo){
    let tipos = [];
    let cantidades = [];

    for(let x of arreglo){
        if(tipos.includes(typeof(x))){
            cantidades[tipos.indexOf(typeof(x))]++;
        }else{
            tipos.push(typeof(x));
            cantidades.push(1);
        }
    }

    for(let i = 0; i < tipos.length; i++){
        console.log(tipos[i]+": "+cantidades[i]);
    }
    
}