let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let botao = document.querySelector("#botao");
let resultado1 = document.querySelector("#resultado1");
let resultado2 = document.querySelector("#resultado2");
let resultado3 = document.querySelector("#resultado3");
let resultado4 = document.querySelector("#resultado4");
 
function calcular (){
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    let soma = n1 + n2;
    let sub = n1 - n2;
    let mult = n1 * n2;
    let div = n1 / n2;

    resultado1.textContent ='Soma' + soma;
    resultado2.innerHTML = 'Subtra&ccedil&atildeo' +sub;
    resultado3.textContent = mult;
    resultado4.textContent = div;

}
botao.onclick = function (){
    calcular ();
}


