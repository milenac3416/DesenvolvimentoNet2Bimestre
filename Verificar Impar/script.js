let valor1 = document.querySelector("#valor1");
let botao = document.querySelector("#botao");
let resultato = document.querySelector("#resultado");

function verificar (){
    let v1 = Number(valor1.value);
    let mensagens = ["Não é ímpar", "É ímpar"];
    resultado.textContent = mensagens[Math.abs(v1 % 2)];

   }
botao.onclick = function(){
    verificar();}
