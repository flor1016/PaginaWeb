//para pasar el menu de navegacion de atras a delante
const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

//para cambiar los colores del menu de navegacion
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

//para que gire el pie de pagina
Array.from(document.querySelectorAll(".navigation-button")).forEach(item =>{
    item.onclick = ()=>{
        item.parentElement.parentElement.classList.toggle("change");
    }
});
