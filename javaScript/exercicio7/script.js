let h3Impar = document.querySelector ("#h3Impar")
let ipNumero1 = document.querySelector ("#ipNumero1")
let btMenor = document.querySelector ("#btMenor")
btMenor.onclick = function(){
 impar();

}


function impar() {
    if (Number (ipNumero1.value) % 2 === 1) {
        alert('o numero e impar');
        
    } else {alert('o numero e par');
        
    }
    
}