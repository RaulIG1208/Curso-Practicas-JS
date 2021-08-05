const d = document;

/* *** AJAX: Objeto XMLHttpReques *** */
(() => {
  //Instanciamos el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = d.getElementById("xhr"),
    $fragment = d.createDocumentFragment();

  //Creamos el manejador del evento
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    //console.log(xhr);
    if (xhr.status >= 200 && xhr.status <= 300) {
      //console.log("Exito")
      //console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      //console.log(json);

      json.forEach(el => {
        const $li = d.createElement("li");

        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      })
      $xhr.appendChild($fragment);
    } else {
      console.log("Error")

    }
  })
  //Se abre la peticion con el siguiente metodo
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //Se envia la peticion con el siguiente metodo
  xhr.send();
})();

/* *** AJAX: API Fetch *** */
(() => {
  const $fetch = d.getElementById("fetch"),
    $fragment = d.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res=>{
    //   return res.ok?res.json(): Promise.reject(res);
    // })
    .then((res) => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
      //console.log(json);
      json.forEach(el => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li);
      })
      $fetch.appendChild($fragment);
    })
    .catch(err => {
      console.log("estamos en el catch", err);
      let message = err.statustext || "Ha ocurrido un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Este codigo se ejecutara siempre");
    })
})();

/* *** AJAX: API Fetch + Async-Await *** */
(() => {
  const $fetchAsync = d.getElementById("fetch-async"),
    $fragment = d.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      //console.log(res,json);

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach(el => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li);
      })
      $fetchAsync.appendChild($fragment);

    } catch (err) {
      let message = err.statustext || "Ha ocurrido un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {

    }
  }

  getData();
})();

/* *** AJAX: Libreria Axios *** */
(() => {
  const $axios = d.getElementById("axios"),
    $fragment = d.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      //console.log(res);
      let json = res.data;

      json.forEach(el => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      //console.log("Estamos en el catch:",err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      //console.log("No importa el resultado de axios este se ejecutara siempre");
    });
})();

/* *** AJAX: Libreria Axios + Async-Await *** */
(() => {
  const $axiosAsync = d.getElementById("axios-async"),
    $fragment = d.createDocumentFragment();


  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach(el => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      })
      $axiosAsync.appendChild($fragment);

    } catch (err) {
      //console.log("Estamos en el catch", err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutara independientemente de lo que suceda");
    }
  }

  getData();
})();

