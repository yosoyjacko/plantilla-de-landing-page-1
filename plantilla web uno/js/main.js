let ubicacionPrincipal = window.pageYOffset;

AOS.init();


window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        this.document.getElementsByTagName("nav")[0].style.top = "-100px"
    }

    ubicacionPrincipal = desplazamientoActual;
})

//menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo =true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.document ="#fff";
        semaforo=false
    }else{
        document.querySelectorAll(".hamburguer")[0].style.document ="#000";
        semaforo=true
    }
    enlacesHeader.classList.toggle("menudos")
})