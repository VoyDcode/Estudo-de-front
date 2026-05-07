function soma(){
    let primeiroNumero = 20;
    let segundoNumero = 30;
    console.log(primeiroNumero + segundoNumero);
}
soma();
console.log("-------------------------------------------------------")

function multiplicacao(v1, v2){
    let resultado = v1 * v2;
    console.log(`O resultado da funcão é: ${resultado}`);
}

multiplicacao(2, 10);
console.log("-------------------------------------------------------")

function subtrair (valor1, valor2){
    return valor1 - valor2;
}

const resultadoFuncao = subtrair(8,4);
console.log(resultadoFuncao);
console.log("-------------------------------------------------------")

function porcentagemDeAlgo(valor1, valor2){
    return valor1 * valor2 / 100;
}

function porcentagemValorDesconto(valor1){
     return valor1 * 0.90; // Desconto de 10% já incluido (preço final, oque o cliente paga)
}

function porcentagemComDesconto(valor1){
    return valor1 * 0.10; //  Retorna quantos reais de desconto o cliente teve(que foi dado)
}

function calcularPrecoFinal(preco, desconto) {
    // Se o desconto for 10, (100 - 10) / 100 vira 0.90
    return preco * ( (100 - desconto) / 100);
}
console.log(calcularPrecoFinal(200, 15)); // 15% de desconto em 200
