let caja = document.getElementById("caja");
let btn_1 = document.getElementById("btn-1");
let btn_2 = document.getElementById("btn-2");
let btn_3 = document.getElementById("btn-3");
let btn_4 = document.getElementById("btn-4");
let btn_5 = document.getElementById("btn-5");
let btn_6 = document.getElementById("btn-6");

btn_1.addEventListener("click", function () {
  document
    .getElementById("caja")
    .setAttribute(
      "style",
      "background-color: #e53e3e; border:1px solid black;width: 100%;height: 100%"
    );
});

btn_2.addEventListener("click", function () {
  document
    .getElementById("caja")
    .setAttribute(
      "style",
      "background-color: #dd6b20; border:1px solid black;width: 100%;height: 100%"
    );
});

btn_3.addEventListener("click", function () {
  document
    .getElementById("caja")
    .setAttribute(
      "style",
      "background-color: #faf089; border:1px solid black;width: 100%;height: 100%"
    );
});

btn_4.addEventListener("click", function () {
  document
    .getElementById("caja")
    .setAttribute(
      "style",
      "background-color: #48bb78; border:1px solid black;width: 100%;height: 100%"
    );
});

btn_5.addEventListener("click", function () {
  document
    .getElementById("caja")
    .setAttribute(
      "style",
      "background-color: #81e6d9; border:1px solid black;width: 100%;height: 100%"
    );
});

btn_6.addEventListener("click", function () {
  document
    .getElementById("caja")
    .setAttribute(
      "style",
      "background-color: #d53f8c; border:1px solid black;width: 100%;height: 100%"
    );
});
