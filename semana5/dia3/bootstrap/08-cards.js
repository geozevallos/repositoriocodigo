/**
 * 1. Atrapas a todos los cardas
 */

const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    /**
     * Evento que se dispara
     * cuando el mouse pasa por encima
     * de elemento
     */
    card.onmouseover = () => {
        card.classList.remove("shadow-sm");
        card.classList.add("shadow")
    }

    card.onmouseout = () => {
        card.classList.remove("shadow");
        card.classList.add("shadow-sm")
    }
}) 