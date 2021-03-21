/*
CONSIGNA:
En un archivo separado de texto que debes crear, explica los siguientes conceptos.
> Variables
> Strings
> Funciones (argumentos, return)
> Declaraciones if
> Valores booleanos (true, flase)
*/


/*
VARIABLES:
Es la forma de asignar un valor de algo para usarlo más tarde.
Las variables más comunes son var, let, const, console.log y Math. (puede variar).
Para asignar un valor a una variable usamos el simbolo '='.
En los casos de 'console' y 'Math' podemos colocar variables y argumentos en medio de sus paréntesis. 
*/

var firstName = 'Katherine'; 
firstName;
//Imprime en pantalla: Katherine

let height = 1.55;           
height;
//Imprime en pantalla: 1.55. 'let' difiere de var con respecto el 'nivel de scope'.

const PI = 3.1416;
PI
//Imprime en pantalla: 3.1416. 'constant' es una variable fija que no se podrá modificar a lo largo de todo el código.

consonle.log('I am learning to code');  
//Imprime en pantalla: I am learning to code

Math.pow(2,4);               
//Imprime en pantalla: 16 (eleva el 2 a la 4)

Math.round(10.99);           
//Imprime en pantalla: 11 (redondea el valor al numéro más cercano)

Math.ceil(10.01);            
//Imprime en pantalla: 11 (redondea siempre hacia arriba sin importar el decimal que al entero).

Math.floor(10.99);           
//Imprime en pantalla: 10 (redondea siempre hacia abajo sin importar el decimal que al entero).


/*
STRINGS:
Los Strings son un 'Tipo de dato Informático' basado en el texto.
Para demostrar que es texto, colocaremos el bloque de texto entre comillas ('') o doble comillas ("").
Los strings pueden ser palabras individuales como "Katherine" o conjunto de palabras como "Katherine Leiva".
Si un número está entre comillas, se verá como un número, pero su ADN será el de un string.
*/
var firstName = 'Katherine'; //Este es un bloque de texto o string
var fullName = 'Katherine Alejandra Leiva Velarde'; //Esto también es un bloque de texto o string, solo que más largo.


/*
FUNCIONES:
Las funcions son sistemas que realizan una función a partir de lo que le programemos y nos ayudan a no repetir el mismo procedimiento repetidas veces.
Las funciones tienen una anatomia compuesta por el argumento que va entre parentesis y la función (proceso) que va entre las llaves
Ejemplo:
    function nombreDeFuncion(aquí iría el argumento) {
         Aquí iría la función.
    }
*/

//Ejemplo 1:
function nombreGato() {
    console.log('MioMio');
}

nombreGato();
//Imprime en pantalla: MioMio

//Ejemplo 2:
function saludarPersona(nombre) {
    console.log('Hola, mi nombre es ' + nombre);
}

saludarPersona('Katherine');
//Imprime en pantalla: Hola, mi nombre es Katherine

//Ejemplo 3:
function saludarPersona(nombre) {
    console.log('Hola, mi nombre es ' + nombre);
}

var apellido = 'Leiva';
saludarPersona(apellido);
//Imprime en pantalla: Hola, mi nombre es Leiva

//Ejemplo 4:
function sumaTresNumeros(a,b,c) {
    var suma = a+b+c;
    return suma;
}

sumaTresNumeros(1,2,3);
//Imprime en pantalla: 6

//Ejemplo 5:
function productoDosNumeros(x,y) {
    var producto = x/y;
    return producto;
}

var productoDeDosNumeros = productoDosNumeros(10,2);
console.log(productoDeDosNumeros);
//Imprime en pantalla: 5


/*
DECLARACIONES 'if':
Las declaraciones 'if' son las condiciones que nos ayudan a hacer un 'control flow' o 'control de flujo'.
Las declaraciones 'if' se determinan con un 'true' y 'false'.
Sin embargo pueden extenderse si sumamos otras condiciones como 'else if' y 'else'.
A continuación un ejemplo con cada caso mencionado.
*/

//Ejemplo 1:
function viajarAlEspacio(edad) {
    if (edad>20) {
        return true; //Si la edad es mayor a 20 años, se imprimirá en pantalla 'true'.
    }
    return false; //Si la edad es menor a 20 años, se imprimirá en pantalla 'false'.
}

viajarAlEspacio(25);
//Imprime en pantalla: true

//Ejemplo 2:
function buyComputer(salary) {
    if (salary>100000) {
        console.log('You can buy a computer');
    }   else {
        console.log('It is much better that you save money');
    }
}

buyComputer(14000);
//Imprime en pantalla: It is much better that you save money

//Ejemplo 3:
function travelAbroad(age) {
    if (age>=25) {
        console.log('You can also travel alone');
    } else if (age>23 & age<25) {
        console.log('You need to travel with someone else');
    }
    else {
        console.log('You are not ready to travel abroad');
    }
}

travelAbroad(25);
console.log('Thank you for asking!');
//Imprime en pantalla: You need to travel with someone else. Thank you for asking!


/*
VALORES BOOLEANOS:
Los valores booleanos nacen de la lógica de Boolie.
Este alimenta el corazón de la computación y los números binarios que son ceros y unos.
En la práctica de la programación, los valores booleanos se representan como 'true' y 'false'.
Siendo las declaraciones como 'if' las que nos permiten tomar estos valores.
*/

//Ejemplo 1:
if (a=1) {
    console.log('a vale 1');
} else if (a=2) {
    console.log('a vale 2');
} else {
    console.log('a no vale ni 1 ni 2');
}

var a = 1;
console.log('¡Gracias por participar!');
//Imprime en pantalla: a vale 1