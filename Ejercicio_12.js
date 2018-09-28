function mostrarMenu(){
    return opcion = prompt("¿Qué desea hacer?\n 1-Ingresar una persona.\n 2-Buscar una persona. \n 3-Modificar una persona.\n 4-Eliminar una persona.\n 5-Mostrar todas las personas.\n 6- Salir.");
}

function agregarUsuario(){
    let nom, ape, fecha, tel, correo;
    alert("Bienvenido al formulario de registro de usuario, por favor llene los datos que se le soliciten.")
    nom = prompt("Ingrese el nombre.");
    ape = prompt("Ingrese el apellido.");
    fecha = prompt("Ingrese la fecha de nacimiento.");
    tel = prompt("Ingrese el número de teléfono.");
    correo = prompt("Ingrese el correo electrónico.");
    
    usuarios.push({
        Nombre: nom,
        Apellido: ape,
        Fecha_Nacimiento: fecha,
        Telefono: tel,
        Correo: correo
    });

    alert("Se ha registrado a la persona.");
    console.log(usuarios);
}

function iniciarPrograma(){
    var usuarios = [];
    while(true){
        let val = mostrarMenu();
        if(val != 6){
            switch(val){
                case "1":
                    agregarUsuario();
                    break;
                case "2":
                    break;
                case "3":
                    break;
                case "4":
                    break;
                case "5":
                    break;
                default:
                    alert("Por favor ingrese un dato válido.")
            }
        }else{
            alert("¡Hasta pronto!");
            break;
        }
    }
}