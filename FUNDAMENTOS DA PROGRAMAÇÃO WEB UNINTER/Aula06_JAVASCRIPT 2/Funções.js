//Conceito - Função
    //Funções - sintaxe
        // function nome([param[,param[,...param]]]){
        //     instruções
        // }
    //nome: é o da função
    //param: o nome de um argumento a ser passado para a função

//exemplo
//     function olaMundo() {
//         console.log('Ola');
//         console.log('Mundo');
//     }
// olaMundo()

//Função - return
    //exemplo
//         console.log('mensagem A');
//         return;
//         console.log('mensagem B');
// }
// mostrarMsg()
    
// function mostrarMsg(){
//     console.log('Mensagem A');
//     return;
//     console.log('Mensagem B');
// }
// mostarMsg();

//Parâmetros da função
    //Sintaxe
        // function somar(num1, num2) {
        //     return num1 +num2;
        // }
        // somar (35,2);

//Função arrow
    //Sintaxe
        let somar=(n1,n2) =>n1+n2;
        console.log(somar(2,3));
