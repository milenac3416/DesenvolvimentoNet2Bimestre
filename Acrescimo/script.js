let saldo = document.querySelector("#saldo");
let porcentagem = document.querySelector("#porcentagem");
let btcalcular = document.querySelector("#btcalcular");
let resultado = document.querySelector("#resultado");

function calcular (){
    let S = Number(saldo.value);
    let P = Number(porcentagem.value);
    resultado.textContent = S * (1 + P/ 100);
} 
btcalcular.onclick = function (){
    calcular();

}