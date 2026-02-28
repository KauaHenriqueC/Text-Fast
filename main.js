// Variaveisss =================================================================
const palavras = ["casa", "carro", "porta", "janela", "mesa", "cadeira", "computador", "teclado", "mouse", "monitor", "celular", "livro", "caderno", "caneta", "lapis", "borracha", "mochila", "escola", "igreja", "praia", "campo", "cidade", "bairro", "rua", "avenida", "estrada", "ponte", "rio", "lago", "mar", "ceu", "terra", "fogo", "vento", "chuva", "nuvem", "sol", "lua", "estrela", "tempo", "dia", "noite", "manha", "tarde", "amigo", "familia", "irmao", "irma", "pai", "mae", "tio", "tia", "avo", "prima", "primo", "filho", "filha", "homem", "mulher", "crianca", "adolescente", "adulto", "idoso", "professor", "aluno", "medico", "enfermeiro", "policial", "bombeiro", "jogador", "artista", "cantor", "ator", "engenheiro", "programador", "cientista", "soldado", "rei", "rainha", "heroi", "vilao", "animal", "cachorro", "gato", "passaro", "peixe", "cavalo", "leao", "tigre", "urso", "cobra", "flor", "arvore", "folha", "fruta", "legume"]; 
let word = document.getElementById("palavra");
let text = document.getElementById("formulario");
let randomword = Math.random(min, max);
text.addEventListener("submit", (event)=>{
    event.preventDefault();
    word.textContent= randomword;
    
})

function teste () {
    var min = Math.ceil(10, 20);
    var max = Math.floor(20, 10);
    console.log(min,max);
}

teste();