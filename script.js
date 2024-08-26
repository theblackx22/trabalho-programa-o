const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma noite fria um homem chega até você e pede os seus seriços para eliminar uma pessoa",
        alternativas: [
            {
                texto: "Me diga o nome dele e onde mora",
                afirmacao: "Você é confiante e não tem medo. "
            },
            {
                texto: "fica com medo mas aceita",
                afirmacao: "Você é cautelosa.."
            }
        ]
    },
    {
        enunciado: "Você vai até a casa do homem. A porta está trancada, você prefere:",
        alternativas: [
            {
                texto: "Quebrar a porta e entrar com estilo",
                afirmacao: "Você gosta de ter estilo."
            },
            {
                texto: "Quebrar a fechadura da janela e entrar por ela",
                afirmacao: "As pessoas normalmente te acham quieta."
            }
        ]
    },
    {
        enunciado: "Após entrar, você:",
        alternativas: [
            {
                texto: "vai para a sala",
                afirmacao: "O conforto é importante para você."
            },
            {
                texto: "vai para a cozinha",
                afirmacao: "Suas preocupações tem a ver com comida."
            }
        ]
    },
    {
        enunciado: "Subindo a escadas, você encontra o homem ja morto, então:",
        alternativas: [
            {
                texto: "Você sai e leva o dinheiro mesmo assim",
                afirmacao: "Não importa como, mas você não sai prejudicado"
            },
            {
                texto: "Você avisa o homem que já fieram o trabalho por ele",
                afirmacao: "Seu carater é mais importante que dinheiro"
            }
        ]
    },
    {
        enunciado: "Logo depois desa noite longa você: ",
        alternativas: [
            {
                texto: "Sai para comemorar.",
                afirmacao: "Ser festeiro é sua melhor caracteristica"
            },
            {
                texto: "Vai dormir em casa",
                afirmacao: "É melhor ter uma boa noite de sonop do que olheiras "
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