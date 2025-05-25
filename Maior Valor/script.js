let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function  Maior(){
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
   
    resultado.textContent = Math.max (v1,v2);

}

botao.onclick = function (){
    Maior ();

}
