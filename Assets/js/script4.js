let cambioColorAlClickDelBoton = document.getElementById("caja");
let conjuntoBotones = document.querySelectorAll( "button" );

conjuntoBotones.forEach(function (boton) {
    boton.addEventListener("click", function (evento) {
    const elementoAfectadoPorElEvento = evento.target;
    const fondo = elementoAfectadoPorElEvento.style.backgroundColor;
    cambioColorAlClickDelBoton.style.backgroundColor = fondo;
  });
});