let ipMedia = document.querySelector('#ipMedia')
let btVerificar = document.querySelector('btVerificar')

function verificarAprovado(){
    let media = Number(ipMedia.value);

    if(media >= 6.0) {
        alert('o aluno está aprovado');}else{
    alert('o aluno está reprovado');}
}
btVerificar.onclick = function(){
    verificarAprovado();
}