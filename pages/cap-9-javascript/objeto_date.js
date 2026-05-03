//instanciando o método construtor
const dataAtual = new Date();

//exibindo o objeto
console.log(`Data atual: ${dataAtual}`);

//milisegundos
console.log(`Milisegundos: ${dataAtual.getTime()}`);

//dia da semana
console.log(`Dia da semana: ${dataAtual.getDay()+1}`);

//dia do mês
console.log(`Dia do mês: ${dataAtual.getDate()}`);

//mês
console.log(`Mês atual: ${dataAtual.getMonth()+1}`);

//ano
console.log(`Ano atual: ${dataAtual.getFullYear()}`);

//hora
console.log(`Hora: ${dataAtual.getHours()}`);

//minutos
console.log(`Minutos: ${'0'+ dataAtual.getMinutes()}`);

//segundos
console.log(`Segundos: ${dataAtual.getSeconds()}`);

//milisegundos
console.log(`Milisegundos: ${dataAtual.getMilliseconds()}`);