let cavalos = document.querySelector("#cavalos");
let botao = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function calcularFerraduras() {
  let quantidade = Number(cavalos.value);
  let ferraduras = quantidade * 4;
  resultado.innerText = "Serão necessárias " + ferraduras + " ferraduras.";
}

botao.onclick = function (){
    calcularFerraduras(); 
}

