const d = document;

export default function returnUp(scroll){
  const $scroll = document.querySelector(scroll)
  d.addEventListener("scroll",(e)=>{
    if (scrollY > 300) {
      $scroll.style.opacity = "1";
      $scroll.style.visibility = "visible";
    }else{
      $scroll.style.opacity = "0";
      $scroll.style.visibility = "hidden";
    }
  })

  d.addEventListener("click",(e)=>{
    
    if (e.target.matches(scroll)) {
      console.log("se Presiono el boton");
      scrollTo(0,0);
    }
  })
}