if (condição){
    //Bloco de código a ser executado se a condição for verdadeira
}

//Exemplo IF
    // let pecaPreco=10;
    // let pecas=prompt("Qual a quantidade de peças encomendadas?")
    // if(pecas>0){
    //     let total=pecaPreco*pecas;
    //     console.log(total);
    // }

//Exemplo Else
    // let seEstaPronto=confirm("Está pronto?");
    // if (seEstaPronto){
    //     console.log("Usuário pronto");
    // }else{
    //     console.log("Usuário não está pronto");
    // }

//Estrutura if...else...if
    if (condição_1){
        codigo
    } else if (condição_2){
        codigo
    } else if (condição_3){
        codigo
    } else {
        codigo
    }

//Exemplo2
    let idade=prompt("Qual sua idade?")
    if(idade<=11){
        alert("Você é uma criança!")
    } else if (idade>11 && idade<=14){
        alert("Você é adolescente!")
    } else if (idade>21 && idade<=60){
        alert("Você é adulto!")
    } else{
        alert("Você é idoso!")
    }

