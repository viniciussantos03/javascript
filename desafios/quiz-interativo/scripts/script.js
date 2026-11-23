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
const situacao = document.querySelector('#situacao')
const resposta = document.querySelector('#resposta')

let indice = 0
let acertos = 0
let erros = 0
let respostaCerta = false

function questoes() {
    perguntas.textContent = quiz[indice].pergunta

    quiz[indice].alternativas.forEach((alternativa, indice) => {
        alternativas[indice].textContent = alternativa
    })

    alternativas.forEach((alt) => {
            alt.disabled = false
        })

    situacao.style.display = 'none'
    situacao.innerHTML = ''
    resposta.style.display = 'none'
    resposta.textContent = ''
}

function proximaQuestao() {
    const quizContainer = document.querySelector('.quiz-container')

    const resultadoContainer = document.querySelector('.resultado-container')
    
    if(quiz.length - 1 === indice) {
        quizContainer.style.display = 'none'

        resultadoContainer.style.display = 'flex'

        // atualizando valores
        const acertosTotais = document.querySelector('#acertos')
        const avaliacao = document.querySelector('#avaliacao')
        const errosTotais = document.querySelector('#erros')

        acertosTotais.textContent = `Acertos: ${acertos}`
        errosTotais.textContent = `Erros: ${erros}`

        if(acertos === 0) {
            avaliacao.textContent = 'Mano...Como???'
        }
        if(acertos <= 4 && acertos > 0) {
            avaliacao.textContent = 'Precisa estudar um pouco mais e diversificar conteúdos! mas ta razoável.'
        }
        if(acertos <= 8 && acertos > 4) {
            avaliacao.textContent = 'Você ta na médida, parabéns, continue se esforçando para resultados cada vez maiores!'
        }
        if(acertos <= 12 && acertos > 8) {
            avaliacao.textContent = 'Mano, você é definitivamente um gênio, zerou o jogo, continue assim e se dedique cada vez mais!'
        }
        return
    }

    indice++
    questoes()
}

botaoProximo.addEventListener('click', () => {
        if(respostaCerta) {
            alternativas.forEach((alt) => {
                alt.style.backgroundColor = ''
            })
            proximaQuestao()
            respostaCerta = false
        }
})

alternativas.forEach((alternativa) => {
    alternativa.addEventListener('click', () => {
            alternativas.forEach((alt) => {
                alt.style.backgroundColor = ''
            })

        const respostaCorreta = quiz[indice].respostaCorreta

        if(alternativa.textContent === respostaCorreta) {
            respostaCerta = true

                alternativa.style.backgroundColor = 'green'
                alternativas.forEach(alt => {
                    alt.disabled = true
                })
            
            situacao.style.display = 'block'
            situacao.innerHTML = '<i class="fa-solid fa-check"></i>  Parabéns, você acertou!'

            // pegar número de acertos e mostrar resultado

            acertos++

        } else {
            respostaCerta = true

            alternativa.style.backgroundColor = 'red'

            alternativas.forEach(alt => {
                alt.disabled = true
            })

            situacao.style.display = 'block'
            situacao.innerHTML = `<i class="fa-solid fa-x"></i> você errou! Tente novamente.`

            resposta.style.display = 'block'
            resposta.textContent = `A resposta correta era: ${respostaCorreta}`

            // pegar número de erros

            erros++
        }
    })
})

questoes()