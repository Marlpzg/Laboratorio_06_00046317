var usuarios = [];

function mostrarMenu(){
    return opcion = prompt("¿Qué desea hacer?\n 1-Ingresar una persona.\n 2-Buscar una persona. \n 3-Modificar una persona.\n 4-Eliminar una persona.\n 5-Mostrar todas las personas.\n 6- Salir.");
}

function agregarUsuario(){
    let nom, ape, fecha, tel, correo;
    alert("Bienvenido al formulario de registro de usuario, por favor llene los datos que se le soliciten.");
    nom = prompt("Ingrese el nombre.");
    ape = prompt("Ingrese el apellido.");
    fecha = prompt("Ingrese la fecha de nacimiento.");
    tel = prompt("Ingrese el número de teléfono.");
    while(true){
        correo = prompt("Ingrese el correo electrónico.").toLowerCase();
        for(let x of usuarios){
            if(x.Correo == correo){
                correo = null;
                break;
            }
        }
        if(correo != null){
            break;
        }else{
            alert("Ese correo ya ha sido registrado.");
        }
    }
    
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

function modificarUsuario(){
    let codigo, usuario;
    alert("Bienvenido al formulario de edición de usuario, por favor llene los datos que se le soliciten.");
    codigo = prompt("Ingrese el código del usuario que modificará.");
    if(codigo >= 0 && codigo < usuarios.length){
        usuario = usuarios[codigo];
        usuario.Nombre = prompt("Ingrese el nombre.",usuario.Nombre);
        usuario.Apellido = prompt("Ingrese el apellido.", usuario.Apellido);
        usuario.Fecha_Nacimiento = prompt("Ingrese la fecha de nacimiento.", usuario.Fecha_Nacimiento);
        usuario.Telefono = prompt("Ingrese el número de teléfono.", usuario.Telefono);
        while(true){
            correo = prompt("Ingrese el correo electrónico.",usuario.Correo).toLowerCase();
            if(correo != usuario.Correo){
                for(let x of usuarios){
                    if(x.Correo == correo){
                        correo = null;
                        break;
                    }
                }
                if(correo != null){
                    break;
                }else{
                    alert("Ese correo ya ha sido registrado.");
                }
            }else{
                break;
            }
        }
        usuario.Correo = correo;

        alert("Se ha terminado de editar a la persona.");
        console.log(usuarios);
    }else{
        alert("No se ha ingresado un código válido.");
    }
}

function eliminarUsuario(){
    let codigo, usuario, conf;
    alert("Bienvenido al formulario de borrado de usuario, por favor llene los datos que se le soliciten.");
    codigo = prompt("Ingrese el código del usuario que eliminará.");
    if(codigo >= 0 && codigo < usuarios.length){
        usuario = usuarios[codigo];
        
        alert("A continuación se le mostrará el usuario que ha seleccionado.");

        alert(buscarUsuario(usuario.Correo));

        conf = confirm("¿Desea eliminarlo?");

        if(conf){
            alert("Se ha eliminado a la persona.");
            usuarios.pop(codigo);
        }else{
            alert("No se realizaron cambios.");
        }
        console.log(usuarios);
    }

}

function buscarUsuario(correo){
    
    for(let x of usuarios){
        if(x.Correo == correo){
            let msg = "";
            msg = msg + "Código: " + usuarios.indexOf(x) + "\n";
            msg = msg + "Nombre: " + x.Nombre + " " + x.Apellido + "\n";
            msg = msg + "Fecha de Nacimiento: " + x.Fecha_Nacimiento + "\n";
            msg = msg + "Teléfono: " + x.Telefono + "\n";
            msg = msg + "Correo: " + x.Correo + "\n";
            return msg;
        }
    }
    return "El usuario especificado no se ha encontrado.";
}

function verUsuarios(){
    alert("A continuación se le mostrarán todas las fichas de las personas registradas.");
    for(let x of usuarios){
        let msg = "";
        msg = msg + "Código: " + usuarios.indexOf(x) + "\n";
        msg = msg + "Nombre: " + x.Nombre + " " + x.Apellido + "\n";
        msg = msg + "Fecha de Nacimiento: " + x.Fecha_Nacimiento + "\n";
        msg = msg + "Teléfono: " + x.Telefono + "\n";
        msg = msg + "Correo: " + x.Correo + "\n";
        alert(msg);
    }
}

function iniciarPrograma(){
    while(true){
        let val = mostrarMenu();
        if(val != 6){
            switch(val){
                case "1":
                    agregarUsuario();
                    break;
                case "2":
                    alert("Por favor llene los datos que se le soliciten para buscar su resultado.");
                    let correoB = prompt("Ingrese el correo del usuario.").toLowerCase();
                    alert(buscarUsuario(correoB));
                    break;
                case "3":
                    modificarUsuario();
                    break;
                case "4":
                    eliminarUsuario();
                    break;
                case "5":
                    verUsuarios();
                    break;
                default:
                    alert("Por favor ingrese un dato válido.");
            }
        }else{
            alert("¡Hasta pronto!");
            break;
        }
    }
}
