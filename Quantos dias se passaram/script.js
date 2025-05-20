let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular (){
    let d = Number(dia.value);
    let m = Number(mes.value);
    let diaspassados = (m - 1) * 30 + d;
    resultado.innerHTML = "J\u00E1 se passaram " + diaspassados + " dias desde o in&iacutecio do ano.";

    
}
botao.onclick = function(){
    calcular();

}