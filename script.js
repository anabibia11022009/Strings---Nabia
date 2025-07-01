const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector("#entrada-de-texto").value;

  const campoResultado = document.querySelector("#resultado-palavrachave");

  const palavrasChave = processaTexto(texto);

  campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    for(let i in palavras){
        palavras[i] = palavras[i].toLowerCase();
    }
    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

    function ordenaPalavra(p1, p2){
        return frequencias[p2] - frequencias[p1];
    }

    return ordenadas.slice(0,10);
}

function contaFrequencias(palavras){
    let frequencias = {};
    for(let i of palavras){
        frequencias[i] = 0;
        for(let j of palavras){
            if (i == j){
                frequencias[i]++;
            }
        }
    }
   
    return frequencias;
   
  }

 function tiraPalavrasRuins(palavras) {
    const PALAVRAS_RUINS = new Set([
    "que",
    "quanto",
    "algum",
    "nenhum",
    "todos",
    "assim",
    "maia",
    "pra",
    "bem",
    "para",
    "enquanto",
    "não",
    "uma",
    "por",
    "mais",
    "dois",
    "como",
    "mas",
    "foi",
    "ele",
    "das",
    "tem",
    "seu",
    "sua",
    "nosso",
    "quando",
    "muito",
    "está",
    "também",
    "pelo",
    "pela",
    "até",
    "este",
    "ela",
    "entre",
    "era",
    "depois",
    "sem",
    "igual",
    "aos",
    "ter",
    "nossos",
    "quem",
    "nas",
    "esse",
    "eles",
    "estão",
    "você",
    "tinham",
    "fora",
    "esses",
    "num",
    "nem",
    "suas",
    "meu",
    "minha",
    "têm",
    "numa",
    "pelas",
    "elas",
    "haviam",
    "seja",
    "qual",
    "será",
    "nós",
    "tenho",
    "lhe",
    "deles",
    "essas",
    "esses",
    "pelas",
    "este",
    "fosse",
    "dele",
    "vocês",
    "vos",
    "lhes",
    "meus",
    "minhas",
    "teu",
    "tua",
    "teus",
    "tuas",
    "nosso",
    "nossa",
    "nossas",
    "dela",
    "delas",
    "esta",
    "estes",
    "estas",
    "aquele",
    "aquela",
    "aqueles",
    "aquelas",
    "isto",
    "aquilo",
    "estou",
    "estamos",
    "estive",
    "esteve",
    "estivemos",
    "estiveram",
    "estava",
    "estávamos",
    "estavam",
    "e",
    "ou",
    "ontem",
    "aquilo",
    "embora",
    "além",
    "porque",
    "por isso",
    "contudo",
    "porém",
    "portanto",
    "além",
    "antes",
    "todavia",
    "inclusive",
    "diante",
    "sobre",
    "quantas",
    "apenas",
    "desde",
    "uma",
    "segundo",
    "junto"
]);
    const palavrasBoas = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_RUINS.has(palavra) && palavra.length > 2) {
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas;
}
