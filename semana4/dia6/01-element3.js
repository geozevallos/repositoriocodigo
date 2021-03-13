// Modifcando el estilo de un elemento

// let body = document.querySelector("body")
// body.style.backgroundColor = "#222"
// body.style.color = "#eee"

function qsall(selector){
    return document.querySelectorAll(selector);
}

function qs(selector){
    return document.querySelector(selector);
}


let lis = qsall(".header__item");
lis = Array.from(lis);

lis.forEach((headerItem) => {
    // Configurando el click de cada <li></li>
    headerItem.onclick = function () {
        const itemActive = qs(".header__item.active");
        itemActive.classList.remove("active");
        headerItem.classList.add("active")
    }
})