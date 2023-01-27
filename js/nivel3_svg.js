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
console.log(document.getElementById("quadradoCorPedida").style.fill);

var circuloDaCor = document.getElementById("circuloDaCor");
circuloDaCor.style.fill = "rgb(135,135,135)";

var arrayCoresClicadas = [];
var arrayCoresClicadasRed = [];
var arrayCoresClicadasGreen = [];
var arrayCoresClicadasBlue = [];

//Se a cor for VERMELHO
var quadradoVermelho = document.getElementById("quadradoVermelho");
quadradoVermelho.onclick = function () {
    quadradoVermelho.style.fill = "rgb(210, 58, 47)";
    quadradoClicado(quadradoVermelho);
};

//Se a cor for AZUL
var quadradoAzul = document.getElementById("quadradoAzul");
quadradoAzul.onclick = function () {
    quadradoAzul.style.fill = "rgb(58, 112, 173)";
    quadradoClicado(quadradoAzul);
};

//Se a cor for AMARELO
var quadradoAmarelo = document.getElementById("quadradoAmarelo");
quadradoAmarelo.onclick = function () {
    quadradoAmarelo.style.fill = "rgb(242, 229, 76)";
    quadradoClicado(quadradoAmarelo);
};

//Se a cor for VERDE
var quadradoVerde = document.getElementById("quadradoVerde");
quadradoVerde.onclick = function () {
    quadradoVerde.style.fill = "rgb(62, 140, 95)";
    quadradoClicado(quadradoVerde);
};

//Se a cor for VIOLETA
var quadradoVioleta = document.getElementById("quadradoVioleta");
quadradoVioleta.onclick = function () {
    quadradoVioleta.style.fill = "rgb(102, 60, 133)";
    quadradoClicado(quadradoVioleta);
};

//Se a cor for LARANJA
var quadradoLaranja = document.getElementById("quadradoLaranja");
quadradoLaranja.onclick = function () {
    quadradoLaranja.style.fill = "rgb(229, 149, 53)";
    quadradoClicado(quadradoLaranja);
};

//Se a cor for Amarelo-Laranja
var quadradoAmarelo_Laranja = document.getElementById("quadradoAmarelo-Laranja");
quadradoAmarelo_Laranja.onclick = function () {
    quadradoAmarelo_Laranja.style.fill = "rgb(245, 199, 70)";
    quadradoClicado(quadradoAmarelo_Laranja);
};

//Se a cor for Vemerlho-Laranja
var quadradoVermelho_Laranja = document.getElementById("quadradoVermelho-Laranja");
quadradoVermelho_Laranja.onclick = function () {
    quadradoVermelho_Laranja.style.fill = "rgb(219, 106, 53)";
    quadradoClicado(quadradoVermelho_Laranja);
};

//Se a cor for Vermelho-Violeta
var quadradoVermelho_Violeta = document.getElementById("quadradoVermelho-Violeta");
quadradoVermelho_Violeta.onclick = function () {
    quadradoVermelho_Violeta.style.fill = "rgb(180, 39, 122)";
    quadradoClicado(quadradoVermelho_Violeta);
};

//Se a cor for Azul-Violeta
var quadradoAzul_Violeta = document.getElementById("quadradoAzul-Violeta");
quadradoAzul_Violeta.onclick = function () {
    quadradoAzul_Violeta.style.fill = "rgb(69, 79, 148)";
    quadradoClicado(quadradoAzul_Violeta);
};

//Se a cor for Azul-Verde
var quadradoAzul_Verde = document.getElementById("quadradoAzul-Verde");
quadradoAzul_Verde.onclick = function () {
    quadradoAzul_Verde.style.fill = "rgb(65, 148, 183)";
    quadradoClicado(quadradoAzul_Verde);

};

//Se a cor for Amarelo-Verde
var quadradoAmarelo_Verde = document.getElementById("quadradoAmarelo-Verde");
quadradoAmarelo_Verde.onclick = function () {
    quadradoAmarelo_Verde.style.fill = "rgb(150, 186, 68)";
    quadradoClicado(quadradoAmarelo_Verde);
};

//Se a cor for Preto
var quadradoPreto = document.getElementById("quadradoPreto");
quadradoPreto.onclick = function () {
    quadradoPreto.style.fill = "rgb(0, 0, 0)";
    quadradoClicado(quadradoPreto);
};

//Se a cor for Branco
var quadradoBranco = document.getElementById("quadradoBranco");
quadradoBranco.onclick = function () {
    quadradoBranco.style.fill = "rgb(255, 255, 255)";
    quadradoClicado(quadradoBranco);
};

//Se a cor for Cinza
var quadradoCinza = document.getElementById("quadradoCinza");
quadradoCinza.onclick = function () {
    quadradoCinza.style.fill = "rgb(135, 135, 135)";
    quadradoClicado(quadradoCinza);
};

function quadradoClicado(quadrado) {
    console.log("cliquei no:" + quadrado.id);
    console.log("cor do quadrado: " + quadrado.style.fill);

    arrayCoresClicadas.push(quadrado.style.fill);
    console.log(arrayCoresClicadas);

    for(var i=0; i<arrayCoresClicadas.length; i++){ //varra o array
        arrayCoresClicadas[i].split(",");
        console.log(arrayCoresClicadas[i].split(","));
    }

    circuloDaCor.style.fill = arrayCoresClicadas.slice(-1);
    console.log("cor co circulo " + circuloDaCor.style.fill);
}

document.getElementById("quadradoCorPedida").onclick = atrasClicado;

function atrasClicado(){
    arrayCoresClicadas.pop();
    console.log(arrayCoresClicadas);
    circuloDaCor.style.fill = arrayCoresClicadas.slice(-1);
    console.log("cor co circulo " + circuloDaCor.style.fill);
}
