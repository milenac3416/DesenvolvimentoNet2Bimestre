let numero = document.querySelector("#numero");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function separarDigitos() {
    let n = Number(numero.value);

    let centena = Math.floor(n / 100);
    let dezena = Math.floor((n % 100) / 10);
    let unidade = n % 10;

    resultado.innerHTML = "CENTENA = " + centena + " DEZENA = " + dezena + " UNIDADE = " + unidade;
}

botao.onclick = separarDigitos;
