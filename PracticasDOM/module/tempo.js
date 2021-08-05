const d = document;

export function startReloj(reloj,start,stop){
  const $reloj = d.querySelector(reloj),
  $start = d.querySelector(start),
  $stop = d.querySelector(stop);

  let counter;

  d.addEventListener("click",(e)=>{
    if (e.target.matches(start)) {
      counter = setInterval(() => {
        const hora = new Date
        $reloj.innerHTML = `<h1>${hora.toTimeString()}</h1>`
      }, 1000);
    }

    if (e.target.matches(stop)) {
      clearInterval(counter);
    }
  })

}

export function startAlarm(div,start,stop){

  const $div = d.querySelector(div),
  $audio = d.createElement("audio");
  d.addEventListener("click",(e)=>{
    if (e.target.matches(start)) {
      $audio.setAttribute("src","media/perforar_1.mp3");
      $div.appendChild($audio);
      $audio.play();
    }
    if (e.target.matches(stop)) {
      $audio.pause();
      $audio.currentTime = 0;
    }
  })
}