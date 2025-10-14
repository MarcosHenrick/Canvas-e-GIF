const imgElemento = document.getElementById('animacao-img');

const totalFrames = 8; 
let frameAtual = 1;   
const velocidadeMs = 120; 

function proximoFrame() {
    
    const imgElemento = document.getElementById('animacao-img');

const totalFrames = 8; 
let frameAtual = 1;   
const velocidadeMs = 120; 

function proximoFrame() {
    
    const nomeArquivo = `${frameAtual}.svg`;

    imgElemento.src = nomeArquivo;

    frameAtual++;

    if (frameAtual > totalFrames) {
        frameAtual = 1;
    }
}

setInterval(proximoFrame, velocidadeMs);

    imgElemento.src = nomeArquivo;

    frameAtual++;

    if (frameAtual > totalFrames) {
        frameAtual = 1;
    }
}

setInterval(proximoFrame, velocidadeMs);