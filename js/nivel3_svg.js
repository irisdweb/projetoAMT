//var corR = rgb(210, 58, 47); //VERMELHO
//var corB = rgb(58, 112, 173); // AZUL
//var corY = rgb(242, 229, 76); //AMARELO

var corG = "rgb(62, 140, 95)"; //VERDE
var corV = "rgb(102, 60, 133)"; //VIOLETA
var corO = "rgb(229, 149, 53)"; //LARANJA

var corYO = "rgb(245, 199, 70)"; //AMARELO LARANJA
var corRO = "rgb(219, 106, 53)"; //VERMELHO LARANJA
var corRV = "rgb(180, 39, 122)"; //VERMELHO VIOLETA
var corBV = "rgb(69, 79, 148)"; //AZUL VIOLETA
var corBG = "rgb(65, 148, 183)"; //AZUL VERDE
var corYG = "rgb(150, 186, 68)"; //AMARELO VERDE

//var corP = rgb(0); //PRETO
//var corW = rgb(255); //BRANCO
//var corPB = rgb(135); //CINZA

var coresPedidasNivel3 = [corG, corV, corO, corYO, corRO, corRV, corBV, corBG, corYG];
document.getElementById("quadradoCorPedida").style.fill = coresPedidasNivel3[Math.floor(Math.random() * coresPedidasNivel3.length)];

var circuloDaCor = document.getElementById("circuloDaCor");

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
    console.log(quadrado.style.fill);
    circuloDaCor.style.fill = quadrado.style.fill;
}