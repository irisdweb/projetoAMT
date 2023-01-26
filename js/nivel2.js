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

var contadorCliquesPrimaria = 0;
function clicarCor (cor){
        for (let i=0; i<cor.length; i++) {
                cor[i].addEventListener("click", function () {
                        console.log("Click no " + cor);
                        console.log(tituloCores.innerHTML);
                        console.log(cor[0]);
                        console.log(cor[0].style.fill);

                        contadorCliquesPrimaria = contadorCliquesPrimaria + 1;
                        console.log(contadorCliquesPrimaria);
                        if(tituloCores.innerHTML == "3 cores primárias!") {
                                if (cor[0].style.fill == "rgb(242, 229, 76)" ||
                                    cor[0].style.fill == "rgb(210, 58, 47)" ||
                                    cor[0].style.fill == "rgb(58, 112, 173)") {
                                        cor[0].style.stroke = "#9EFF00";
                                        cor[0].style.strokeWidth = "5";
                                } else {
                                        cor[0].style.stroke = "#FF0000";
                                        cor[0].style.strokeWidth = "5";
                                }
                        }
                        if(tituloCores.innerHTML == "3 cores secundárias!") {
                                if (cor[0].style.fill == "rgb(229, 149, 53)" ||
                                    cor[0].style.fill == "rgb(102, 60, 133)" ||
                                    cor[0].style.fill == "rgb(62, 140, 95)") {
                                        cor[0].style.stroke = "#9EFF00";
                                        cor[0].style.strokeWidth = "5";
                                } else {
                                        cor[0].style.stroke = "#FF0000";
                                        cor[0].style.strokeWidth = "5";
                                }
                        }
                        if(tituloCores.innerHTML == "6 cores terciárias!") {
                                if (cor[0].style.fill == "rgb(245, 199, 70)" ||
                                    cor[0].style.fill == "rgb(219, 106, 53)" ||
                                    cor[0].style.fill == "rgb(180, 39, 122)" ||
                                    cor[0].style.fill == "rgb(69, 79, 148)" ||
                                    cor[0].style.fill == "rgb(65, 148, 183)" ||
                                    cor[0].style.fill == "rgb(150, 186, 68)") {
                                        cor[0].style.stroke = "#9EFF00";
                                        cor[0].style.strokeWidth = "5";
                                } else {
                                        cor[0].style.stroke = "#FF0000";
                                        cor[0].style.strokeWidth = "5";
                                }
                        }
                        if(contadorCliquesPrimaria > 2){
                                console.log("já clicou 3 vezes");
                                // contadorCliquesPrimaria=0;
                        }
                });
        }
}

/*var contadorCliquesSecundaria = 0;
function clicarCorSecundaria (cor){
        for (let i=0; i<cor.length; i++) {
                cor[i].addEventListener("click", function () {
                        console.log("Click no " + cor);
                        console.log(tituloCores.innerHTML);
                        console.log(cor[0]);
                        console.log(cor[0].style.fill);

                        contadorCliquesSecundaria = contadorCliquesSecundaria + 1;
                        console.log(contadorCliquesSecundaria);
                        if(tituloCores.innerHTML == "3 cores secundárias!") {
                                console.log("está bem")
                                if (cor[0].style.fill == "rgb(229, 149, 53)" || cor[0].style.fill == "rgb(102, 60, 133)" || cor[0].style.fill == "rgb(62, 140, 95)") {
                                        cor[0].style.stroke = "#9EFF00";
                                        cor[0].style.strokeWidth = "5";
                                } else {
                                        cor[0].style.stroke = "#FF0000";
                                        cor[0].style.strokeWidth = "5";
                                }
                        }
                        if(contadorCliquesSecundaria > 2){
                                console.log("já clicou 3 vezes");
                                // contadorCliquesPrimaria=0;
                        }
                });
        }
}*/


// Arc Amarelo
var arcAmarelo = document.getElementsByClassName("arcAmarelo");
clicarCor(arcAmarelo);


 /*       for (let i=0; i<arcAmarelo.length; i++) {
                arcAmarelo[i].addEventListener("click", function () {
                        console.log("Click no " + arcAmarelo);
                        console.log(tituloCores.innerHTML);
                        console.log(arcAmarelo[0]);
                        if (tituloCores.innerHTML == "3 cores primárias!") {
                                arcAmarelo[0].style.stroke = "#9EFF00";
                                arcAmarelo[0].style.strokeWidth = "5";
                        }
                });
        }*/


// Arc AmareloLaranja
var arcAmareloLaranja = document.getElementsByClassName("arcAmareloLaranja");
clicarCor(arcAmareloLaranja);

// Arc Laranja
var arcLaranja = document.getElementsByClassName("arcLaranja");
clicarCor(arcLaranja);

// Arc VermelhoLaranja
var arcVermelhoLaranja = document.getElementsByClassName("arcVermelhoLaranja");
clicarCor(arcVermelhoLaranja);

// Arc Vermelho
var arcVermelho = document.getElementsByClassName("arcVermelho");
clicarCor(arcVermelho);

// Arc VioletaVermelho
var arcVioletaVermelho = document.getElementsByClassName("arcVioletaVermelho");
clicarCor(arcVioletaVermelho);

// Arc Violeta
var arcVioleta = document.getElementsByClassName("arcVioleta");
clicarCor(arcVioleta);

// Arc AzulVioleta
var arcAzulVioleta = document.getElementsByClassName("arcAzulVioleta");
clicarCor(arcAzulVioleta);

// Arc Azul
var arcAzul = document.getElementsByClassName("arcAzul");
clicarCor(arcAzul);

// Arc VerdeAzul
var arcVerdeAzul = document.getElementsByClassName("arcVerdeAzul");
clicarCor(arcVerdeAzul);

// Arc Verde
var arcVerde = document.getElementsByClassName("arcVerde");
clicarCor(arcVerde);

// Arc AmareloVerde
var arcAmareloVerde = document.getElementsByClassName("arcAmareloVerde");
clicarCor(arcAmareloVerde);





/*// Arc Amarelo
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
}*/




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

