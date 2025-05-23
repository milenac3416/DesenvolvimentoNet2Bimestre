let raio = document.querySelector("#raio");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular (){
let pi = 3.14;
let r = Number(raio.value);
let area = pi * r * r ;
resultado.innerHTML = "O valor da &aacute;rea &eacute;: " + area.toFixed(2) + 
" cm&sup2.";

}
botao.onclick = function () {
    calcular();
}
