let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  LimpiarErrores();
  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;

  let resultado = validar(nombre, asunto, mensaje);

  if (resultado == true) {
    exito();
  }
});

function LimpiarErrores() {
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
  document.querySelector(".resultado").innerHTML = "";
}

function exito() {
  document.querySelector(".resultado").innerHTML =
    "Mensaje enviado con éxito!!!";
}

function validar(nombre, asunto, mensaje) {
  let pasamoslaValidacion = true;
  let validacionNombre = /[a-zA-Z]/gim;

  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML =
      "Ingrese un nombre válido";
    pasamoslaValidacion = false;
  }

  let validacionAsunto = /[a-zA-Z]/gim;

  if (validacionAsunto.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML =
      "Ingrese un asunto válido";
    pasamoslaValidacion = false;
  }

  let validacionMensaje = /[a-zA-Z]/gim;

  if (validacionMensaje.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML =
      "Ingrese mensaje valido";
    pasamoslaValidacion = false;
  }

  return pasamoslaValidacion;
}
