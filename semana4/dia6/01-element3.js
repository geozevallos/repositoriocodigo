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

// Modificar el active del link


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

// Modificar el tema a través del foquito
let headerTheme = qs(".header__theme");
let linkTheme = qs("#linkTheme");

headerTheme.onclick = function () {
    if(linkTheme.getAttribute("href").indexOf("light") >= 0){
        linkTheme.setAttribute("href", "./01-element3-dark.css");
    } else {
        linkTheme.setAttribute("href", "./01-element3-light.css");
    }
}

