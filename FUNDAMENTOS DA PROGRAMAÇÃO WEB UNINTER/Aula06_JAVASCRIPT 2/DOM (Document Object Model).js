//O DOM Document Object Model é uma interface independente de plataforma e linguagem que permite aos programas e scripts acesssa e atualizar dinamicamente a estrutura o conteudo e a estilização de documentos (World Wide Web Consortium)

//getElement*
    //O método getElementById() acessa o elemento DOM identificando o id. ID é identificador único, exclusivo no documento
        //Exemplo

//getElementByClassName()
    //Retorna uma lista com todos os elementos que possuem o nome da classe dada

//getElementByTagName
    //O getElementByTagName retorna uma lista com todos os elementos da tag informada

//element.style
    //A propriedade style dos elementos do DOM permite que se definam regras de estilo. Sintaxe: el.style.prorpiedade="valor da propriedade"


// Exemplo - getElementById
    window.onload = function() {
        var Um = document.getElementById('def'); //Aqui selecionamos o id "def"
        var Dois = document.getElementById('tipo')//Aqui selecionamos o id "tipo"
            Um.style.backgroundColor='0cc';//Atribuímos uma cor de fundo
            Dois.style.border='2px solid #0000ff';//Aqui atribuímos uma borda
    }
