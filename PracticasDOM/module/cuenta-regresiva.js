const d = document;

export default function cuentaRegresiva(id,limitday,message){
  const $counterdown = d.getElementById(id),
  counterdownDate = new Date(limitday).getTime();
  let counter;
  counter = setInterval(() => {
    const now = new Date().getTime(),
    limitcounter = counterdownDate - now;
    let days = Math.floor(limitcounter/(1000*60*60*24)),
    hours = Math.floor((limitcounter%(1000*60*60*24))/(1000*60*60)),
    minutos = Math.floor((limitcounter%(1000*60*60))/(1000*60)),
    segundos = Math.floor((limitcounter%(1000*60))/(1000));

    $counterdown.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, ${minutos} minutos y ${segundos} segundos</h3>`;
    //console.log(hours);
    if (limitcounter < 0) {
      clearInterval(counter);
      $counterdown.innerHTML = `<h3>${message}</h3>`;
    }
  }, 1000);
}