let resto = document.querySelector(".resultado")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 10; i++){
        let puntu=""
        let rango =data[i].rango
        
        if(data[i].puntuacion === "10"){
            puntu= "star star  star star star star star star star star "
        }
        else if(data[i].puntuacion === "9"){
            puntu= "star star  star star star star star star star"
        }
        else if(data[i].puntuacion === "8"){
            puntu= "star star  star star star star star star"
        }
        else if(data[i].puntuacion === "7"){
            puntu= "star star  star star star star star"
        }
       else if(data[i].puntuacion === "6"){
            puntu= "star star  star star star star"
        }

        else if(data[i].puntuacion === "5"){
            puntu= "star star star star star"
        }

        else if(data[i].puntuacion === "4"){
            puntu= "star star star star"
        }
        else if(data[i].puntuacion === "3"){
            puntu = "star star star"
        }
        else if(data[i].puntuacion === "2"){
            puntu = "star star"
        }
        else {
            puntu = " "
        }
        


         document.querySelector('.resultado').innerHTML +=

         /*html*/`
     <a href="resto.html" class="resto image_fill sombra">
     <div class="img-resto">
         <img src=${data[i].avatar.src}  alt="">
     </div>
     <div class="datos-resto">
         <div class="titulo_resto">
         ${data[i].name}
         </div>
         <div class="texto_resto">
            <p>${data[i].direccion}</p>
                 <p>${data[i].horario}s</p>
         </div>
         <div class="puntuaciones">
             <div class="puntu_resto iconos"> 
                 <h5> ${puntu}</h5>
             </div>
         </div>

 
     </div>

     <div class="punt-resto ">${data[i].puntuacion}</div>
 </a>`
       
    }
})


