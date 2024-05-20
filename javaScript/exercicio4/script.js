let numero1 = document.querySelector ("#numero1")
let numero2 = document.querySelector ("#numero2")
let numero3 = document.querySelector ("#numero3")
let numero1L2 = document.querySelector ("#numero1L2")
let numero2L2 = document.querySelector ("#numero2L2")
let numero3L2 = document.querySelector ("#numero3L2")
let h1media = document.querySelector ("#h1media")
let h1ponderada = document.querySelector ("#h1ponderada")
let h1somamedia = document.querySelector ("#h1somamedia")
let h1mediaMedia = document.querySelector ("#h1mediaMedia")
let btcalcular = document.querySelector ("#btcalcular")

btcalcular.onclick = function () {
    calcular();
    

    
}

function calcular() {
   let media = (Number(numero1.value) + Number(numero2.value) + Number (numero3.value)) / 3;
   h1media.textContent = media;
   let ponderada = (Number(numero1L2.value * 3) + Number(numero2L2.value * 2) + Number(numero3L2.value * 5)) / 10;
   h1ponderada.textContent = ponderada;
   let somarmedia = Number(ponderada) + Number(media);
   h1somamedia.textContent = somarmedia;
   let medimedia = (Number(ponderada) + Number(media)) /2;
   h1mediaMedia.textContent = medimedia;
}