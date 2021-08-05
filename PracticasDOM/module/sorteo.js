const d = document;

export default function sorteo(player,btn){
  let sort;
  const getWinner = (player)=>{
    let $players = d.querySelectorAll(player),
    random = Math.floor(Math.random()*$players.length);
    alert(`El ganador es ${$players[random].textContent}`);
    console.log($players);
  }
  d.addEventListener("click",(e)=>{

    if (e.target.matches(btn)) {
      // sort = Math.round(Math.random()*10);
      // console.log(sort);
      // sort === 1? alert("El Ganador es JavaScript"):
      // sort === 2? alert("El Ganador es PHP"):
      // sort === 3? alert("El Ganador es JAVA"):
      // sort === 4? alert("El Ganador es C"):
      // sort === 5? alert("El Ganador es Python"):
      // sort === 6? alert("El Ganador es Ruby"):
      // sort === 7? alert("El Ganador es Go"):
      // sort === 8? alert("El Ganador es Visual Basic"):
      // sort === 9? alert("El Ganador es Rust"):
      // sort === 10? alert("El Ganador es Perl"):
      // alert("Intentar de nuevo");

      getWinner(player);
    }
  })
}