// Obtener elementos del DOM
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];

// Abrir el modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la "X"
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la ventana modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
