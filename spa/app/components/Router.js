import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import Post from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";


export async function Router(){
  const d = document,
  w = window,
  $main = d.getElementById("main");

  let {hash} = location;

  console.log(hash);
  

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess:(posts)=>{
        //console.log(posts);
        let html = "";
        posts.forEach(post=>html += PostCard(post));
        d.getElementById("main").innerHTML = html; 
      }
    })
  }else if (hash.includes("#/search")) {
    
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false    
    }

    await ajax({
      url: `${api.SEARCH}/${query}`,
      cbSuccess: (search)=>{
        console.log(search);
        let html = "";
        if (search.length === 0) {
          html = `
          <p class="error">No existen resultados de busqueda para el termino <mark>${query}</mark></p>`;
        }else{

          search.forEach(el=>{
            html += SearchCard(el);
          })
          
        }

        $main.innerHTML = html;
      }
    })

  }else if (hash === "#/contacto") {
    //$main.innerHTML = `<h2>Seccion del Contacto</h2>` 
    $main.appendChild(ContactForm());   
  }else {
    console.log(`${api.POSTS}/${localStorage.getItem("wpPostId")}`);
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess:(post)=>{
        console.log(post);
        $main.innerHTML = Post(post);
      }
    })
    //$main.innerHTML = `<h2>Seccion del Contenido del Post seleccionado</h2>`  
  }
  d.querySelector(".loader").style.display = "none";
  
  
}