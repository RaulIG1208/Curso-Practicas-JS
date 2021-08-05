const d = document,
ls = localStorage;

export default function modeDom(btn){
  const $btn = d.querySelector(btn),
  moon = "🌙",
  sun = "☀️";

  $btn.textContent = moon;
  const light = ()=>{
    d.body.classList.remove("night");
    $btn.textContent = moon;
    ls.setItem("mode","ligth");
  }

  const dark = ()=>{
    d.body.classList.add("night");
    $btn.textContent = sun;
    ls.setItem("mode","night");
  }

  d.addEventListener("click",(e)=>{
    if (e.target.matches(btn)) {      
      if ($btn.textContent===moon) {
        dark();
      }else{
        light()
      }
    }
  })

  d.addEventListener("DOMContentLoaded",(e)=>{    
    //console.log(ls.getItem("mode"));
    if(ls.getItem("mode") === null){      
      ls.setItem("mode","light");
      light();
    }
    if (ls.getItem("mode" === "light")) {
      light();
    }
  })
  if (ls.getItem("mode") === "night") {
    dark();
  }

}