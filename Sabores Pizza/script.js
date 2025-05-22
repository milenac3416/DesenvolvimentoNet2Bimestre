let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let refrigerantes = document.querySelector("#refrigerantes");
let botao = document.querySelector("#botao");
let total = document.querySelector("#total");

function somarpedido (){
  let refri = Number(refrigerantes.value);
  let valorTotal = 4 * 12 + refri * 7;

  total.innerHTML =
    "Sabores escolhidos: " +
    sabor1.value + ", " +
    sabor2.value + ", " +
    sabor3.value + ", " +
    sabor4.value + "<br>" +
    "Refrigerantes: " + refri + "<br>" +
    "Total: R$ " + valorTotal;
}
botao.onclick = function (){
  somarpedido();
}
