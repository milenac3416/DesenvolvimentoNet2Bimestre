let xum = document.querySelector("#xum");
let yum = document.querySelector("#yum");
let xdois = document.querySelector("#xdois");
let ydois = document.querySelector("#ydois");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular(){
    let x1 = Number(xum.value);
    let y1 = Number(yum.value);
    let x2 = Number(xdois.value);
    let y2 = Number(ydois.value); 

    let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) **2);

    resultado.innerHTML = ' A dist&acirc;ncia &eacute; de: ' + distancia + '.';
}
botao.onclick = function (){
    calcular();

}