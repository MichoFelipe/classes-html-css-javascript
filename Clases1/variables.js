// ASIGNACIÓN
var x = 10;
var y = 15;

var z = x * y;

var w = "byte";
console.log(z);
document.write(z);

// DATA TYPE

// NUMEROS
var price = 55.5;
console.log(price);

// STRING
var nombre = "John";
var apellido = "Smith";
var nombre_completo = nombre + " " + apellido;
document.write("<br></br>");
document.write(nombre_completo);

// BOOLEANS
var viaje = true;
var colegio = false;
console.log(viaje);
console.log(colegio);

// OPERADORES MATERMÁTICOS
var suma = 10 + 2;
var resta = 10 - 2;
var multiplica = 10 * 2;
var divide = 10 / 2;
var resto = 10 % 2;
suma++;
resta--;

console.clear();
console.log(suma);
console.log(resta);
console.log(multiplica);
console.log(divide);
console.log(resto);
console.log(suma);
console.log(resta);

console.clear();
console.log("suma: " + suma);
console.log("suma derecha: " + suma++);
console.log("nueva suma: " + suma);
console.log("suma izquierda: " + ++suma);
console.log("nueva suma 2: " + suma);

// ASSIGNMENT OPERATIONS
var num1 = 10;
var num2 = 4;
// x = y
// += equals to x+=y -> x = x + y;
// -= equals to x-=y -> x = x - y;
// *= equals to x*=y -> x = x * y;
// /= equals to x/=y -> x = x / y;
var num3 = 7;
num3 += num1;
console.clear();
console.log("num 3: " + num3);

// COMPARISON OPERATORS
// Ejemplos: ==, ===, !=, >, >=, <, <=
var nuevoNum = 10;
console.clear();
console.log(nuevoNum == 8);

// LOGICAL OPERATIONS
// Ejemplos: &&, ||, !
console.clear();
console.log(5 > 2 && 3 < 8);
console.log(5 < 2 && 3 < 8);
console.log(5 > 2 || 3 < 8);
console.log(!(5 < 2));
// Operador terniario
// variable = (condition) ? value1: value2
var age = 19;
var eresAdulto = age < 18 ? "Eres demasiado joven" : "Eres adulto";
console.clear();
console.log("¿Eres Adulto? " + eresAdulto);
