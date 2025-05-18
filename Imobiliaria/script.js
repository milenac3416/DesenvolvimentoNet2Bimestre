let largura = document.querySelector("#largura");
let comprimento = document.querySelector("#comprimento");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular (){
    let l = Number(largura.value);
    let c = Number(comprimento.value);
    let area = l * c;
    resultado.innerText = "Área: " + area + " m²";

}
botao.onclick = function(){
    calcular();
}