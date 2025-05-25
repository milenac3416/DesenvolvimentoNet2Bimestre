let conta = document.querySelector("#conta");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function dividirConta() {
    let valorDigitado = Number(conta.value);
    let total = Math.max(valorDigitado, 0);

    let parteInteira = Math.floor(total / 3);
    let carlos = parteInteira;
    let andre = parteInteira;
    let felipe = total - (carlos + andre);

    resultado.innerHTML =
        "Carlos deve pagar R$ " + carlos +
        "<br>André deve pagar R$ " + andre +
        "<br>Felipe deve pagar R$ " + felipe;
}

botao.onclick = dividirConta;
