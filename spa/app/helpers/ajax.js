export async function ajax(props) {
  let {url, cbSuccess } = props;

  await fetch(url)
  .then(res=>res.ok?res.json():Promise.reject(res))
  .then(json=> cbSuccess(json))
  .catch(err=>{
    console.log(err);
    let message = err.statuText || "Ocurrio un error al acceder a la API";  
    document.querySelector(".loader").style.display = "none";  
    document.getElementById("main").innerHTML = `
    <div class="error">
    <p>Error ${err.status}: ${err.statuText}</p>
    </div>
    `;
  })
}