let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular (){
    let id =Number(idade.value);
    let nm = (nome.value);
    let calculo = id * 365;
    resultado.innerText = nm + ", Voc\u00EA j\u00E1 viveu " + calculo +" dias.";
} 
botao.onclick = function(){
    calcular();
}