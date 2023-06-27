const navbarItem = document.querySelectorAll(".navbar__item");
navbarItem.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active");
  });
});

const botonInicio = document.querySelectorAll(".boton__inicio");
botonInicio.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active");
  });
});
