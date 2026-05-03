const precoProduto = 150.00;
const frete = 30.00;
let valorFinal = 0;

if (precoProduto <= 150) {
    valorFinal = precoProduto + frete;
}
else{
    valorFinal = precoProduto;
}

console.log(`o valor a pagar é ${valorFinal}`);

let metodoPagamento = 'Cartão de Crédito';

if(metodoPagamento === 'Cartão de Crédito'){
    console.log('Você pode pagar em até 12x');
}else if (metodoPagamento === 'Boleto'){
    console.log('Voce tem 5% de desconto');
}else if(metodoPagamento === 'Pix'){
    console.log('Você tem um desconto de 10%');
}else{
    console.log('Dirija-se a uma unidade proxima para pagamento em dinheiro.');
}

let estoque = 5;
let statusEstoque = (estoque > 0) ? 'Produto Disponivel' : 'Produto indisponivel';
console.log(`Total estoque = ${estoque}, status: ${statusEstoque}`);


console.log('-----------------------------------')
console.log('                                   ')

let carrinho = 200;
let orcamento = 300;
let statusPedido;


if (carrinho <= orcamento && metodoPagamento === 'Cartão de Crédito'){
    statusPedido = true;
    
}else if (carrinho <= orcamento && metodoPagamento === 'Pix'){
    statusPedido = true;
    
}else{
    statusPedido = false;
    console.log("Erro");
}

let orcamentoFinal = (statusPedido === true) ? 'Aprovado' : 'Recusado';

console.log(`Status do orçamento -> ${orcamentoFinal}`);

console.log('-----------------------------------')
console.log('                                   ')

const numeroSorteado = Math.floor(Math.random() * 100);

console.log(`Número sorteado: ${numeroSorteado}`);

if (numeroSorteado % 2 === 0){
    console.log(`O número ${numeroSorteado} é par!!!`);
}
else {
    console.log(`O número ${numeroSorteado} é ímpar!!!`);
}