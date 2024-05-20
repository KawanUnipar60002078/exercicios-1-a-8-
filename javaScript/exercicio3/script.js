let ipSaldo = document.querySelector('#ipSaldo')
let ipReajuste = document.querySelector("#ipReajuste")
let btCalculo = document.querySelector("#btCalculo")

btCalculo.onclick = function(){
    saldoreajustado();


}

saldoreajustado = function (){
   let saldofinal = Number(ipSaldo.value) + (Number(ipSaldo.value) * 1) / 100;
   ipReajuste.value = saldofinal;
}