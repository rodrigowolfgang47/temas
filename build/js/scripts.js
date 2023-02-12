const navMenu = document.querySelector("body .main .nav-content");
const topoFixo = document.querySelector(".topo-fixo");

var tamanhoDoMenu = navMenu.clientHeight;

window.onscroll = () => {

    var scrollAtual = window.scrollY;

    if(scrollAtual >= tamanhoDoMenu){
        topoFixo.classList.add('open');
    }else{
        topoFixo.classList.remove('open');
    }
}