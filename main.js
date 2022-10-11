usuario = prompt("Ingrese nombre de usuario"); 
    pass = prompt("Ingrese contraseña");

function validar()
{
    let usuario = document.getElementById("usuario").value;
    let Contraseña = document.getElementById("pass").value;	

    

    if(usuario == "Mica" && pass == "1234")
    {
        alert("Usuario y Contraseña validos");
    }
    else
    {
        alert("Usuario o contraseña incorrectos. Intente nuevamente");
    }
}