document.getElementById("botaoInstrucoes").onclick = function () {
        document.getElementById("popInstrucoesNivel1").classList.add('popInstrucoesNivel1On');
};
document.getElementById("botaoSairInstrucoes").onclick = function () {
        document.getElementById("popInstrucoesNivel1").classList.remove('popInstrucoesNivel1On');
};




var pontuacao = 0;
console.log("pontuação: "+ pontuacao);
document.getElementById("pontuacaoNivel2").innerHTML = "Pontuação Nível 2: <b>" + pontuacao + " </b>de 12 pontos";




//var contadorCliquesPrimaria = 0;
var arrayCoresPrimarias = ["arcAmarelo", "arcAzul", "arcVermelho"];
console.log(arrayCoresPrimarias);
var arrayCoresClicadas = [];

function comparaArraysPrimarias(coresClicadas, coresPrimarias) {
        if(coresClicadas.length != coresPrimarias.length){
                return false;
        }
        else {
                var resultado = false;
                for (let i = 0; i < coresClicadas.length; i++) {

                        if (coresClicadas[i] !== coresPrimarias[i]) {
                                return false;
                        } else {
                                resultado = true;
                        }
                }
                return resultado;
        }
}



var arrayCoresSecundarias = ["arcLaranja", "arcVerde", "arcVioleta"];
console.log(arrayCoresSecundarias);
function comparaArraysSecundarias(coresClicadas, coresSecundarias) {
        if(coresClicadas.length != coresSecundarias.length){
                return false;
        }
        else {
                var resultado = false;
                for (let i = 0; i < coresClicadas.length; i++) {

                        if (coresClicadas[i] !== coresSecundarias[i]) {
                                return false;
                        } else {
                                resultado = true;
                        }
                }
                return resultado;
        }
}

var arrayCoresTerciarias = ["arcAmareloLaranja", "arcAmareloVerde", "arcAzulVioleta", "arcVerdeAzul", "arcVermelhoLaranja", "arcVioletaVermelho"];
console.log(arrayCoresTerciarias);
function comparaArraysTerciarias(coresClicadas, coresTerciarias) {
        if(coresClicadas.length != coresTerciarias.length){
                return false;
        }
        else {
                var resultado = false;
                for (let i = 0; i < coresClicadas.length; i++) {

                        if (coresClicadas[i] !== coresTerciarias[i]) {
                                return false;
                        } else {
                                resultado = true;
                        }
                }
                return resultado;
        }
}





var tituloCores = document.getElementById("tituloCores");

function clicarCor (cor){
        for (let i=0; i<cor.length; i++) {
                cor[i].addEventListener("click", function () {
                        //console.log("Click no " + cor.value);
                        console.log(cor[0].classList.value);
                        console.log(tituloCores.innerHTML);
                        console.log(cor[0]);
                        console.log(cor[0].style.fill);

                        //contadorCliquesPrimaria = contadorCliquesPrimaria + 1;
                        //console.log(contadorCliquesPrimaria);
                        if(tituloCores.innerHTML == "3 cores primárias!") {
                                if (cor[0].style.fill == "rgb(242, 229, 76)" ||
                                    cor[0].style.fill == "rgb(210, 58, 47)" ||
                                    cor[0].style.fill == "rgb(58, 112, 173)") {
                                        cor[0].style.stroke = "#9EFF00";
                                        cor[0].style.strokeWidth = "10";
                                } else {
                                        cor[0].style.stroke = "#FF0000";
                                        cor[0].style.strokeWidth = "10";
                                }
                                arrayCoresClicadas.push(cor[0].classList.value);


                                console.log(arrayCoresClicadas);
                                arrayCoresClicadas.sort();
                                console.log(arrayCoresClicadas);
                                var circulo1 = document.getElementById("circulo1");
                                var comparaPrimarias = comparaArraysPrimarias(arrayCoresClicadas, arrayCoresPrimarias);
                                if (comparaPrimarias == true) {
                                        console.log("É igual!!!");
                                        circulo1.style.border = "5px #9EFF00 solid";
                                        pontuacao = pontuacao + 3;
                                        document.getElementById("pontuacaoNivel2").innerHTML = "Pontuação Nível 2: <b>" +
                                            pontuacao + " </b>de 12 pontos";


                                        setTimeout(() => {
                                                document.getElementById("popMensagem").classList.add('popMensagemOn');
                                                document.getElementById("tituloMensagem").innerHTML = "Está correto!";
                                                document.getElementById("tituloMensagem").style.color = "#9EFF00";
                                                textoMensagem();
                                                document.getElementById("botaoSairMensagem").onclick = function () {
                                                        document.getElementById("popMensagem").classList.remove('popMensagemOn');

                                                        /*document.getElementById("corTextoNivel1").innerHTML = stringCorTextoNivel1[Math.floor(Math.random() *
                                                        stringCorTextoNivel1.length)];
                                                        corTextoNivel1 = document.getElementById("corTextoNivel1").innerHTML;
                                                        quadrado.style.strokeWidth = "0";
                                                        quadradoBranco.style.strokeWidth = "1";
                                                        quadradoBranco.style.stroke = "rgb(0,0,0)";*/
                                                        var path = document.querySelectorAll("path");
                                                        for (let i = 0; i < path.length; i++) {
                                                                console.log("sair");
                                                                path[i].style.stroke = "#FFFFFF";
                                                                path[i].style.strokeWidth = "2";
                                                        }
                                                        tituloCores.innerHTML = "3 cores secundárias!";
                                                        arrayCoresClicadas.length = 0;
                                                        console.log(arrayCoresClicadas);
                                                };
                                        }, 2000);

                                } else if (arrayCoresClicadas.length == arrayCoresPrimarias.length && comparaPrimarias == false) {
                                        console.log("Não é igual");
                                        circulo1.style.border = "5px #FF0000 solid";
                                        arcAmarelo[0].style.stroke = "#9EFF00";
                                        arcAmarelo[0].style.strokeWidth = "10";
                                        arcVermelho[0].style.stroke = "#9EFF00";
                                        arcVermelho[0].style.strokeWidth = "10";
                                        arcAzul[0].style.stroke = "#9EFF00";
                                        arcAzul[0].style.strokeWidth = "10";


                                        setTimeout(() => {
                                                document.getElementById("popMensagem").classList.add('popMensagemOn');
                                                document.getElementById("tituloMensagem").innerHTML = "Está incorreto!";
                                                document.getElementById("tituloMensagem").style.color = "#FF0000";
                                                textoMensagem();
                                                document.getElementById("botaoSairMensagem").onclick = function () {
                                                        document.getElementById("popMensagem").classList.remove('popMensagemOn');

                                                        /*document.getElementById("corTextoNivel1").innerHTML = stringCorTextoNivel1[Math.floor(Math.random() *
                                                        stringCorTextoNivel1.length)];
                                                        corTextoNivel1 = document.getElementById("corTextoNivel1").innerHTML;
                                                        quadrado.style.strokeWidth = "0";
                                                        quadradoBranco.style.strokeWidth = "1";
                                                        quadradoBranco.style.stroke = "rgb(0,0,0)";*/
                                                        var path = document.querySelectorAll("path");
                                                        for (let i = 0; i < path.length; i++) {
                                                                console.log("sair");
                                                                path[i].style.stroke = "#FFFFFF";
                                                                path[i].style.strokeWidth = "2";
                                                        }
                                                        tituloCores.innerHTML = "3 cores secundárias!";
                                                        arrayCoresClicadas.length = 0;
                                                        console.log(arrayCoresClicadas);
                                                };
                                        }, 2000);


                                }
                        }



                        if(tituloCores.innerHTML == "3 cores secundárias!") {
                                if (cor[0].style.fill == "rgb(229, 149, 53)" ||
                                    cor[0].style.fill == "rgb(102, 60, 133)" ||
                                    cor[0].style.fill == "rgb(62, 140, 95)") {
                                        cor[0].style.stroke = "#9EFF00";
                                        cor[0].style.strokeWidth = "10";
                                } else {
                                        cor[0].style.stroke = "#FF0000";
                                        cor[0].style.strokeWidth = "10";
                                }
                                arrayCoresClicadas.push(cor[0].classList.value);


                                console.log(arrayCoresClicadas);
                                arrayCoresClicadas.sort();
                                console.log(arrayCoresClicadas);
                                var circulo2 = document.getElementById("circulo2");
                                var comparaSecundarias = comparaArraysPrimarias(arrayCoresClicadas, arrayCoresSecundarias);
                                if (comparaSecundarias == true) {
                                        console.log("É igual!!!");
                                        circulo2.style.border = "5px #9EFF00 solid";
                                        pontuacao = pontuacao + 3;
                                        document.getElementById("pontuacaoNivel2").innerHTML = "Pontuação Nível 2: <b>" +
                                            pontuacao + " </b>de 12 pontos";


                                        setTimeout(() => {
                                                document.getElementById("popMensagem").classList.add('popMensagemOn');
                                                document.getElementById("tituloMensagem").innerHTML = "Está correto!";
                                                document.getElementById("tituloMensagem").style.color = "#9EFF00";

                                                textoMensagem();
                                                document.getElementById("botaoSairMensagem").onclick = function () {
                                                        document.getElementById("popMensagem").classList.remove('popMensagemOn');

                                                        /*document.getElementById("corTextoNivel1").innerHTML = stringCorTextoNivel1[Math.floor(Math.random() *
                                                        stringCorTextoNivel1.length)];
                                                        corTextoNivel1 = document.getElementById("corTextoNivel1").innerHTML;
                                                        quadrado.style.strokeWidth = "0";
                                                        quadradoBranco.style.strokeWidth = "1";
                                                        quadradoBranco.style.stroke = "rgb(0,0,0)";*/
                                                        var path = document.querySelectorAll("path");
                                                        for (let i = 0; i < path.length; i++) {
                                                                console.log("sair");
                                                                path[i].style.stroke = "#FFFFFF";
                                                                path[i].style.strokeWidth = "2";
                                                        }
                                                        tituloCores.innerHTML = "6 cores terciárias!";
                                                        arrayCoresClicadas.length = 0;
                                                        console.log(arrayCoresClicadas);
                                                };
                                        }, 2000);

                                } else if (arrayCoresClicadas.length == arrayCoresSecundarias.length && comparaSecundarias == false) {
                                        console.log("Não é igual");
                                        circulo2.style.border = "5px #FF0000 solid";
                                        arcLaranja[0].style.stroke = "#9EFF00";
                                        arcLaranja[0].style.strokeWidth = "10";
                                        arcVerde[0].style.stroke = "#9EFF00";
                                        arcVerde[0].style.strokeWidth = "10";
                                        arcVioleta[0].style.stroke = "#9EFF00";
                                        arcVioleta[0].style.strokeWidth = "10";


                                        setTimeout(() => {
                                                document.getElementById("popMensagem").classList.add('popMensagemOn');
                                                document.getElementById("tituloMensagem").innerHTML = "Está incorreto!";
                                                document.getElementById("tituloMensagem").style.color = "#FF0000";
                                                textoMensagem();
                                                document.getElementById("botaoSairMensagem").onclick = function () {
                                                        document.getElementById("popMensagem").classList.remove('popMensagemOn');

                                                        /*document.getElementById("corTextoNivel1").innerHTML = stringCorTextoNivel1[Math.floor(Math.random() *
                                                        stringCorTextoNivel1.length)];
                                                        corTextoNivel1 = document.getElementById("corTextoNivel1").innerHTML;
                                                        quadrado.style.strokeWidth = "0";
                                                        quadradoBranco.style.strokeWidth = "1";
                                                        quadradoBranco.style.stroke = "rgb(0,0,0)";*/
                                                        var path = document.querySelectorAll("path");
                                                        for (let i = 0; i < path.length; i++) {
                                                                console.log("sair");
                                                                path[i].style.stroke = "#FFFFFF";
                                                                path[i].style.strokeWidth = "2";
                                                        }
                                                        tituloCores.innerHTML = "6 cores terciárias!";
                                                        arrayCoresClicadas.length = 0;
                                                        console.log(arrayCoresClicadas);
                                                };
                                        }, 2000);
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
                                        cor[0].style.strokeWidth = "10";
                                } else {
                                        cor[0].style.stroke = "#FF0000";
                                        cor[0].style.strokeWidth = "10";
                                }
                                arrayCoresClicadas.push(cor[0].classList.value);


                                console.log(arrayCoresClicadas);
                                arrayCoresClicadas.sort();
                                console.log(arrayCoresClicadas);
                                var circulo3 = document.getElementById("circulo3");
                                var comparaTerciarias = comparaArraysPrimarias(arrayCoresClicadas, arrayCoresTerciarias);
                                if (comparaTerciarias == true) {
                                        console.log("É igual!!!");
                                        circulo3.style.border = "5px #9EFF00 solid";
                                        pontuacao = pontuacao + 6;
                                        document.getElementById("pontuacaoNivel2").innerHTML = "Pontuação Nível 2: <b>" +
                                            pontuacao + " </b>de 12 pontos";


                                        setTimeout(() => {
                                                document.getElementById("popMensagem").classList.add('popMensagemOn');
                                                document.getElementById("tituloMensagem").innerHTML = "Está correto!";
                                                document.getElementById("tituloMensagem").style.color = "#9EFF00";
                                                textoMensagem();
                                                document.getElementById("botaoSairMensagem").onclick = function () {
                                                        document.getElementById("popMensagem").classList.remove('popMensagemOn');

                                                        /*document.getElementById("corTextoNivel1").innerHTML = stringCorTextoNivel1[Math.floor(Math.random() *
                                                        stringCorTextoNivel1.length)];
                                                        corTextoNivel1 = document.getElementById("corTextoNivel1").innerHTML;
                                                        quadrado.style.strokeWidth = "0";
                                                        quadradoBranco.style.strokeWidth = "1";
                                                        quadradoBranco.style.stroke = "rgb(0,0,0)";*/
                                                        var path = document.querySelectorAll("path");
                                                        for (let i = 0; i < path.length; i++) {
                                                                console.log("sair");
                                                                path[i].style.stroke = "#FFFFFF";
                                                                path[i].style.strokeWidth = "2";
                                                        }
                                                        //tituloCores.innerHTML = "6 cores terciárias!";
                                                        setTimeout(() => {
                                                                window.location = "nivel3.html";
                                                        }, 1000);
                                                        arrayCoresClicadas.length = 0;
                                                        console.log(arrayCoresClicadas);
                                                };
                                        }, 2000);

                                } else if (arrayCoresClicadas.length == arrayCoresTerciarias.length && comparaTerciarias == false) {
                                        console.log("Não é igual");
                                        circulo3.style.border = "5px #FF0000 solid";
                                        arcVermelhoLaranja[0].style.stroke = "#9EFF00";
                                        arcVermelhoLaranja[0].style.strokeWidth = "10";
                                        arcVerdeAzul[0].style.stroke = "#9EFF00";
                                        arcVerdeAzul[0].style.strokeWidth = "10";
                                        arcVioletaVermelho[0].style.stroke = "#9EFF00";
                                        arcVioletaVermelho[0].style.strokeWidth = "10";
                                        arcAmareloLaranja[0].style.stroke = "#9EFF00";
                                        arcAmareloLaranja[0].style.strokeWidth = "10";
                                        arcAmareloVerde[0].style.stroke = "#9EFF00";
                                        arcAmareloVerde[0].style.strokeWidth = "10";
                                        arcAzulVioleta[0].style.stroke = "#9EFF00";
                                        arcAzulVioleta[0].style.strokeWidth = "10";


                                        setTimeout(() => {
                                                document.getElementById("popMensagem").classList.add('popMensagemOn');
                                                document.getElementById("tituloMensagem").innerHTML = "Está incorreto!";
                                                document.getElementById("tituloMensagem").style.color = "#FF0000";
                                                textoMensagem();
                                                document.getElementById("botaoSairMensagem").onclick = function () {
                                                        document.getElementById("popMensagem").classList.remove('popMensagemOn');

                                                        /*document.getElementById("corTextoNivel1").innerHTML = stringCorTextoNivel1[Math.floor(Math.random() *
                                                        stringCorTextoNivel1.length)];
                                                        corTextoNivel1 = document.getElementById("corTextoNivel1").innerHTML;
                                                        quadrado.style.strokeWidth = "0";
                                                        quadradoBranco.style.strokeWidth = "1";
                                                        quadradoBranco.style.stroke = "rgb(0,0,0)";*/
                                                        var path = document.querySelectorAll("path");
                                                        for (let i = 0; i < path.length; i++) {
                                                                console.log("sair");
                                                                path[i].style.stroke = "#FFFFFF";
                                                                path[i].style.strokeWidth = "2";
                                                        }
                                                        //tituloCores.innerHTML = "6 cores terciárias!";
                                                        setTimeout(() => {
                                                                window.location = "nivel3.html";
                                                        }, 1000);
                                                        arrayCoresClicadas.length = 0;
                                                        console.log(arrayCoresClicadas);
                                                };
                                        }, 2000);
                                }
                        }




                        /*if(contadorCliquesPrimaria > 2){
                                console.log("já clicou 3 vezes");
                                // contadorCliquesPrimaria=0;
                        }*/

                });

                //if(cor[0].classList.value== "arcAmarelo" &&)
        }
}




function textoMensagem() {
        if (tituloCores.innerHTML == "3 cores primárias!") {
        document.getElementById("textoMensagem").innerHTML = "As <b>3 cores primárias</b> são: " +
            "o <b>vermelho</b>, o <b>amarelo</b> e o <b>azul</b>. Estas cores são primárias, pois não são criadas através de nenhuma mistura. " +
            "Se misturarmos 2 destas cores é possível obter as <b>cores secundárias</b>.";
        }

        if(tituloCores.innerHTML == "3 cores secundárias!") {
                document.getElementById("textoMensagem").innerHTML = "As <b>3 cores secundárias</b> são: " +
                    "o <b>laranja</b>, o <b>verde</b> e o <b>violeta</b>. Estas cores são secundárias, pois são criadas através da mistura das cores primárias. " +
                    "Se misturarmos 2 destas cores é possível obter as <b>cores terciárias</b>.";
        }

        if(tituloCores.innerHTML == "6 cores terciárias!") {
                document.getElementById("textoMensagem").innerHTML = "As <b>6 cores terciárias</b> são: " +
                    "o <b>amarelo-laranja</b>, o <b>amarelo-verde</b>, o <b>azul-verde</b>, o <b>azul-violeta</b>, o <b>vermelho-laranja</b> e o <b>vermelho-violeta</b>. " +
                    "Estas cores são terciárias, pois são criadas através da mistura das cores secundárias.";
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




/*function setup() {
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

        /!*noStroke();
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
        ellipse(width/2, height/2, 250, 250);*!/
}*/

