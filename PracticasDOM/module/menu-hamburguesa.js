const d = document;
export default function menuHamburguesa(btn,panel) {
  const $panel = d.querySelector(panel),
  $btn = d.querySelector(btn);
  d.addEventListener("click",(e)=>{

    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      $panel.classList.toggle("is-active");
      $btn.classList.toggle("is-active");      
    }
    
    if (e.target.matches(`${panel} a`)) {
      $panel.classList.remove("is-active");
      $btn.classList.remove("is-active");      
    }
  })

}