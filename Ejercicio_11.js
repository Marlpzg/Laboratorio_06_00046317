var usuarios = [];

function agregarUsuario(nom, ape, fecha, tel, correo){
    usuarios.push({
        Nombre: nom,
        Apellido: ape,
        Fecha_Nacimiento: fecha,
        Telefono: tel,
        Correo: correo
    });

    return usuarios;
}