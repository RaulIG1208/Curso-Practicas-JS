const d = document;

export default function scrollSpy(){
  const $section = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries)=>{
   //console.log("Entries",entries)
   entries.forEach(el =>{
     const $enlace = d.querySelector(`a[href="#${el.target.id}"]`)

    if (el.isIntersecting) {
      $enlace.classList.add("activo");
    }else{
      $enlace.classList.remove("activo");
    }
   })
  }
  const observar = new IntersectionObserver(cb,{
    threshold: 0.5
  });
 $section.forEach(el => {
   observar.observe(el);
 });
}