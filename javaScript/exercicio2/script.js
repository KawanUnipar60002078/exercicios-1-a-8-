let ipQuantidade = document.querySelector('#ipQuantidade')

let precoProduto = document.querySelector('#precoProduto')

let h3Preco = document.querySelector('#h3Preco')

let btCalculo = document.querySelector ('#btCalculo')

function caculoKg() { 
    let resultado =  Number(precoProduto.value) * Number(ipQuantidade.value);
    h3Preco.textContent  = resultado;
}

btCalculo.onclick = function  (){
    caculoKg();
}