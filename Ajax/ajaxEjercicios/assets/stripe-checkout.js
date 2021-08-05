import stripeKeys from "./stripe-keys.js";
import STRIPE_KEYS from "./stripe-keys.js";

//console.log(STRIPE_KEYS);

const d = document,
$products = d.querySelector(".productos"),
$template = d.getElementById("producto-template").content,
$fragment = d.createDocumentFragment(),
fetchOptions = {
  headers:{
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  }
};

let products,prices;

const moneyFormat = (num)=>`$${num.slice(0,-2)},${num.slice(-2)}`;

Promise.all([
  fetch("https://api.stripe.com/v1/products",fetchOptions),
  fetch("https://api.stripe.com/v1/prices",fetchOptions)
])
.then((responses) => Promise.all(responses.map((res)=>res.json())))
.then(json=>{
  //console.log(json)

  products = json[0].data;
  prices = json[1].data;

  //console.log(products,prices);

  prices.forEach(el=>{
    let producData = products.filter(product =>product.id === el.product);
    //console.log(producData);

    $template.querySelector(".producto img").src = producData[0].images[0];
    $template.querySelector(".producto img").alt = producData[0].name;
    $template.querySelector(".producto").setAttribute("data-price",el.id);
    $template.querySelector(".producto figcaption").innerHTML = `
    ${producData[0].name}
    <br>    
    ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
    `;
    let clone = d.importNode($template,true);

    $fragment.appendChild(clone);
  })
  $products.appendChild($fragment);
})
.catch((err)=>{
  //console.log(err);
  let message = err.statusText || "Ocurrio un error al conectarse con el API de Stripe";
  $produc.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
})

d.addEventListener("click",(e)=>{
  if (e.target.matches(".producto *")) {
    
    let price = e.target.parentElement.getAttribute("data-price");
    console.log(price);
    Stripe(STRIPE_KEYS.public).redirectToCheckout({
      lineItems:[{price, quantity:1}],
      mode: "payment",
      successUrl:"http://127.0.0.1:5500/Ajax/ajaxEjercicios/assets/stripe-success.html",
      cancelUrl:"http://127.0.0.1:5500/Ajax/ajaxEjercicios/assets/stripe-cancel.html"
    })
    .then(res => {
      console.log(res);
      if (res.error) {
        $products.insertAdjacentHTML("afterend",res.error.message);
      }else{

      }
    })
  }
})


