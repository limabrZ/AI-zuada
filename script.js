const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "IA te comprimentando",
        alternativas: [
            {
                texto: "Azideia :(",
                afirmacao: " ||||cagao ||||"
            },
            {
                texto: "azideia viado kskskskskskks",
                afirmacao: "|||| ixiiii se soltando na banca malandro????? ||||"
            }
        ]
    },
    {
        enunciado: "teria uma IA de namorada?",
        alternativas: [
            {
                texto: "vo nadaaa!!! ksksks",
                afirmacao: "||||sodomita certeza||||"
            },
            {
                texto: "e dentu!! ksksks",
                afirmacao: "||||por sua culpa nem pai de menina feia dorme tranquilo!-_-  ||||"
            }
        ]
    },
    {
        enunciado: "qual sua IA preferida?",
        alternativas: [
            {
                texto: "Robocop",
                afirmacao: "Veiao em"
            },
            {
                texto: "Ciborgue",
                afirmacao: "|||Criança||||"
            }
        ]
    },
    {
        enunciado: "quem e o super heroi que usa IA?",
        alternativas: [
            {
                texto: "Homem de ferro",
                afirmacao: "||||ola Sexta-fera!!!  NERD||||"
            },
            {
                texto: "Zoro das IA",
                afirmacao: "||||ta mais perdido que ele em cumpadi!||||"
            }
        ]
    },
    {
        enunciado: "o elol Musck e o criador do que?",
        alternativas: [
            {
                texto: "IA?",
                afirmacao: "|||Se e o bixao memo em doido|||"
            },
            {
                texto: "SpaceX",
                afirmacao: "|||com o google ate eu sei! |||"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
