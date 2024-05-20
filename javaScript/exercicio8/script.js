let ipCodigo = document.querySelector ("#ipCodigo")
let btCodigo = document.querySelector ("#btCodigo")
let h3Codigo = document.querySelector ("#h3Codigo")
function buscarproduto(){
    

    if (String (ipCodigo.value) == "001") {
       h3Codigo.textContent  = "parafuso";
    }
    else if(String (ipCodigo.value) == "002" ){
      h3Codigo.textContent = "porca";
    }
    else if (String (ipCodigo.value) == "003"){
       h3Codigo.textContent = "prego";

    }
    else{
     h3Codigo.textContent = "diversos";
    }




}


btCodigo.onclick = function () {
    buscarproduto();
    
}