// criando a string 
let frase = "Javascript é uma linguagem de programação maravilhosa";
console.log(frase); 

console.log(frase.length); // Contagem de caracteres da string //

// percorrendo a string 
console.log(frase[0]); // Acessando o primeiro caractere da string //
console.log(frase[52]); // Acessando o ultimo caractere da string //
console.log(frase.slice(17, 26)); // Acessando uma parte da string //

// Métodos de string

// letras maiusculas
console.log(frase.toUpperCase()); // Convertendo a string para letras maiusculas //
// letras minusculas
console.log(frase.toLowerCase()); // Convertendo a string para letras minusculas //

// busar algo na string pelo inicio(do inicio para o fim)
console.log(frase.indexOf('p')); // Retorna o índice da primeira ocorrência do caractere 'p' na string //

// buscar algo na string pelo final(do final para o início)
console.log(frase.lastIndexOf('a')); // Retorna o índice da última ocorrência do caractere 'a' na string //

// verificar se existe um caractere ou palavra na string
console.log(frase.includes('maravilhosa')); // Verifica se a palavra 'maravilhosa' está presente na string e retorna true ou false, retornando booleano//

// Juntando strings
console.log(frase + " Eu adoro programar!"); // Concatenando a string com outra string usando o operador + //

// substituindo palavras na string
console.log(frase.replace('maravilhosa', 'incrível')); // Substituindo a palavra 'maravilhosa' por 'incrível' na string //
console.log(frase.replaceAll('a', 'o')); // Substituindo todas as ocorrências da letra 'a' por 'o' na string //

// pegar parte da string(substring)
console.log(frase.substring(17, 26)); // Retorna uma parte da string, do índice 17 ao 26 //
console.log(frase.slice(16,26)); // Retorna uma parte da string, do índice 16 ao 26 //

//  separando a string em um array de palavras
console.log(frase.split(' ')); // Divide a string em um array de palavras usando o espaço como separador, pegando a primeira letra de cada palavra

// retirando espaços das laterais da string
let fraseComEspacos = "   Javascript é uma linguagem de programação maravilhosa   ";
console.log(fraseComEspacos); // Exibindo a string com espaços em branco //
console.log(frase.trim()); // Remove os espaços em branco do início e do fim da string //

// verificando se a string começa ou termina com uma palavra específica
console.log(frase.startsWith('Javascript')); // Verifica se a string começa com a palavra 'Javascript' e retorna true ou false //
console.log(frase.endsWith('maravilhosa')); // Verifica se a string termina com a palavra 'maravilhosa' e retorna true ou false //