const d = document,
n = navigator,
w = window;

export default function detecConexion(){
  const $div = d.createElement("div");
  
  //console.log(w);
  const isOnLine = ()=>{
    console.log("estoy");
    if (n.onLine) {
      $div.textContent = "Conexion Restablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    }else{
      $div.textContent = "Conexion Perdida";
      $div.classList.remove("online");
      $div.classList.add("offline");
    }
    d.body.insertAdjacentElement("afterbegin",$div)
    setTimeout(() => {d.body.removeChild($div);
    }, 2000);
    
  }
  w.addEventListener("online",(e)=>isOnLine());
  w.addEventListener("offline",(e)=>isOnLine());
  
}