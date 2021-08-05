const d = document,
w = window;

export default function  responsiveAdd(id,mq,desktop,mobile){
  const $div = d.getElementById(id),
  $mq = w.matchMedia(mq);
  //console.log($mq);
  
  const responsive = (e)=>{
    //console.log(e);
    if (e.matches) {
      //console.log("estoy en modo desktop");
      $div.innerHTML = desktop;
    }else{
      //console.log("estoy en modo mobile");
      $div.textContent = mobile;
    }
  }
  $mq.addEventListener("change",responsive);
  responsive($mq);
}