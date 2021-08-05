const d = document;
let x = 0,
y = 0;

export default function coliciones(e,container,item) {
  const $container = d.querySelector(container),
  $item = d.querySelector(item),
  objContainer =  $container.getBoundingClientRect(),
  objItem = $item.getBoundingClientRect();
  
     
  // console.log(objContainer);
  // console.log(objItem);
  
  if(e.code === "ArrowUp" && objContainer.top < (objItem.top - 10)){
    e.preventDefault();
    y--;
  }
  if(e.code === "ArrowDown" && objContainer.bottom > (objItem.bottom + 10)){
    e.preventDefault();
    y++;
  }
  if(e.code === "ArrowRight" && objContainer.right > (objItem.right + 10)){
    e.preventDefault();
    console.log("derecha");
    x++;
  }
  if(e.code === "ArrowLeft" && objContainer.left < (objItem.left - 10)){
    e.preventDefault();
    x--;
  }
  
  $item.style.transform = `translate(${x*10}px,${y*10}px)`;  
  
}