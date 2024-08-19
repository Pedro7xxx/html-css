// O Browser Object Model (BOM) é um conjunto de objetos que permitem a interação entre JavaScript e o navegador.Ele fornece acesso as características do navegador, como janelas, histórico, cookies e muito mais.

    //Closed
        //A propriedade closed retorna o valor booleano true se a janela estiver fechada e false se estiver aberta
            // var janelaAberta = window.open('','','width=400','height=400');
            // function testarJanela(){
            //     if (janelaAberta.closed){
            //         alert('A Janela foi fechada');
            //     } else {
            //         alert('A janela está aberta');
            //     }
            // }

//History
    //O objeto history contém as URLS visitadas pelo usuário (na janela do navegador)
        // back() - Carrega a ULR anteriormente visitada
        // forward() - Carrega URL visitada depois da URL atual
        // go(n) - Admite número como parâmetro
        // length() -  Quantidade

    //Exemplo History
        //HTML
            // <button onclick="history.back()">Voltar</button>
            // <button onclick="history.foward()">Avançar</button>
            // <button onclick="history.go(2)">Avançar duas</button>

//Open
    //O metodo open() abre uma nova janela
        // function abreJanela() {
        //     novaJanela=window.open('https://google.com','_blank','width=400, height=400');
        // }

//Close
        //O metodo close() fecha uma janela.
            // function abreJanela() {
            //     novaJanela=window.open('https://google.com','_blank','width=400, height=400');
            // }

            // function fechaJanela(){
            //     novaJanela.close()
            // }

//Onload
    //O evento onload() ocorre quando uma página termina de ser carregada
        // window.onload = function(){
        //     document.forms[0].elements[0].value = 'Vitor Manuel';
        //     document.forms[0].elements[1].value = 'Pedrosa'
        // }