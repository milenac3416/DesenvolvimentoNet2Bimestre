let quantaspessoas = document.querySelector("#quantaspessoas");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular (){
    let p = Number(quantaspessoas.value);
    let ovos = p * 2; 
    let queijo = p *50;

resultado.textContent = ovos + ' ovos, ' + queijo + ' g de queijo.';

}
botao.onclick = function(){
    calcular();
}