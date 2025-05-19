let pao = document.querySelector("#pao");
let broa = document.querySelector("#broa");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular (){
    let p =Number(pao.value);
    let b =Number(broa.value);
    let total = p * 0.12 + b * 1.50;
    let poupança = total * (10/100);
    resultado.innerText = "Total Vendido: R$ " + total + " " +
    "Guardar na poupança: R$" + poupança;

}
botao.onclick = function(){
    calcular();
}
