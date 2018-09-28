function encriptar(cadena){
    let encriptado = "";
    for(let i = 0; i < cadena.length; i++){
        let caracter = "";
        switch(cadena[i].toLowerCase()){
            case "m":
                caracter = "0";
                break;
            case "u":
                caracter = "1";
                break;
            case "r":
                caracter = "2";
                break;
            case "c":
                caracter = "3";
                break;
            case "i":
                caracter = "4";
                break;
            case "e":
                caracter = "5";
                break;
            case "l":
                caracter = "6";
                break;
            case "a":
                caracter = "7";
                break;
            case "g":
                caracter = "8";
                break;
            case "o":
                caracter = "9";
                break;
            default:
                caracter = cadena[i].toLowerCase();
        }

        encriptado = encriptado+caracter;
    }
    return encriptado;
}