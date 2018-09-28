function sumables(a,b){
    if(a.length == b.length && a[0].length == b[0].length){
        return true;
    }
    return false;
}

function sumarMat(mA, mB){
    let mC = [];
    if(sumables(mA,mB)){
        for(let fila = 0; fila < mA.length; fila++){
            mC.push([]);
            for(let col = 0; col < mA[0].length; col++){
                mC[fila].push(mA[fila][col]+mB[fila][col]);
            }
        }
        return mC;
    }else{
        console.log("No es posible realizar la operación");
    }
}