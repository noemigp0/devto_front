
const readPostbyId = () =>{

  console.log("readPostbyId", API_URL_UPD )

  fetch( API_URL_UPD ).then((response) => {
    console.log(response)
    if (!response.ok) {
      throw new Error(
        `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
      );
    }
    else {
      return response.json();
    }
  })
  .then((response) => {
    let { success, data } = response;
    let newData = data.post 
    console.log(newData)
      //console.log( "readPostbyId 1", data.post )
      if (response) {
        let { title, author, content, tags, urlCoverImage, avatar } =
        newData;

        document.getElementById("usuario").value = author;
        document.getElementById("cover-image").value = urlCoverImage;
        document.getElementById("titulo").value = title;
        document.getElementById("etiqueta").value = tags;
        document.getElementById("contenido").value = content;
        document.getElementById("imagen-avatar").value = avatar;
      } else {
        alertMessage("Usuario no existente");
      }
    })
    .catch((err) => {});

}

let btnActualizar = document.getElementById("updatePost");

btnActualizar.addEventListener("click", () => {
 
  let author = document.getElementById("usuario").value
  let urlCoverImage = document.getElementById("cover-image").value;
  let title = document.getElementById("titulo").value
  let tags = document.getElementById("etiqueta").value
  let content = document.getElementById("contenido").value
  let avatarImage = document.getElementById("imagen-avatar").value;
  let category = document.getElementById("categoria").value;

  if (
    author === "" ||
    urlCoverImage === "" ||
    title === "" ||
    tags === "" ||
    content === "" ||
    avatarImage ===  "" ||
    category === "") {
      alertMessage("Campos vacios");
  } else {



    let postUpdated = {
      title: title,
      content: content,
      tags: tags,
      urlCoverImage: urlCoverImage,
      author: author,
      createdDate: "2022-07-14",
      mintoread: parseInt(Math.random() * 1000),
      reactions: parseInt(Math.random() * 1000),
      comments: parseInt(Math.random() * 1000),
      category: category === "seleccione" ? "latest" : category,
      avatar: avatarImage,
    };
 
    fetch(`${API_URL}/post/actualizar/${idPost}`, {
      method: "PATCH",      
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(postUpdated)
    })
      .then((response) => {
        return response.json();
      })
      .then((finalResponse) => {
        alertMessage(`Se actualizo exitosamente el post`, "warning");
        setTimeout(() => {
          window.location.pathname = "/index.html";
        }, 50000);
      })
      .catch((err) => {});
  }
});

/**
 * Eliminar koder
 */
let btnEliminar = document.getElementById("deletePost");
btnEliminar.addEventListener("click", () => {

  const devtoken = localStorage.getItem("devtoken")

  fetch(API_URL_UPD, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${devtoken}`
    }
  })
    .then((response) => {
      if (!response.ok) {
        let err = new Error(
          `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
        );
        throw err;
      } else {
        
        return response.json();
      }
    })
    .then((response) => {
      alertMessage(`Se actualizo exitosamente el post`, "warning");
      setTimeout(() => {
        window.location.pathname = "/index.html";
      }, 2000);
      
    })
    .catch((err) => {
      alertMessage(`Debes iniciar sesion para esta acción`, "danger");      
      console.log( err )
      setTimeout(() => {
        window.location.pathname = "/index.html";
      }, 2000);
    });
});






readPostbyId()