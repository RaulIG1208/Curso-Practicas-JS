export function PostCard(props){
   
  let {date, jetpack_featured_media_url, id, slug, title} = props;
  let dateFormat = new Date(date).toLocaleString();
  
  document.addEventListener("click",(e)=>{
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId",e.target.dataset.id);
    
  });

  return `
  <article class="post-card">
  <img src=${jetpack_featured_media_url} alt="${title.rendered}">
  <h2>${title.rendered}</h2>
  <p>
  <time datetime=${date}>${dateFormat}</time>
  <a href="#/${slug}" data-id=${id}>Ver Publicación</a>
  </p>
  </article>
  `;
}