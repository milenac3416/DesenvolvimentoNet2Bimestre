let salario = document.querySelector("#salario");
let botao = document.querySelector("#botao");
let salarioinicial = document.querySelector("#salarioinicial");
let salarioaumento = document.querySelector("#salarioaumento");
let salariodesconto = document.querySelector("#salariodesconto");

function calcular (){
    let s = Number(salario.value);
    let a = s + (s * 15 /100);
    let d = a - (a * 8 /100);

    salarioinicial.innerHTML = "Salário inicial: " + s + " reais.";
    salarioaumento.innerHTML = "Com aumento de 15%: " + a + " reais.";
    salariodesconto.innerHTML = "Com desconto de 8%: " + d + " reais.";
   
}
botao.onclick = function (){
    calcular();
}
