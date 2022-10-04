//Funcion que me aplica el estilo a la opciÃ²n seleccionada y quita la previamente seleccionada
let opciones = document.querySelectorAll('#links  a');
console.log(opciones);
opciones.forEach(element => {
    element.addEventListener('click',function(){
        seleccionar(element)
    })
});

function seleccionar(link) {
    
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    link.className = "seleccionado";
}

//funcion que muestra el menu responsive
const icono= document.querySelector('#iconoResponsive')
icono.addEventListener('click',function(){
    responsiveMenu()
})
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animacion del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("sass").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("vue").classList.add("barra-progreso4");
        document.getElementById("git").classList.add("barra-progreso5");
        document.getElementById("node").classList.add("barra-progreso6");
        document.getElementById("mongo").classList.add("barra-progreso8");
        document.getElementById("scrum").classList.add("barra-progreso9");
        document.getElementById("php").classList.add("barra-progreso10");
        document.getElementById("mysql").classList.add("barra-progreso11");
    }

}




