
let listaProductos = document.getElementById("productos")

console.log(listaProductos)

/*let contenedor = document.querySelector(".contenedor") //si es con id es # -- selecciona solo 1*/

//let contenedor = document.querySelectorAll(".contenedor") //si es con id es # -- selecciona solo 1

//console.log(contenedor[1])/* si con el [] mostras el espacio en especifico puesto, por si tenes varios con la misma clase :)*/
//console.log(contenedor.innerHTML) 

/*let container = document.getElementsByClassName("contador")
console.log(contenedor[0].innerHTML)*/



let contenedor = document.querySelectorAll(".contenedor") //esto te tira  en una ventana emergente con la info
setTimeout(() => {
    alert(contenedor[0].innerHTML)
}, 100);


/*-------------------- */
let futer = document.querySelector("footer")

let resta = document.getElementById("restar")
let cont = document.getElementById("contador")
let suma = document.getElementById("sumar")


let counter = 1

cont.innerText = counter

function disminuirMorfi() {
    if (counter > 0) {
        counter = counter - 1
        cont.innerText = counter
    } else {
        cont.style.color = "red"
        resta.style.cursor = "not-allowed"
    }
}

function aumentarMorfi() {
    if (counter < 10) {
        resta.style.color="black"
        resta.style.cursor ="pointer"
        counter = counter + 1
        cont.innerText = counter
    }
}




