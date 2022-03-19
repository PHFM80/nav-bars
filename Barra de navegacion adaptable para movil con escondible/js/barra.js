// Con esto haremos que se esconda la barra con el scroll
let ubicacion_Principal = window.pageYOffset;
window.onscroll = function () {
  let desplazamiento_Actual = window.pageYOffset;
  if (ubicacion_Principal >= desplazamiento_Actual) {
    this.document.getElementById("navbar").style.top = "0";
  } else {
    this.document.getElementById("navbar").style.top = "-100px";
  }
  ubicacion_Principal = desplazamiento_Actual;
};
