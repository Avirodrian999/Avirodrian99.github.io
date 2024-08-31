// Mostrar modal
function showModal() {
    document.getElementById("modal").style.display = "block";
}

// Cerrar modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
