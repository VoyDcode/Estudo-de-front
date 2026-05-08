// funcao que calcula o desconto em um produto

function calcularDesconto(preco, porcentagemDesconto) {
    const desconto = preco * (porcentagemDesconto / 100);
    return preco - desconto;
}

// funcao que recebe o preço e a porcentagem de desconto, e uma função de callback para exibir o resultado

function calcularPrecoFinal(preco, porcentagemDesconto, callback) {
    const precoFinal = callback (preco, porcentagemDesconto); // aqui ele está chamando os parametros que vao ser usados
    console.log(`O preço final: R$ ${precoFinal.toFixed(2)}`);
}

// chamando a funcao passando os parametros e a funcao de callback
calcularPrecoFinal(100, 20,calcularDesconto); // retorna 80
calcularPrecoFinal(5670, 20,calcularDesconto); // retorna 4536

