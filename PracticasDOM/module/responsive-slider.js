const d = document;

export default function responsiveSlider(prev,next,slide){
  const $slide = d.querySelectorAll(slide);
  let contador = 0;
  
  //console.log($slide);

  /* Transicion de slider de manera asincrona por medio de un set interval*/  
    let interval = setInterval(() => {    
      $slide[contador].classList.remove("slider-active");
      if (contador === ($slide.length - 1)) {
        contador = 0;        
      }else {
        contador++;
      }
      $slide[contador].classList.add("slider-active");
  }, 2000);
  
  
  /*Manejo del slider por medio de los botones prev y next*/
  d.addEventListener("click",(e)=>{
    if (e.target.matches(prev)) {
      e.preventDefault();
      clearInterval(interval);

      $slide[contador].classList.remove("slider-active");
      if (contador === 0) {
        contador = $slide.length-1;        
      }else {
        contador--;
      }
      $slide[contador].classList.add("slider-active");

    }
    
    if (e.target.matches(next)) {
      e.preventDefault();
      clearInterval(interval);
      
      $slide[contador].classList.remove("slider-active");
      if (contador === ($slide.length - 1)) {
        contador = 0;        
      }else {
        contador++;
      }
      $slide[contador].classList.add("slider-active");
    }

    setTimeout(() => {
      
    }, 3000);
    
  })
}