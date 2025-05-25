valoratual = document.querySelector("#valoratual");
botao = document.querySelector("#botao");
resultado = document.querySelector("#resultado");


function calcular() {
    let valor = Number(valoratual.value);
     //1%
    let p1 = valor * ( 1 + 1 / 100);
    //2%
    let p2 = valor * (1 + 2 / 100);
    //5% 
    let p5 = valor * ( 1 + 5 / 100);
    //10%
    let p10 = valor * (1 + 10 / 100);


    resultado.innerHTML = 
    "Se subir 1%:"+p1+"<br>" + 
    "Se subir 2%:"+p2+" <br>"+ 
    "Se subir 5%:"+p5+"<br>"+
    "Se subir 10%:"+p10;


}
botao.onclick = function () {
    calcular();

}