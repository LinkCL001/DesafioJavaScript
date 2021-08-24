var sumar = document.getElementById("btn-sumar");
sumar.addEventListener("click", function () {
  var valor_1 = document.getElementById("valor1").value;
  var valor_2 = document.getElementById("valor2").value;
  var resultado = parseInt(valor_1) + parseInt(valor_2);
  document.querySelector(".resultado").innerHTML = `${resultado}`;
});
var restar = document.getElementById("btn-restar");
restar.addEventListener("click", function () {
  var valor_1 = document.getElementById("valor1").value;
  var valor_2 = document.getElementById("valor2").value;
  var resultado = parseInt(valor_1) - parseInt(valor_2);
  if (resultado < 0) {
    resultado = 0;
    document.querySelector(".resultado").innerHTML = `${resultado}`;
  } else {
    document.querySelector(".resultado").innerHTML = `${resultado}`;
  }
});
