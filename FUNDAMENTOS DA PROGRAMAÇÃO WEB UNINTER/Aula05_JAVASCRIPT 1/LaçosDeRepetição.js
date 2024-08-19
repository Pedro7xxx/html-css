//For
    //Executamos o for em situações em que sabemos quantas vezes executar o loop
//Sintaxe
    // for (inicialização; condição; incremento){
    //     bloco de código (faça isso)
    // }

//Exemplo
    // for(let i=0; i<10; i++){
    //     console.log(i);
    // }

//While
    //O loop while é um dos loops que normalmente usamos quando não sabemos exatamente quantas vezes repetir algo, mas sabemos quando parar.
        //Sintaxe
            // while (condição){
            //     bloco de código
    //Exemplo
        // let num=0
        // while(num<90){
        //     console.log(num);
        //     num+=10;    
        // }
    //Exemplo2
        // let continua=false;
        // let contador=1;
        // while(!continua){
        //     continua=!confirm(`[${contador++}] Mais um loop?`);
        // }

//Do...While
    //O loop do...while é muito semelhante ao loop while, a principal diferença é que em um loop while, a condição é verificada antes de cada interação, e no loop do...while, a condição é verificada após cada iteração.
        //Sintaxe
            // do {
            //     bloco de código
            // } while (condição);
    //Exemplo
        let num=0
        do {
            console.log(num);
            num+=10;
        } while (num-90)
