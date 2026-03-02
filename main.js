// Variaveisss =================================================================
const palavras = ["casa", "carro", "porta", "janela", "mesa", "cadeira", "computador", "teclado", "mouse", "monitor", "celular", "livro", "caderno", "caneta", "lapis", "borracha", "mochila", "escola", "igreja", "praia", "campo", "cidade", "bairro", "rua", "avenida", "estrada", "ponte", "rio", "lago", "mar", "ceu", "terra", "fogo", "vento", "chuva", "nuvem", "sol", "lua", "estrela", "tempo", "dia", "noite", "manha", "tarde", "amigo", "familia", "irmao", "irma", "pai", "mae", "tio", "tia", "avo", "prima", "primo", "filho", "filha", "homem", "mulher", "crianca", "adolescente", "adulto", "idoso", "professor", "aluno", "medico", "enfermeiro", "policial", "bombeiro", "jogador", "artista", "cantor", "ator", "engenheiro", "programador", "cientista", "soldado", "rei", "rainha", "heroi", "vilao", "animal", "cachorro", "gato", "passaro", "peixe", "cavalo", "leao", "tigre", "urso", "cobra", "flor", "arvore", "folha", "fruta", "legume"]; 

let word = document.getElementById("palavra");      // O elemento P
let text = document.getElementById("formulario");   // O elemento Form
let textinput = document.querySelector("input");    // O elemento Input


text.addEventListener("submit", (event) => {        // Quando o formulario é enviado ele ativa essa funcão
    event.preventDefault();                         // Evita que a Pagina recarregue

    let randomindex = Math.floor(Math.random() * palavras.length); // O Math.random gera um numero de 0 a 1, mas nunca chega a 1. ai o palavras.leght pega o tamanho da lista, ou seja, 100, isso faz com que na multiplicacao ele multiplique por 100, ou seja, ao inves de ser 0.23 é 23.8. ai dps disso o Math.floor arredonda pra baixo ou seja 23
    let randomword = palavras[randomindex];

    word.textContent = randomword;
    textinput.value = '';
});