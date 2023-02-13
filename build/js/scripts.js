const navMenu = document.querySelector("body .main .nav-content"),

navMenuMobile = document.querySelector('.nav-content.mobile'),

topoFixo = document.querySelector(".topo-fixo"),

hambMenu = document.querySelector(".hamb"),

mobileMenu = document.querySelector('.menu-mobile'),

close = document.querySelector('.close'),

hambMenuFixo = document.querySelector('.menu-mb-fix .hamb'),

topoFixoMobile = document.querySelector('.menu-mb-fix');


var tamanhoDoMenu = navMenu.clientHeight;
var tamanhoDoMenuMobile = navMenuMobile.clientHeight;

window.onscroll = () => {

    var scrollAtual = window.scrollY;

    if(scrollAtual >= tamanhoDoMenu){
        topoFixo.classList.add('open');
    }else{
        topoFixo.classList.remove('open');
    }
}

if(document.documentElement.clientWidth <= 1156 ){
    window.onscroll = () => {
    
        var scrollAtual = window.scrollY;
    
        if(scrollAtual >= tamanhoDoMenuMobile){
            topoFixoMobile.classList.add('drop');
        }else{
            topoFixoMobile.classList.remove('drop');
        }
    }
}




hambMenu.addEventListener("click", () =>{
    mobileMenu.classList.toggle("opened");
})

hambMenuFixo.addEventListener("click", () =>{
    mobileMenu.classList.toggle("opened");
})

close.addEventListener("click", () =>{
    mobileMenu.classList.remove("opened");
})