export default function Post(props) {
  
  let {title, date, content} = props,
  dateForm = new Date(date).toLocaleString();
  
  return `
  <section class="post-page">
  <aside>
  <h2>${title.rendered}</h2>
  <time dateTime = ${date}>${dateForm}</time>
  </aside>
  <hr>
  <article>${content.rendered}</article>
  </section>
  `;
}