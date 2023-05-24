// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// 1- Un prompt que pida la edad
// 2- Un if 
// 3- si es true lanzar una alert/document.write
// 4- un else si no es valida que mande otro alert/document.write


// let edad=prompt("Escriba su edad")
// edad=parseInt(edad);

// if (edad>17) {
//     console.log("Ya puede conducir")
// }

// else{
//     console.log("No puede manejar");
// }


// 2----------------------------------------------------------------------------------------------------------------------

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// let nota = parseInt(prompt("Escriba un numero de 0 a 10"))

// switch (nota) {
//     case 0:
//     case 1:
//     case 2:
//         document.write("Muy deficiente")
//         break;

//     case 3:
//     case 4:
//         document.write("Insuficiente")
//         break;

//     case 5:
//     case 6:
//         document.write("Suficiente")
//         break;

//     case 7:
//         document.write("Bien")
//         break;

//     case 8:
//     case 9:
//         document.write("Notable")
//         break;


//     case 10:
//         document.write("Sobresaliente")
//         break;

//     default:
//         document.write("ingrese un numero valido")
//         break;
// }

// 3-----------------------------------------------------------------------------------------------------------------------

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadena = []; //lo que escribe el usuario se guarda en un array

while (true) {
  let texto = prompt("Ingresa una cadena de texto"); //le pide al usuario que ingrese un texto
  
  if (texto==null) {
    break;
  }
  
  cadena.push(texto);
}

let resultado = cadena.join("-");

document.write(resultado);






