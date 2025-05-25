let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
 let valor4 = document.querySelector("#valor4"); 
 let botao = document.querySelector("#botao"); 
 let resultado = document.querySelector("#resultado"); 
 
 function calcular (){ 
    let v1 = Number(valor1.value); 
    let v2 = Number(valor2.value); 
    let v3 = Number(valor3.value); 
    let v4 = Number(valor4.value); 
    resultado.textContent = Math.min (v1, v2, v3, v4); 
} 
botao.onclick = function(){ 
    calcular (); 
}