const d = document;

export default function filterSearch(search,card){
  const $search = d.getElementById(search);

  d.addEventListener("keyup",(e)=>{
    if (e.target.matches(search)) {
      console.log(d.querySelectorAll(card));
      d.querySelectorAll(card).forEach(el=>(el.textContent.toLowerCase().includes(e.target.value))?el.classList.remove("filter") :el.classList.add("filter"));
    }
  })
}