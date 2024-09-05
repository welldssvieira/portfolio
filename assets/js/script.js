

function abrirMenu() {
    var botaoAbrir = document.querySelector(".botao_abrir");
    var botaoFechar = document.querySelector(".botao_fechar");
    var menuMobile = document.querySelector("#menu_mobile #navegacao")

    botaoAbrir.style.display = "none";
    botaoFechar.style.display = "flex";
    menuMobile.style.display = "flex"

}

function fecharMenu() {
    var botaoAbrir = document.querySelector(".botao_abrir");
    var botaoFechar = document.querySelector(".botao_fechar");
    var menuMobile = document.querySelector("#menu_mobile #navegacao")

    botaoFechar.style.display = "none";
    botaoAbrir.style.display = "flex";
    menuMobile.style.display = "none"

}



function mudarIdioma() {
    var menu = document.querySelector("#menu_mobile .demais_idiomas");

    
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";  
    } else {
        menu.style.display = "none";  
    }
}


document.querySelector(".idiomas").addEventListener("click", mudarIdioma);


