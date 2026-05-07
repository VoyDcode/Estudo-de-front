const simularValorPassagem = function (qtdAdultos, qtdCriancas, idaVolta){
    const PRECO_PASSAGEM = 1000;

    const valorAdulto = PRECO_PASSAGEM * qtdAdultos;

    const valorCrianca = (PRECO_PASSAGEM * qtdCrianca) * 0.5;

    if (idaVolta){
        return (valorAdulto + valorCrianca ) * 2;
    }
    else {
        return valorAdulto + valorCrianca;
    }

}

let valorPassagem = simularVaolrPassagem(2, 3, false);
console.log(`O valor total das passagems será de R$ ${valorPassagem.toFixed(2)}`);


let valorPassagem = simularVaolrPassagem(3, 0, true);
console.log(`O valor total das passagems será de R$ ${valorPassagem.toFixed(2)}`);