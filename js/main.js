const navbar = document.QuerySelector("#navbar");
const abrir = document.QuerySelector("#abrir");
const cerrar = document.QuerySelector("#cerrar");

abrir.addEventListener("click", () => {
  navbar.classList.add("visible");
});
