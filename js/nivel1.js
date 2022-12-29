var corR;
var corB;
var corY;

var corG;
var corV;
var corO;

var corYO;
var corRO;
var corRV;
var corBV;
var corBG;
var corYG;

var corP;
var corW;
var corPB;

var lado;
var bordas;
var dist;

var arrayX;
var arrayY;
var randomX;

function setup() {
    createCanvas(700, 400);

    corR = color(210, 58, 47); //VERMELHO
    corB = color(58, 112, 173); // AZUL
    corY = color(242, 229, 76); //AMARELO

    corG = color(62, 140, 95); //VERDE
    corV = color(102, 60, 133); //VIOLETA
    corO = color(229, 149, 53); //LARANJA

    corYO = color(245, 199, 70); //AMARELO LARANJA
    corRO = color(219, 106, 53); //VERMELHO LARANJA
    corRV = color(180, 39, 122); //VERMELHO VIOLETA
    corBV = color(69, 79, 148); //AZUL VIOLETA
    corBG = color(65, 148, 183); //AZUL VERDE
    corYG = color(150, 186, 68); //AMARELO VERDE

    corP = color(0); //PRETO
    corW = color(255); //BRANCO
    corPB = color(135); //CINZA

    lado = 100;
    bordas = 20;
    dist = 100;

    arrayX = [0, 150, 300, 450, 600];
    arrayY = [0, 150, 300];

    randomXR = random(arrayX);
    randomYR = random(arrayY);

    randomXG = random(arrayX);
    randomYG = random(arrayY);

    randomXB = random(arrayX);
    randomYB = random(arrayY);
}

function draw() {
    background(220);

    //PRIMÁRIAS
    fill(corB); //AZUL
    rect(arrayX[0], arrayY[0], lado, lado, bordas);
    fill(corR); //VERMELHO
    rect(arrayX[1], arrayY[0], lado, lado, bordas);
    fill(corY); //AMARELO
    rect(arrayX[2], arrayY[0], lado, lado, bordas);

    //SECUNDÁRIAS
    fill(corV); //VIOLETA
    rect(arrayX[3], arrayY[0], lado, lado, bordas);
    fill(corG); //VERDE
    rect(arrayX[4], arrayY[0], lado, lado, bordas);
    fill(corO); //LARANJA
    rect(arrayX[0], arrayY[1], lado, lado, bordas);

    //TERCIÁRIAS
    fill(corYO); //AMARELO LARANJA
    rect(arrayX[1], arrayY[1], lado, lado, bordas);
    fill(corRO); //VERMELHO LARANJA
    rect(arrayX[2], arrayY[1], lado, lado, bordas);
    fill(corRV); //VERMELHO VIOLETA
    rect(arrayX[3], arrayY[1], lado, lado, bordas);
    fill(corBV); //AZUL VIOLETA
    rect(arrayX[4], arrayY[1], lado, lado, bordas);
    fill(corBG); //AZUL VERDE
    rect(arrayX[0], arrayY[2], lado, lado, bordas);
    fill(corYG); //AMARELO VERDE
    rect(arrayX[1], arrayY[2], lado, lado, bordas);

    //NEUTRAS
    fill(corP); //PRETO
    rect(arrayX[2], arrayY[2], lado, lado, bordas);
    fill(corW); //BRANCO
    rect(arrayX[3], arrayY[2], lado, lado, bordas);
    fill(corPB); //CINZA
    rect(arrayX[4], arrayY[2], lado, lado, bordas);
}
