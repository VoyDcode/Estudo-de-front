//criando variáveis
let firstValue = 50;
let secondValue = 50;
let result;

// maior que
result = (firstValue > secondValue);
console.log(`${firstValue} > ${secondValue} = ${result}`);

//menor que
result = (firstValue < secondValue);
console.log(`${firstValue} < ${secondValue} = ${result}`);

// maior ou igual a
result = (firstValue >= secondValue);
console.log(`${firstValue} >= ${secondValue} = ${result}`);

// menor ou igual a
result = (firstValue <= secondValue);
console.log(`${firstValue} <= ${secondValue} = ${result}`);

// igual a
result = (firstValue == secondValue);
console.log(`${firstValue} == ${secondValue} = ${result}`);

// diferente de
result = (firstValue != secondValue);
console.log(`${firstValue} != ${secondValue} = ${result}`);

// convertendo o segundo valor em uma string
secondValue = '50';

// estritamente igual a
result = (firstValue === secondValue);
console.log(`${firstValue} === ${secondValue} = ${result}`);

// estritamente diferente de
result = (firstValue !== secondValue);
console.log(`${firstValue} !== ${secondValue} = ${result}`);