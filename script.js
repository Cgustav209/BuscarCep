
const campoCep = document.querySelector('#cep'); // para puxar id do input coloco "#"
const btnBuscar = document.querySelector('#btnBuscar');

const campoLogradouro = document.querySelector('#logradouro');
const campoBairro = document.querySelector('#bairro');
const campoCidade = document.querySelector('#cidade');
const campoEstado = document.querySelector('#estado');

//async é para indicar q é uma função assincrona
    async function buscarCep() {

        const cep = campoCep.value.replace(/\D/g, ''); // replace() para retirar os caracteres que não são números
        //  "``" é para indicar que é uma template string q serve para montar a url 
        //  "${valor}" ou "+ valor +" serve para inserir o valor da variável dentro da string
        const url = `https://viacep.com.br/ws/${cep}/json/`; 
    

        //await é para esperar a resposta da requisição antes de continuar a execução do código, ou seja, ele pausa a execução da função até que a resposta seja recebida
        //fetch() é para fazer a requisição para a url e obter a resposta, ele retorna uma promessa (Promise) que é resolvida quando a resposta é recebida
        const resposta = await fetch(url);

        const dadosCep = await resposta.json(); // converte a resposta em formato JSON para um objeto 

        //resgitrar os dados obtidos da API no console para verificar se estão corretos
        console.log(dadosCep);

        // para preencher os campos do formulário com os dados obtidos da API
        campoLogradouro.value = dadosCep.logradouro; // puxar os dados q vem da API e colocar no campo do formulário
        campoBairro.value = dadosCep.bairro;
        campoCidade.value = dadosCep.localidade;
        campoEstado.value = dadosCep.uf;
    }

    btnBuscar.addEventListener('click', buscarCep); // para adicionar um evento de clique ao botão, quando o botão for clicado, a função buscarCep será executada