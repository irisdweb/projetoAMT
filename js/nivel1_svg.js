var pontuacao = 0;
console.log("pontuação: "+pontuacao);

var resultadoCliqueNivel1 = [];
for(var i = 1; i<16; i++){
    resultadoCliqueNivel1 [i] = "ponto"+i;
}
console.log(resultadoCliqueNivel1);

var numeroClique = 0;
var circuloPontuacao;

var stringCorTextoNivel1 = ["Vermelho", "Azul", "Amarelo", "Verde", "Violeta",
    "Laranja", "Amarelo-Laranja", "Vermelho-Laranja", "Vermelho-Violeta",
    "Azul-Violeta", "Azul-Verde", "Amarelo-Verde", "Preto", "Branco", "Cinza"];

document.getElementById("corTextoNivel1").innerHTML = stringCorTextoNivel1[Math.floor(Math.random() * stringCorTextoNivel1.length)];
var corTextoNivel1 = document.getElementById("corTextoNivel1").innerHTML;

//Se a cor for VERMELHO
var quadradoVermelho = document.getElementById("quadradoVermelho");
quadradoVermelho.onclick = function () {
    quadradoClicado(quadradoVermelho);
};

//Se a cor for AZUL
var quadradoAzul = document.getElementById("quadradoAzul");
quadradoAzul.onclick = function () {
    quadradoClicado(quadradoAzul);
};

//Se a cor for AMARELO
var quadradoAmarelo = document.getElementById("quadradoAmarelo");
quadradoAmarelo.onclick = function () {
    quadradoClicado(quadradoAmarelo);
};

//Se a cor for VERDE
var quadradoVerde = document.getElementById("quadradoVerde");
quadradoVerde.onclick = function () {
    quadradoClicado(quadradoVerde);
};

//Se a cor for VIOLETA
var quadradoVioleta = document.getElementById("quadradoVioleta");
quadradoVioleta.onclick = function () {
    quadradoClicado(quadradoVioleta);
};

//Se a cor for LARANJA
var quadradoLaranja = document.getElementById("quadradoLaranja");
quadradoLaranja.onclick = function () {
    quadradoClicado(quadradoLaranja);
};

//Se a cor for Amarelo-Laranja
var quadradoAmarelo_Laranja = document.getElementById("quadradoAmarelo-Laranja");
quadradoAmarelo_Laranja.onclick = function () {
    quadradoClicado(quadradoAmarelo_Laranja);
};

//Se a cor for Vemerlho-Laranja
var quadradoVermelho_Laranja = document.getElementById("quadradoVermelho-Laranja");
quadradoVermelho_Laranja.onclick = function () {
    quadradoClicado(quadradoVermelho_Laranja);
};

//Se a cor for Vermelho-Violeta
var quadradoVermelho_Violeta = document.getElementById("quadradoVermelho-Violeta");
quadradoVermelho_Violeta.onclick = function () {
    quadradoClicado(quadradoVermelho_Violeta);
};

//Se a cor for Azul-Violeta
var quadradoAzul_Violeta = document.getElementById("quadradoAzul-Violeta");
quadradoAzul_Violeta.onclick = function () {
    quadradoClicado(quadradoAzul_Violeta);
};

//Se a cor for Azul-Verde
var quadradoAzul_Verde = document.getElementById("quadradoAzul-Verde");
quadradoAzul_Verde.onclick = function () {
    quadradoClicado(quadradoAzul_Verde);

};

//Se a cor for Amarelo-Verde
var quadradoAmarelo_Verde = document.getElementById("quadradoAmarelo-Verde");
quadradoAmarelo_Verde.onclick = function () {
    quadradoClicado(quadradoAmarelo_Verde);
};

//Se a cor for Preto
var quadradoPreto = document.getElementById("quadradoPreto");
quadradoPreto.onclick = function () {
    quadradoClicado(quadradoPreto);
};

//Se a cor for Branco
var quadradoBranco = document.getElementById("quadradoBranco");
quadradoBranco.onclick = function () {
    quadradoClicado(quadradoBranco);
};

//Se a cor for Cinza
var quadradoCinza = document.getElementById("quadradoCinza");
quadradoCinza.onclick = function () {
    quadradoClicado(quadradoCinza);
};

function quadradoClicado(quadrado) {
    console.log("cliquei no:" + quadrado.id);
    console.log("a cor é:" + corTextoNivel1);

    numeroClique = numeroClique + 1;
    circuloPontuacao = document.getElementById("ponto"+[numeroClique]);
    console.log(circuloPontuacao);

    if ("quadrado" + corTextoNivel1 == quadrado.id) {
        quadradoCerto(quadrado);
        circuloPontuacao.style.border = "5px #9EFF00 solid";
    } else {
        quadradoErrado(quadrado);
        circuloPontuacao.style.border = "5px #FF0000 solid";
    }
    console.log("pontuação: " + pontuacao);
    document.getElementById("pontuacaoNivel1").innerHTML = "Pontuação Nível 1: <b>" + pontuacao + " </b>de 15 pontos";
    console.log(numeroClique);
}

function quadradoCerto(quadrado) {
    pontuacao = pontuacao + 1;

    quadrado.style.strokeWidth = "10";
    quadrado.style.stroke = "#9EFF00";

    const indexString = stringCorTextoNivel1.indexOf(quadrado.id.substring(8));
    stringCorTextoNivel1.splice(indexString, 1);
    console.log(stringCorTextoNivel1);

    setTimeout(() => {
        document.getElementById("popMensagem").classList.add('popMensagemOn');
        document.getElementById("tituloMensagem").innerHTML = "Está correto!";
        textoMensagem();
        document.getElementById("botaoSairMensagem").onclick = function () {
            document.getElementById("popMensagem").classList.remove('popMensagemOn');

            document.getElementById("corTextoNivel1").innerHTML = stringCorTextoNivel1[Math.floor(Math.random() * stringCorTextoNivel1.length)];
            corTextoNivel1 = document.getElementById("corTextoNivel1").innerHTML;
            quadrado.style.strokeWidth = "0";
            quadradoBranco.style.strokeWidth = "1";
            quadradoBranco.style.stroke = "rgb(0,0,0)";
        };
    }, 1000);

    if (stringCorTextoNivel1.length == 0) {
        setTimeout(() => {
            window.location = "nivel2.html";
        }, 1000);
    }
}

function quadradoErrado(quadrado) {
    console.log(circuloPontuacao);

    quadrado.style.strokeWidth = "10";
    quadrado.style.stroke = "#FF0000";
    setTimeout(() => {
        document.getElementById("popMensagem").classList.add('popMensagemOn');
        document.getElementById("tituloMensagem").innerHTML = "Está incorreto!";
        textoMensagem();
        document.getElementById("botaoSairMensagem").onclick = function () {
            document.getElementById("popMensagem").classList.remove('popMensagemOn');

            document.getElementById("corTextoNivel1").innerHTML = stringCorTextoNivel1[Math.floor(Math.random() * stringCorTextoNivel1.length)];
            corTextoNivel1 = document.getElementById("corTextoNivel1").innerHTML;
            quadrado.style.strokeWidth = "0";
            quadradoBranco.style.strokeWidth = "1";
            quadradoBranco.style.stroke = "rgb(0,0,0)";
        };
    }, 1000);

    if (stringCorTextoNivel1.length == 0) {
        setTimeout(() => {
            window.location = "nivel2.html";
        }, 5000);
    }
}

function textoMensagem() {
    if ("quadrado" + corTextoNivel1 == "quadradoVermelho") {
        document.getElementById("textoMensagem").innerHTML = "O vermelho é uma cor primária, pelo que não é criada através de nenhuma mistura. Também é classificada como cor quente. Para representar esta cor usamos o seguinte símbolo: ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoAzul") {
        document.getElementById("textoMensagem").innerHTML = "O azul ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoAmarelo") {
        document.getElementById("textoMensagem").innerHTML = "O amarelo ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoVerde") {
        document.getElementById("textoMensagem").innerHTML = "O verde ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoVioleta") {
        document.getElementById("textoMensagem").innerHTML = "O violeta ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoLaranja") {
        document.getElementById("textoMensagem").innerHTML = "O laranja ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoAmarelo-Laranja") {
        document.getElementById("textoMensagem").innerHTML = "O amarelo-laranja ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoVermelho-Laranja") {
        document.getElementById("textoMensagem").innerHTML = "O vermelho-laranja ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoVermelho-Violeta") {
        document.getElementById("textoMensagem").innerHTML = "O vermelho-violeta ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoAzul-Violeta") {
        document.getElementById("textoMensagem").innerHTML = "O azul-violeta ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoAzul-Verde") {
        document.getElementById("textoMensagem").innerHTML = "O azul-verde ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoAmarelo-Verde") {
        document.getElementById("textoMensagem").innerHTML = "O amarelo-verde ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoPreto") {
        document.getElementById("textoMensagem").innerHTML = "O preto ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoBranco") {
        document.getElementById("textoMensagem").innerHTML = "O branco ...";
    }
    if ("quadrado" + corTextoNivel1 == "quadradoCinza") {
        document.getElementById("textoMensagem").innerHTML = "O cinza ...";
    }
}

