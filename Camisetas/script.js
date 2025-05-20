let pequena = document.querySelector("#pequena");
let media = document.querySelector("#media");
let grande = document.querySelector("#grande");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular (){
    let p = Number(pequena.value);
    let m = Number(media.value);
    let g = Number(grande.value);
    let valortotal = (p * 10) + (m * 12) + (g * 15);
    resultado.textContent = ' O valor da compra foi apenas ' + valortotal + ' Reais.';
}
botao.onclick = function (){
    calcular();
}