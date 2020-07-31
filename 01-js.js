
function welcome() 
{
var mensaje;
var opcion = prompt("Introduzca su nombre:", "Rebe");
 
if (opcion == null || opcion == "") {
        mensaje= "Has cancelado o introducido el nombre vacío";
        } else {
            mensaje = "Hola " + opcion;
            }
            document.getElementById("demo").innerHTML = mensaje;
}