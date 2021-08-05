const d = document;

export default function responsiveTester(form){
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit",(e)=>{
    //e.preventDefault();

    if (e.target === $form) {
      //console.log("vamos bien");
      tester = window.open($form.direccion.value,
      "tester",
      `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`);
    }
  })

  d.addEventListener("click",(e)=>{

    if (e.target === $form.cerrar) {
      console.log("cerrar");
      tester.close();
    }
  })
}