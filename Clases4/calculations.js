const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4); // Arredonda valor para arriba y para abajo
val = Math.ceil(2.4); // Arredonda valor para arriba
val = Math.floor(2.8); // Arredonda valor para abajo
val = Math.sqrt(64); // raiz quadrada
val = Math.abs(-3); // valor absoluto (siempre positivo)
val = Math.pow(8, 2); //numero elevado a tanto
val = Math.min(2, 33, 5, 6, 22, 34, -2); // menor numero
val = Math.max(2, 33, 5, 6, 22, 34, -2); // mayor numero
val = Math.random(); // número decimal aleatório

val = Math.floor(Math.random() * 20 + 1);

console.log(val);
