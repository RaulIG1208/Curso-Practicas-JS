const d = document,
n = navigator,
geo = n.geolocation;

export default function Geolocalizacion(id) {
  const $id = d.getElementById(id);

  if (!geo) {
    $id.innerHTML = `<p>La geolocalizacion no esta habilitada para tu navegador</p>`
  };
  const option = {
    enableHighAccuracy:true,
    timeout:5000,
    maximunAge:0
  }
  const existe = (position)=>{
    let latitud = position.coords.latitude;
    let longitud = position.coords.longitude;
    $id.innerHTML = `<p>Latitud es: <b>${latitud}°</b> <br>Longitud es: <b>${longitud}°</b><br>
    <a href="http://www.google.com/maps/@${latitud},${longitud},13z" target="_blank" >Ver en Google maps</a></p>`
  }

  const err = (er)=>{
    $id.innerHTML = `<p>Error ${er.code}: ${er.message} <br>Tienes que habilitar la geolocalizacion para poder observar este cuadro</p>`;
  }
  geo.getCurrentPosition(existe,err,option);
}