// Criando uma contagem com for

for (let i = 0; i <= 10; i++){
    console.log(i);
}


for (numero= 0; numero <= 20; numero++){
    console.log(`Valor da variavel numero na repetição: ${numero}`);
}

console.log(" ")
console.log(" ")

for (let tabuada = 0; tabuada <= 10; tabuada++){
    console.log(`tabuada do ${tabuada}`);

    for(let contaTabuada = 0; contaTabuada <= 10; contaTabuada++){
        console.log(`${tabuada} X ${contaTabuada} = ${tabuada * contaTabuada}`);
    }
    console.log("----------------------------------------")
}