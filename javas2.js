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

// let cadena = []; //lo que escribe el usuario se guarda en un array

// while (true) {
//   let texto = prompt("Ingresa una cadena de texto"); //le pide al usuario que ingrese un texto

//   if (texto==null) {
//     break;
//   }

//   cadena.push(texto);
// }

// let resultado = cadena.join("-");

// document.write(resultado);

//4------------------------------------------------------------------------------------------
// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


// let suma = 0;
// let continuar = true;

// while (continuar) {
//   let numero = prompt("Ingresa un número:");

//   if (numero === null) {
//     continuar = false;

//   } else if (isNaN(numero)) {
//     alert("Ingresa un numero valido");

//   } else {
//     suma = suma + Number(numero);
//   }
// }

// document.write(suma);


// 5---------------------------------------------------------------------------------------
// do{
//   let numero = parseInt(prompt("Ingrese un número de DNI, entre (0 y 99999999)"));
//   console.log(numero);
//   let resultado = numero % 23;
//   console.log(resultado);
//   if (numero >= 0 && numero <= 99999999){
  
//   switch(resultado){
//       case 0:
//           alert("La letra que corresponde a su DNI es la T, DNI ingresado: " + numero);
//           break;
//       case 1:
//           alert("La letra que corresponde a su DNI es la R, DNI ingresado: " + numero);
//           break;
//       case 2:
//           alert("La letra que corresponde a su DNI es la W, DNI ingresado: " + numero);
//           break;
//       case 3:
//           alert("La letra que corresponde a su DNI es la A, DNI ingresado: " + numero);
//           break;
//       case 4:
//           alert("La letra que corresponde a su DNI es la G, DNI ingresado: " + numero);
//           break;
//       case 5:
//           alert("La letra que corresponde a su DNI es la M, DNI ingresado: " + numero);
//           break;
//       case 6:
//           alert("La letra que corresponde a su DNI es la Y, DNI ingresado: " + numero);
//           break;
//       case 7:
//           alert("La letra que corresponde a su DNI es la F, DNI ingresado: " + numero);
//           break;
//       case 8:
//           alert("La letra que corresponde a su DNI es la P, DNI ingresado: " + numero);
//           break;
//       case 9:
//           alert("La letra que corresponde a su DNI es la D, DNI ingresado: " + numero);
//           break;
//       case 10:
//           alert("La letra que corresponde a su DNI es la X, DNI ingresado: " + numero);
//           break;
//       case 11:
//           alert("La letra que corresponde a su DNI es la B, DNI ingresado: " + numero);
//           break;
//       case 12:
//           alert("La letra que corresponde a su DNI es la N, DNI ingresado: " + numero);
//           break;
//       case 13:
//           alert("La letra que corresponde a su DNI es la J, DNI ingresado: " + numero);
//           break;
//       case 14:
//           alert("La letra que corresponde a su DNI es la Z, DNI ingresado: " + numero);
//           break;
//       case 15:
//           alert("La letra que corresponde a su DNI es la S, DNI ingresado: " + numero);
//           break;
//       case 16:
//           alert("La letra que corresponde a su DNI es la Q, DNI ingresado: " + numero);
//           break;
//       case 17:
//           alert("La letra que corresponde a su DNI es la V, DNI ingresado: " + numero);
//           break;
//       case 18:
//           alert("La letra que corresponde a su DNI es la H, DNI ingresado: " + numero);
//           break;
//       case 19:
//           alert("La letra que corresponde a su DNI es la L, DNI ingresado: " + numero);
//           break;
//       case 20:
//           alert("La letra que corresponde a su DNI es la C, DNI ingresado: " + numero);
//           break;
//       case 21:
//           alert("La letra que corresponde a su DNI es la K, DNI ingresado: " + numero);
//           break;
//       case 22:
//           alert("La letra que corresponde a su DNI es la E, DNI ingresado: " + numero);
//           break;
//       default:
//           alert("Ingresaste una opción errónea");
//       }
//   }
//   else{
//       alert("Ingresó un valor erróneo");
//   }
// }
// while(confirm("¿Desea ingresar un DNI?"));

// 6---------------------------------------------------------------
// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// for (let i = 0; i <= 30; i++) {

//   let aux = i + "";
//   console.log(aux.repeat(i));
// }

// 7----------------------------------------------------------------------------
// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma

// let ingreseNumero = prompt("ingrese un numero")

// for (let i = ingreseNumero ; i <= 50; i--) {

//   let aux = i + "";
//   console.log(aux.repeat(i));
// }

// 8------------------------------------------------------------------------------
// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

// let numero = parseInt(prompt("Ingrese el número final de la piramide invertida, (menor o igual a 50)."));

// if (numero >= 0 && numero <= 50) {

//   for (let i = 1; i <= numero; i++) {

//     for (let digito = 1; digito <= i; digito++) {

//       document.write(digito);
//     }
//     document.write("<br>");
//   }
// }
// else {
//   document.write("Número erróneo. Actualice la página e intente de nuevo.");
// }

//---------------------------------------------------------------------------------------------------
// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// for(let i= 1; i<=500; i++){
//   document.write(i);
//   if (i%4==0){
//       document.write("(Múltiplo de 4)");
//   }
//   if (i%9==0){
//       document.write("(Múltiplo de 9)");
//   }
//   if (i%5==0){
//       document.write("<br>")
//       document.write("-------------------");
//   }
//   document.write("<br>")

// }

