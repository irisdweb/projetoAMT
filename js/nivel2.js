var tituloCores = document.getElementById("tituloCores");
tituloCores.addEventListener("click", function() {
        //console.log("1ª vez:" + tituloCores.innerHTML);
        tituloCores.innerHTML="3 cores secundárias!";
});
//var botaoTitulo = document.getElementById("titulo");
tituloCores.addEventListener("dblclick", function() {
        //console.log("2ª vez:" + tituloCores.innerHTML);
        tituloCores.innerHTML="6 cores terciárias!";
        //console.log("3ª vez:" + tituloCores.innerHTML);
});





// Arc Amarelo
var arcAmarelo = document.getElementsByClassName("arcAmarelo");
for (let i=0; i<arcAmarelo.length; i++) {
        arcAmarelo[i].addEventListener("click", function () {
                console.log("Click no arcAmarelo");
        });
}

// Arc AmareloLaranja
var arcAmareloLaranja = document.getElementsByClassName("arcAmareloLaranja");
for (let i=0; i<arcAmareloLaranja.length; i++) {
        arcAmareloLaranja[i].addEventListener("click", function () {
                console.log("Click no arcAmareloLaranja");
        });
}

// Arc Laranja
var arcLaranja = document.getElementsByClassName("arcLaranja");
for (let i=0; i<arcLaranja.length; i++) {
        arcLaranja[i].addEventListener("click", function () {
                console.log("Click no arcLaranja");
        });
}

// Arc VermelhoLaranja
var arcVermelhoLaranja = document.getElementsByClassName("arcVermelhoLaranja");
for (let i=0; i<arcVermelhoLaranja.length; i++) {
        arcVermelhoLaranja[i].addEventListener("click", function () {
                console.log("Click no arcVermelhoLaranja");
                //TENHO DE COLOCAR AQUI UM IF
                arcVermelhoLaranja[i].style.stroke="#9EFF00";
                arcVermelhoLaranja[i].style.strokeWidth="5";
        });
}

// Arc Vermelho
var arcVermelho = document.getElementsByClassName("arcVermelho");
for (let i=0; i<arcVermelho.length; i++) {
        arcVermelho[i].addEventListener("click", function () {
                console.log("Click no arcVermelho");
        });
}

// Arc VioletaVermelho
var arcVioletaVermelho = document.getElementsByClassName("arcVioletaVermelho");
for (let i=0; i<arcVioletaVermelho.length; i++) {
        arcVioletaVermelho[i].addEventListener("click", function () {
                console.log("Click no arcVioletaVermelho");
        });
}

// Arc Violeta
var arcVioleta = document.getElementsByClassName("arcVioleta");
for (let i=0; i<arcVioleta.length; i++) {
        arcVioleta[i].addEventListener("click", function () {
                console.log("Click no arcVioleta");
        });
}

// Arc AzulVioleta
var arcAzulVioleta = document.getElementsByClassName("arcAzulVioleta");
for (let i=0; i<arcAzulVioleta.length; i++) {
        arcAzulVioleta[i].addEventListener("click", function () {
                console.log("Click no arcAzulVioleta");
        });
}

// Arc Azul
var arcAzul = document.getElementsByClassName("arcAzul");
for (let i=0; i<arcAzul.length; i++) {
        arcAzul[i].addEventListener("click", function () {
                console.log("Click no arcAzul");
        });
}

// Arc VerdeAzul
var arcVerdeAzul = document.getElementsByClassName("arcVerdeAzul");
for (let i=0; i<arcVerdeAzul.length; i++) {
        arcVerdeAzul[i].addEventListener("click", function () {
                console.log("Click no arcVerdeAzul");
        });
}

// Arc Verde
var arcVerde= document.getElementsByClassName("arcVerde");
for (let i=0; i<arcVerde.length; i++) {
        arcVerde[i].addEventListener("click", function () {
                console.log("Click no arcVerde");
        });
}

// Arc AmareloVerde
var arcAmareloVerde= document.getElementsByClassName("arcAmareloVerde");
for (let i=0; i<arcAmareloVerde.length; i++) {
        arcAmareloVerde[i].addEventListener("click", function () {
                console.log("Click no arcAmareloVerde");
        });
}




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
        background(255);

        /*noStroke();
        fill(corRO); //VERMELHO LARANJA
        arc(width/2, height/2, 400, 400, -1/12*PI+0.01, 1/6*PI-1/12*PI-0.01, PIE);
        fill(corR); //VERMELHO
        arc(width/2, height/2, 400, 400, 1/6*PI-1/12*PI+0.01, 2/6*PI-1/12*PI-0.01, PIE);
        fill(corRV); //VERMELHO VIOLETA
        arc(width/2, height/2, 400, 400, 2/6*PI-1/12*PI+0.01, 3/6*PI-1/12*PI-0.01, PIE);
        fill(corV); //VIOLETA
        arc(width/2, height/2, 400, 400, 3/6*PI-1/12*PI+0.01, 4/6*PI-1/12*PI-0.01, PIE);
        fill(corBV); //AZUL VIOLETA
        arc(width/2, height/2, 400, 400, 4/6*PI-1/12*PI+0.01, 5/6*PI-1/12*PI-0.01, PIE);
        fill(corB); //AZUL
        arc(width/2, height/2, 400, 400, 5/6*PI-1/12*PI+0.01, PI-1/12*PI-0.01, PIE);
        fill(corBG); //AZUL VERDE
        arc(width/2, height/2, 400, 400, PI-1/12*PI+0.01, 1/6*PI+PI-1/12*PI-0.01, PIE);
        fill(corG); //VERDE
        arc(width/2, height/2, 400, 400, 1/6*PI+PI-1/12*PI+0.01, 2/6*PI+PI-1/12*PI-0.01, PIE);
        fill(corYG); //AMARELO VERDE
        arc(width/2, height/2, 400, 400, 2/6*PI+PI-1/12*PI+0.01, 3/6*PI+PI-1/12*PI-0.01, PIE);
        fill(corY); //AMARELO
        arc(width/2, height/2, 400, 400, 3/6*PI+PI-1/12*PI+0.01, 4/6*PI+PI-1/12*PI-0.01, PIE);
        fill(corYO); //AMARELO LARANJA
        arc(width/2, height/2, 400, 400, 4/6*PI+PI-1/12*PI+0.01, 5/6*PI+PI-1/12*PI-0.01, PIE);
        fill(corO); //LARANJA
        arc(width/2, height/2, 400, 400, 5/6*PI+PI-1/12*PI+0.01, TWO_PI-1/12*PI-0.01, PIE);
        fill(corW) //BRANCO
        ellipse(width/2, height/2, 250, 250);*/
}

