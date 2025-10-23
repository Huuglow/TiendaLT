/* Función para abrir el menú */
function openNav() {
    // Establece el ancho del menú a 280px para mostrarlo
    document.getElementById("mySidebar").style.width = "280px";
    // Empuja el contenido principal hacia la derecha
    document.getElementById("main-content").style.marginLeft = "280px";
}

/* Función para cerrar el menú */
function closeNav() {
    // Restablece el ancho a 0 para ocultarlo
    document.getElementById("mySidebar").style.width = "0";
    // Devuelve el contenido principal a su posición original
    document.getElementById("main-content").style.marginLeft = "0";
}

