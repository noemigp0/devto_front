
let btnEnviar = document.getElementById("sendPost");
btnEnviar.addEventListener("click", () => {
  // obtener la data
  let usuario = document.getElementById("usuario").value;
  let imagen = document.getElementById("cover-image").value;
  let titulo = document.getElementById("titulo").value;
  let etiqueta = document.getElementById("etiqueta").value;
  let contenido = document.getElementById("contenido").value;
  let imagenAvatar = document.getElementById("imagen-avatar").value;
  let categoria = document.getElementById("categoria").value;

  if (
    usuario === "" ||
    imagen === "" ||
    titulo === "" ||
    etiqueta === "" ||
    contenido === "" ||
    imagenAvatar === ""||
    categoria ===""
  ) {
    // alert("Campos vacios");

    alertMessage("Whoops, salió mal: ningún campo debe estar vacío", "danger");
  } else {
    // formar el nuevo koder
    let newPost = {
      title: titulo,
      content: contenido,
      tags: etiqueta,
      urlCoverImage: imagen,
      author: usuario,
      createdDate: "17/06/2022",
      mintoread: parseInt(Math.random() * 1000),
      reactions: parseInt(Math.random() * 1000),
      comments: parseInt(Math.random() * 1000),
      category: categoria,
      avatarAuthor: imagenAvatar,
    };
    // console.log(newPost);
    fetch("https://koder19g-ngp-default-rtdb.firebaseio.com/posts/.json", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((finalResponse) => {
       
        alertMessage(`Post ${finalResponse.name} creado con exito`, "success")
        setTimeout(() => {
          window.location.pathname = '/index.html'
        }, 2000);
      })
      .catch((err) => {
        // console.log(error);
      });
  }
});
