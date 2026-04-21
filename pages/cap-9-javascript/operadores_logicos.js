//criando variáveis
let firstValue = 50;
let secondValue = 10;
let result;

// Operador OU
result = (firstValue === secondValue) || (firstValue >= secondValue);
console.log(`O resultado da expressão é: ${result}`);

// Operador E
result = (firstValue === secondValue) && (firstValue >= secondValue);
console.log(`O resultado da expressão é: ${result}`);

// Operador Não
result = !((firstValue === secondValue) && (firstValue >= secondValue));
console.log(`O resultado da expressão é: ${result}`);