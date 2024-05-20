let ipNumero1 = document.querySelector ("#ipNumero1")
let ipNumero2 = document.querySelector ("#ipNumero2")
let ipNumero3 = document.querySelector ("#ipNumero3")
let ipNumero4 = document.querySelector ("#ipNumero4")
let btMenor = document.querySelector ("#btMenor")
let h1menor =  document.querySelector ("#h1menor")
//revisar codigo
function acharmaior(){
    let menor = Number(ipNumero1.value)
    if(menor > Number(ipNumero2.value)){
        menor = Number(ipNumero2.value)
    }

    if(menor > Number(ipNumero3.value)){
        menor = Number(ipNumero3.value)
    }

    if(menor > Number(ipNumero4.value)){
        menor = Number(ipNumero4.value)
    }

    h1menor.textContent= menor

    
  
  
  
 
 
 


    }

btMenor.onclick = function (){
    acharmaior();
}