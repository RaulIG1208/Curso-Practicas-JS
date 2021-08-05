const d = document,
w = window;

export default function smartVideo(){
  const $video = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries)=>{
    //console.log(entries);
     entries.forEach(el=>{
       if(el.isIntersecting){
         el.target.play();
       }else{
         el.target.pause();
       }
       w.addEventListener("visibilitychange",(e)=>{
         //console.log(e);
         e.target.visibilityState === "visible"?el.target.play():el.target.pause();
       })
     })
  }

  const observar = new IntersectionObserver(cb,{threshold:0.5});

  $video.forEach(el=>observar.observe(el))

}