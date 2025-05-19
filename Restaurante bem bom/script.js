let pesoprato = document.querySelector("#pesoprato");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular (){
    let pp = Number(pesoprato.value);
    let total = pp * 12.00 - 0.50;
    resultado.innerText = 'Valor a pagar: ' + total + ' Reais.'

}
botao.onclick = function (){
    calcular();
}