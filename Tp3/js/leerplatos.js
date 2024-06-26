let platos = document.querySelector(".contenedor_tarjetas")

fetch('js/platos_argentinos.json')
.then((response) => {
     return response.json()
    })


.then
    ((plato) => {
      for (let i=0; i < 8; i++){
         platos.innerHTML +=
         /*html*/
         ` <a href="plato.html"  class="tarjetas sombra">
         <div class="foto pr">
             <img src="${plato[i].image}" class="img_fit">
             <div class="tag pa sombra">${plato[i].price}</div>
         </div>


         <div class="plato_desc pd25">
             <h4>${plato[i].plato}</h4>
             <span>
                 ${plato[i].description}
             </span>
         </div>
         
     </a>`
         
         
       
    }
})

let opinion = document.querySelector(".contenedor_tarjeta")

fetch('js/resenias.json')/**json */
    .then((response) => {
        return response.json()
    })


    .then
    ((plato) => {
        for (let i = 0; i < 10; i++) {
            opinion.innerHTML +=
                /*html*/
                `<div href=""  class="tarjetas sombra">
         <div class="foto pr">
             <img src=${plato[i].img} alt="" class="img_fit">
             
         </div>
         <div class="plato_desc pd25">
             <h4>${plato[i].nombre}</h4>
             <span>
             ${plato[i].description}
             </span>
         </div>
         
     </div>`



        }
    })


