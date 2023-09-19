// PERGUNTA
let imgQuestao = document.querySelector('.imagemDaQuestao img');
let pergunta = document.querySelector('#pergunta');
let questaoAtual = 0;
let questaoNumero = 0;
let pontuacao = 1;
let acertos = 0;
let erros = 0; 


// ALTERNATIVAS
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes');
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas');

const q1 = {
    numQuestao: 1,
    imagem: '0.svg',
    pergunta: "Qual o 3° planeta do Sistema Solar?",
    alternativaA: "Santos",
    alternativaB: "Vênus",
    alternativaC: "Terra",
    alternativaD: "Marte", 
    correta: "Terra",
};
const q2 = {
    numQuestao: 2,
    imagem: '1.svg',
    pergunta: "Qual é o satélite natural da Terra?",
    alternativaA: "Monn",
    alternativaB: "Lua",
    alternativaC: "Apollo 11",
    alternativaD: "Luna 11",
    correta: "Lua",
};
const q3 = {
    numQuestao: 3,
    imagem: '2.svg',
    pergunta: "Qual é a estrela mais próxima da Terra?",
    alternativaA: "Alfa Centauri",
    alternativaB: "Sirius",
    alternativaC: "Sol",
    alternativaD: "Nebulosa",
    correta: "Sol",
};
const q4 = {
    numQuestao: 4,
    imagem: '3.svg',
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    alternativaA: "Vênus",
    alternativaB: "Sol",
    alternativaC: "Júpiter",
    alternativaD: "Marte",
    correta: "Júpiter", 
};
const q5 = {
    numQuestao: 5,
    imagem: '4.svg',
    pergunta: "Quem foi o primeiro astrônomo a analisar Júpiter?",
    alternativaA: "Galileu Galilei",
    alternativaB: "Freud",
    alternativaC: "Albert Einstein",
    alternativaD: "Platão ",
    correta: "Galileu Galilei",
};
const q6 = {
    numQuestao: 6,
    imagem: '5.svg',
    pergunta: "Qual foi o ano que o homem visitou a Lua?",
    alternativaA: "1970",
    alternativaB: "1969",
    alternativaC: "2012",
    alternativaD: "1980",
    correta: "1969",
};
const q7 = {
    numQuestao: 7,
    imagem: '6.svg',
    pergunta: "Qual é a distância do sol ate a terra?",
    alternativaA: "200 milhões de KM",
    alternativaB: "150 bilhões de KM",
    alternativaC: "150 milhões de KM",
    alternativaD: "200 bilhões de Km",
    correta: "150 milhões de KM",
};
const q8 = {
    numQuestao: 8,
    imagem: '7.svg',
    pergunta: "Qual é o menor planeta do Sistema Solar?",
    alternativaA: "Vênus",
    alternativaB: "Marte",
    alternativaC: "Terra",
    alternativaD: "Mercúrio",
    correta: "Mercúrio",
};
const q9 = {
    numQuestao: 9,
    imagem: '8.svg',
    pergunta: "Quantos anos tem o Sol?",
    alternativaA: "4,603 × 10^8 anos ",
    alternativaB: "4,633 × 10^9 anos",
    alternativaC: "4,600 × 10^9 anos",
    alternativaD: "4,603 × 10^9 anos",
    correta: "4,603 × 10^9 anos",
};
const q10 = {
    numQuestao: 10,
    imagem: '9.svg',
    pergunta: "Qual é a galaxia mais próxima da nossa?",
    alternativaA: "Galáxia do Triângulo",
    alternativaB: "Messier 94",
    alternativaC: "Galáxia de Andromêda",
    alternativaD: "Galáxia do Triângulo",
    correta: "Galáxia de Andromêda",
};
const q11 = {
    numQuestao: 11,
    imagem: '10.svg',
    pergunta: "Qual foi a primeira criatura terrestre a pisar na Lua?",
    alternativaA: "Cachorra-Laika",
    alternativaB: "Gato-Bartolomeu ",
    alternativaC: "Cachorra-Lili",
    alternativaD: "Gata-kel",
    correta: "Cachorra-Laika",
};
const q12 = {
    numQuestao: 12,
    imagem: '11.svg',
    pergunta: "Qual é o sexto maior planeta do Sistema Solar?",
    alternativaA: "Vênus",
    alternativaB: "Saturno",
    alternativaC: "Urano",
    alternativaD: "Júpter",
    correta: "Vênus",
};
const q13 = {
    numQuestao: 13,
    imagem: '12.svg',
    pergunta: "Quantos planetas existem no nosso Sistema Solar?",
    alternativaA: "10",
    alternativaB: "7",
    alternativaC: "8",
    alternativaD: "9",
    correta: "8",
};
const q14 = {
    numQuestao: 14,
    imagem: '13.svg',
    pergunta: "Qual é o buraco negro mais próximo da Terra?",
    alternativaA: "Cygnus X-1",
    alternativaB: "Gaia BH1",
    alternativaC: "Sagittarius A*",
    alternativaD: "V404 Cygni",
    correta: "Gaia BH1",
};
const q15 = {
    numQuestao: 15,
    imagem: '14.svg',
    pergunta: "Quem é o autor da teoria da relatividade?",
    alternativaA: "Isaac Newton",
    alternativaB: "Albert Einstein",
    alternativaC: "Karl Schwarzschild",
    alternativaD: "Immanuel Kant",
    correta: "Albert Einstein",
};

// ARRAY DAS QUETÕES
const questoes = [q1, q2, q3, q4, q5,q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];

let total = document.querySelector('#total');

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
imgQuestao.setAttribute('src', 'img/' + q1.imagem); // ADICIONE
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A');
b.setAttribute('value', '1B');
c.setAttribute('value', '1C');
d.setAttribute('value', '1D');

function bloquearAlternativas() {
    document.querySelector('#alternativas').classList.add('bloqueado');
}

function desbloquearAlternativas() {
    document.querySelector('#alternativas').classList.remove('bloqueado');
}



function proxima() {
    if (questaoNumero < questoes.length) {
        questaoNumero++;
        mostrarQuestao(questaoNumero);
    } else {
       
    }
}


function volta() {
    if (questaoAtual > -1) {
        questaoAtual--;
        mostrarQuestao(questaoAtual);
    }
}


function mostrarQuestao(questaoNumero) {
    
    const questao = questoes[questaoNumero];
    imgQuestao.setAttribute('src', 'img/' + questao.imagem);
    pergunta.textContent = questao.pergunta;
    a.textContent = questao.alternativaA;
    b.textContent = questao.alternativaB;
    c.textContent = questao.alternativaC;
    d.textContent = questao.alternativaD;

    // Configurar o value das alternativas para a questão atual
    a.setAttribute('value', questao.numQuestao + 'A');
    b.setAttribute('value', questao.numQuestao + 'B');
    c.setAttribute('value', questao.numQuestao + 'C');
    d.setAttribute('value', questao.numQuestao + 'D');

    // Limpar qualquer seleção anterior
    a.classList.remove('selecionado');
    b.classList.remove('selecionado');
    c.classList.remove('selecionado');
    d.classList.remove('selecionado');

    // Desbloquear as alternativas
    desbloquearAlternativas();
}

function verificarSeAcertou(alternativa, elemento) {
    const questaoAtual = questoes[questaoNumero];
    const respostaSelecionada = alternativa.textContent;

    if (respostaSelecionada === questaoAtual.correta) {
        elemento.classList.add('correta');
        pontuacao++; 
        acertos++; 
    } else {
        elemento.classList.add('errado');
        pontuacao++;
        erros++; 
    }

    // Atualize os valores no header
    document.getElementById('pontuacaoAtual').textContent = pontuacao;
    document.getElementById('acertos').textContent = acertos;
    document.getElementById('erros').textContent = erros;

    bloquearAlternativas();

    setTimeout(function () {
        questaoNumero++; 
        if (questaoNumero < questoes.length) {
            mostrarQuestao(questaoNumero);
            
        } else {
            mostrarResultados();
        }
    }, );
}


function mostrarResultados() {
    console.log(acertos)
    document.querySelector('#finalizacao').innerHTML = `
    <h2>Quiz Concluído</h2>
        <p>Você acertou ${acertos} questões de um total de 16.</p>
        <button id="reiniciar" onclick="reiniciarQuiz()">Reiniciar</button>
        <button>
            <a href="../Início(1)/index.html">
                Sair
            </a>
        </button>
    `
    // Exibe a pontuação e o total de questões

    // Exibe a seção de finalização
    document.getElementById('finalizacao').style.display = 'block';

    // Oculta a seção de questões
    document.querySelector('.tela-principal').style.display = 'none';
    document.querySelector('.iniciar').style.display = 'none';
}

function reiniciarQuiz() {
   
    pontuacao = 1;
    questaoNumero = 0;
    mostrarQuestao(questaoNumero);
    
    document.getElementById('finalizacao').style.display = 'none';

    document.querySelector('.tela-principal').style.display = 'block';

    document.getElementById('pontuacaoAtual').textContent = 0;
    document.getElementById('acertos').textContent = 0;
    document.getElementById('erros').textContent = 0;
    return pontuacao = 1, erros = 0, acertos = 0;
}


