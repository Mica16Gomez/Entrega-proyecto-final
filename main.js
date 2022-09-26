let nombre = "Micaela";
let pass = 1234;

let nombreUsuario = prompt("Ingrese nombre de usuario");



if (nombreUsuario === "Micaela") {
    console.log("nombre de usuario correcto");
    nombreUsuario = prompt("ingrese contraseña");
} else {
    nombreUsuario = prompt("Usuario incorrecto, intente nuevamente");
}

if (pass === 1234) {
    console.log("contraseña correcta");
    
} else {
    console.log("contraseña incorrecta. Intente nuevamente");
    
}
