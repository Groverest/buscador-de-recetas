import { selectCategorias } from "./variables.js"
import { obtenerCategorias, obtenerFavoritos, seleccionarCategoria } from "./funciones.js";
function iniciarApp() {

    if(selectCategorias) {
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv) {
        obtenerFavoritos();
    }
    
}

document.addEventListener('DOMContentLoaded', iniciarApp);