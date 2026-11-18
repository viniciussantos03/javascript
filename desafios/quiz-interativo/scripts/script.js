const quiz = [
    {
        pergunta: "Qual é o maior planeta do Sistema Solar?",
        alternativas: ["Terra", "Saturno", "Júpiter", "Netuno"],
        respostaCorreta: "Júpiter"
    },
    {
        pergunta: "Qual linguagem é responsável pela interatividade em páginas web?",
        alternativas: ["HTML", "CSS", "JavaScript", "SQL"],
        respostaCorreta: "JavaScript"
    },
    {
        pergunta: "Quantos lados tem um hexágono?",
        alternativas: ["5", "6", "7", "8"],
        respostaCorreta: "6"
    },
    {
        pergunta: "Em que continente fica o Egito?",
        alternativas: ["Ásia", "Europa", "África", "Oceania"],
        respostaCorreta: "África"
    },
    {
        pergunta: "Qual é o símbolo químico do ouro?",
        alternativas: ["Ag", "Au", "Fe", "Go"],
        respostaCorreta: "Au"
    },
    {
        pergunta: "Quem escreveu Dom Casmurro?",
        alternativas: [
            "Machado de Assis",
            "José de Alencar",
            "Clarice Lispector",
            "Carlos Drummond de Andrade"
        ],
        respostaCorreta: "Machado de Assis"
    },
    {
        pergunta: "Qual destes animais é um mamífero?",
        alternativas: ["Tubarão", "Pinguim", "Golfinho", "Crocodilo"],
        respostaCorreta: "Golfinho"
    },
    {
        pergunta: "Qual estrutura armazena informações no JavaScript em pares de chave e valor?",
        alternativas: ["Array", "Object", "String", "Boolean"],
        respostaCorreta: "Object"
    },
    {
        pergunta: "Em que ano ocorreu a Independência do Brasil?",
        alternativas: ["1500", "1789", "1822", "1889"],
        respostaCorreta: "1822"
    },
    {
        pergunta: "Qual é o resultado de 9 × 8?",
        alternativas: ["64", "72", "81", "96"],
        respostaCorreta: "72"
    },
    {
        pergunta: "Qual destes jogos foi desenvolvido pela Mojang?",
        alternativas: ["Roblox", "Minecraft", "Fortnite", "Terraria"],
        respostaCorreta: "Minecraft"
    },
    {
        pergunta: "Qual órgão é responsável por bombear o sangue pelo corpo?",
        alternativas: ["Pulmão", "Fígado", "Rim", "Coração"],
        respostaCorreta: "Coração"
    }
];

const perguntas = document.querySelector('#perguntas')
const alternativas = document.querySelectorAll('.alternativas button')
const botaoProximo = document.querySelector('#proximo')

let indice = 0
let respostaCerta = false

function questoes() {
    const perguntaDaQuestao = perguntas.textContent = quiz[indice].pergunta

    const colocarAlternativaEmCadaBloco = quiz[indice].alternativas.forEach((alternativa, indice) => {
        alternativas[indice].textContent = alternativa
    })
}

function proximaQuestao() {
    indice++
    questoes()
}

botaoProximo.addEventListener('click', () => {
        if(respostaCerta) {
            proximaQuestao()
            respostaCerta = false
        }
})

alternativas.forEach((alternativa) => {
    alternativa.addEventListener('click', () => {

        alternativa.style.backgroundColor = 'blue'

        const respostaCorreta = quiz[indice].respostaCorreta
    
        if(alternativa.textContent === respostaCorreta) {
            respostaCerta = true
        } else {
            return
        }
    })
})

questoes()