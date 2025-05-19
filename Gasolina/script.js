let preçolitro = document.querySelector("#preçolitro");
let dinheiro = document.querySelector("#dinheiro");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular (){
    let d = Number(dinheiro.value);
    let pl = Number(preçolitro.value);
    let litros = d / pl;
    resultado.innerText = 'Voc\u00EA abasteceu ' + litros +
     ' Litros. E custou apenas ' + d + ' Reais! ';

}
botao.onclick = function (){
    calcular ();
}