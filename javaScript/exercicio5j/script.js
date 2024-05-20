let ipNumero1 = document.querySelector ("#ipNumero1")
let ipNumero2 = document.querySelector ("#ipNumero2")
let btMaior = document.querySelector ("#btMaior")


function acharmaior (){
   
   if (Number(ipNumero1.value) > (ipNumero2.value))
       {
       alert (ipNumero1.value);
    } else  {alert (ipNumero2.value);
        
    } 
  

}



btMaior.onclick = function (){
    acharmaior();
}