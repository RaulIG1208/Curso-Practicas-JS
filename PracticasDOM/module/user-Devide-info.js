const d = document,
n = navigator,
ua = n.userAgent; 

export default function userDeviceInfo(div){
  //console.log(ua)
  const $div = d.querySelector(div),
  isMobile = {
    android:()=>ua.match(/android/i),
    ios: ()=>ua.match(/iphone|ipad|ipod/i),
    any: function () {
      return this.android()||this.ios();
    },
  },
  isDesktop = {
    linux: ()=>ua.match(/linux/i),
    mac:()=>ua.match(/mac os/i),
    window:()=>ua.match(/windows nt/i),
    any: function (){
      return this.linux()||this.mac()||this.window();
    }
  },
  isBroswer = {
    safari:()=>ua.match(/safari/i),
    opera:()=>ua.match(/opera|opera mini/i),
    firefox:()=>ua.match(/firefox/i),
    chrome:()=>ua.match(/chrome/i),
    edge:()=>ua.match(/edg/i),
    any: function () {
      return this.opera()||
      this.firefox()||
      this.edge()||
      this.chrome()||
      this.safari();
    }
  };
  $div.innerHTML = `
  <ul>
  <li>User Agent: <b>${ua}</b></li>
  <li>Plataforma: <b>${isMobile.any()? isMobile.any():isDesktop.any()}</b></li>
  <li>Navegador: <b>${isBroswer.any()}</b></li>
  </ul>`;
  //console.log(isMobile.android());

  // //Contenido Exclusivo//
  // if(isBroswer.edge()){
  //   $div.innerHTML += `<mar`
  // }
}