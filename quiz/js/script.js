const inicio = document.querySelector(".inicio")
const botaocomecarjogo = document.querySelector(".start-quiz")
const questoesconteiner = document.querySelector(".questoes-conteiner")
const respostasconteiner = document.querySelector(".respostas-container")
const pergunta =document.querySelector(".questao")
const nextQuestionBotao = document.querySelector(".next-question")
const inicial = document.querySelector("#inicial")
const ficar = document.querySelector(".ficar")
const bsair= document.querySelector(".bsair")
let pontuacao = 1;
let acertos = 0;
let erros = 0;



botaocomecarjogo.addEventListener("click", comecarJogo)
nextQuestionBotao.addEventListener("click", mostarProximaPergunta)


let perguntaAtualIndex = 0


function comecarJogo() {
    document.getElementById('pontuacaoAtual').textContent = pontuacao;
    document.getElementById('acertos').textContent = acertos;
    document.getElementById('erros').textContent = erros;
    botaocomecarjogo.classList.add("esconder")
    inicio.classList.add("esconder")
    questoesconteiner.classList.remove("esconder")
    mostarProximaPergunta()
}

function mostarProximaPergunta() {
    document.getElementById('pontuacaoAtual').textContent = pontuacao;
    while(respostasconteiner.firstChild) {
        respostasconteiner.removeChild(respostasconteiner.firstChild)
    }

    while(imagemDaQuestao.firstChild) {
        imagemDaQuestao.removeChild(imagemDaQuestao.firstChild)
    }

    if (questoes.length === perguntaAtualIndex) {
        pontuacao = questoes.length
        document.getElementById('pontuacaoAtual').textContent = pontuacao;
        return fimJogo()
    }

    document.body.removeAttribute("class")
    nextQuestionBotao.classList.add("esconder")

    const img = document.createElement("img")
    
    img.src = questoes[perguntaAtualIndex].imagem
    document.getElementById('imagemDaQuestao').appendChild(img);
    pergunta.textContent = questoes[perguntaAtualIndex].pergunta
    questoes[perguntaAtualIndex].respostas.forEach(resposta => {
        
        const NovaResposta = document.createElement("button")
        NovaResposta.classList.add("botao", "resposta")
        NovaResposta.textContent = resposta.text
        if (resposta.correct) {
            NovaResposta.dataset.correct = resposta.correct
            NovaResposta.classList.add("respostaCorreta")
        }
        respostasconteiner.appendChild(NovaResposta)

        NovaResposta.addEventListener("click", selectResposta)
    })

}

function selectResposta(evento) {
    const RespostaClicada = evento.target
    evento.target.classList.add("selecionada")
    
    if(RespostaClicada.dataset.correct) {
        pontuacao++; 
        acertos++; 
        RespostaClicada.classList.add("correct")
    } else { 
        pontuacao++;
        erros++;
        RespostaClicada.classList.add("incorrect")
        document.querySelector(".respostaCorreta").classList.add("correct")
            
    }
    document.querySelectorAll(".resposta").forEach(botao => {
        botao.disabled =true
    })
    document.getElementById('acertos').textContent = acertos;
    document.getElementById('erros').textContent = erros;
    nextQuestionBotao.classList.remove("esconder")
    perguntaAtualIndex++
    console.log(perguntaAtualIndex)
}

function fimJogo() {
    nextQuestionBotao.classList.add("esconder")
    questoesconteiner.classList.add("esconder")
    document.querySelector(".inicial").classList.add("esconder")
    document.querySelector(".final").classList.remove("esconder")
    inicio.classList.remove("esconder")
    
    document.querySelector("#pFinal").innerHTML = 
    `
    <p> Você acertou ${acertos} de ${questoes.length} questôes ! 
    `
}


































const questoes = [
    {
        imagem: './img/0.svg',
        pergunta: "Qual o 3° planeta do Sistema Solar?",
        respostas: [
            {text: "Santos", correct: false},
            {text:"Vênus",correct:false},
            {text:"Terra", correct:true},
            {text:"Marte", correct:false}
        ]
    },
    {
        imagem: './img/1.svg',
        pergunta: "Qual é o satélite natural da Terra?",
        respostas: [
            {text: "Monn" , correct:false},
            {text:"Lua" , correct:true},
            {text: "Apollo 11", correct:false},
            {text: "Luna 11", correct:false}
        ]
    },
    {
        imagem: './img/2.svg',
        pergunta: "Qual é a estrela mais próxima da Terra?",
        respostas:[
            {text: "Alfa Centauri", correct:false},
            {text: "Sirius", correct:false},
            {text: "Sol", correct:true},
            {text: "Nebulosa", correct:false}
        ]
    },
    {
        imagem: './img/3.svg',
        pergunta: "Qual é o maior planeta do Sistema Solar?",
        respostas: [
            {text: "Vênus", correct:false},
            {text: "Sol", correct:false},
            {text: "Júpiter", correct:true},
            {text: "Marte", correct:false}
        ]
    },
    {
        imagem: './img/4.svg',
        pergunta: "Quem foi o primeiro astrônomo a analisar Júpiter?",
        respostas:[
            {text: "Galileu Galilei", correct:true},
            {text: "Freud", correct:false},
            {text: "Albert Einstein", correct:false},
            {text: "Platão ", correct:false}
        ]
    },
    {
        imagem: './img/5.svg',
        pergunta: "Qual foi o ano que o homem visitou a Lua?",
        respostas: [
            {text:  "1970", correct:false},
            {text: "1969", correct:true},
            {text: "2012", correct:false},
            {text: "1980", correct:false}
        ] 
    },
    {
        imagem: './img/6.svg',
        pergunta: "Qual é a distância do sol ate a terra?",
        respostas: [
            {text: "200 milhões de KM", correct:false},
            {text: "150 bilhões de KM", correct:false},
            {text: "150 milhões de KM", correct:true},
            {text: "200 bilhões de Km", correct:false}
        ]   
    },
    {
        imagem: './img/7.svg',
        pergunta: "Qual é o menor planeta do Sistema Solar?",
        respostas: [
            {text: "Vênus", correct:false},
            {text: "Marte", correct:false},
            {text: "Terra", correct:false},
            {text: "Mercúrio", correct:true}
        ]
    },
    {
        imagem: './img/8.svg',
        pergunta: "Quantos anos tem o Sol?",
        respostas: [
            {text: "4,603 × 10^8 anos ", correct:false},
            {text: "4,633 × 10^9 anos", correct:false},
            {text: "4,600 × 10^9 anos", correct:false},
            {text: "4,603 × 10^9 anos", correct:true}
        ]
    },
    {
        imagem: './img/9.svg',
        pergunta: "Qual é a galaxia mais próxima da nossa?",
        respostas: [
            {text: "Galáxia do Triângulo", correct:false},
            {text: "Messier 94", correct:false},
            {text: "Galáxia de Andromêda", correct:true},
            {text: "Galáxia do Triângulo", correct:false}
        ]
    },
    {
        imagem: './img/10.svg',
        pergunta: "Qual foi a primeira criatura terrestre a pisar na Lua?",
        respostas: [
            {text: "Cachorra-Laika", correct:true},
            {text: "Gato-Bartolomeu", correct:false},
            {text: "Cachorra-Lili", correct:false},
            {text: "Gata-kel", correct:false}
        ]
    },
    {
        imagem: './img/11.svg',
        pergunta: "Qual é o sexto maior planeta do Sistema Solar?",
        respostas: [
            {text: "Vênus", correct:true},
            {text: "Saturno", correct:false},
            {text: "Urano", correct:false},
            {text: "Júpter", correct:false}
        ]  
    },
    {
        imagem: './img/12.svg',
        pergunta: "Quantos planetas existem no nosso Sistema Solar?",
        respostas: [
            {text: "10", correct:false},
            {text: "7", correct:false},
            {text: "8", correct:true},
            {text: "9", correct:false}
        ]
    },
    {
        imagem: './img/13.svg',
        pergunta: "Qual é o buraco negro mais próximo da Terra?",
        respostas: [
            {text: "Cygnus X-1", correct: false},
            {text: "Gaia BH1", correct: true},
            {text: "Sagittarius A*", correct: false},
            {text: "V404 Cygni", correct: false}
        ]
    },
    {
        imagem: './img/14.svg',
        pergunta: "Quem é o autor da teoria da relatividade?",
        respostas: [
            {text: "Isaac Newton", correct:false},
            {text: "Albert Einstein", correct:true},
            {text: "Karl Schwarzschild", correct:false},
            {text: "Immanuel Kant", correct:false}
        ]
    }
]