// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Katherine';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 25;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var string =  str;
  return string;
}
devolverString('Esto es un string');

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var sumar = x + y;
  return sumar;
}
suma(10, 15);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var restar = x - y;
  return restar;
}
resta(1100, 100);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplicar = x * y;
  return multiplicar;
}
multiplica(10, 10);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var dividir = x / y;
  return dividir;
}
divide(25, 5);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
sonIguales(10, 15);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}
tienenMismaLongitud('Katherine', 'Leiva');

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}
menosQueNoventa(89);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}
mayorQueCincuenta(25);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x % y;
  return resto;
}
obtenerResto(21, 5);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
esPar(10);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
esImpar(11);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var elevarCuadrado = num ** 2;
  return elevarCuadrado;
}
elevarAlCuadrado(10);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var elevarCubo = num ** 3;
  return elevarCubo;
}
elevarAlCubo(10);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var elevarNuevoExponente = num ** exponent;
  return elevarNuevoExponente;
}
elevar(5, 2);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondeo = Math.round(num);
  return redondeo;
}
redondearNumero(10.99999);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondeoArriva = Math.ceil(num);
  return redondeoArriva;
}
redondearHaciaArriba(10.0001);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var random = Math.random();
  return random;
}
numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return 'Es positivo';
  } else if (numero < 0) {
    return 'Es negativo';
  } else {
    return false;
  }
}
esPositivo(10000000);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var fraseCompleta = str + '' + '!';
  return fraseCompleta;
}
agregarSimboloExclamacion('Hola');

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombreApellido = nombre + ' ' + apellido;
  return nombreApellido;
}
combinarNombres('Katherine','Leiva');

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var fraseSaludo = 'Hola' + ' ' + nombre + '!';
  return fraseSaludo;
}
obtenerSaludo('Katherine');

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var areaRectangulo = alto * ancho;
  return areaRectangulo;
}
obtenerAreaRectangulo(10, 9);

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetroCuadrado = lado * 4;
  return perimetroCuadrado;
}
retornarPerimetro(10);

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}
areaDelTriangulo(5,3);

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var cambioAdolar = euro * 1.20;
  return cambioAdolar;
}
deEuroAdolar(10);

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length > 1) {
    return 'Dato incorrecto';
  } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es vocal';
  } else {
    return false;
  }
}
esVocal ('a');


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
