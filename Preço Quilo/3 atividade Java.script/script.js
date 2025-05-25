let preco = document.querySelector("#preco");
let quantidade = document.querySelector("#quantidade");
let btcalcular = document.querySelector("#btcalcular");
let resultado = document.querySelector("#resultado");

function Calcular (){
    let p = Number(preco.value);
    let q = Number(quantidade.value);
    resultado.textContent = p * q;

}
    btcalcular.onclick = function (){
        Calcular ();
        
            
}
  
