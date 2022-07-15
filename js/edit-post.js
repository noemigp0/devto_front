
fetch(urlUpd)
  .then((response) => {

    if (!response.ok) {

      throw new Error(
        `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
      );
    } else {   
      return response.json();
    }
  })
  .then((response) => {   
    if (response) {
      let { title, author, content, tags, urlCoverImage, avatarAuthor } = response;
      

      document.getElementById("usuario").value = author;
      document.getElementById("cover-image").value = urlCoverImage;
      document.getElementById("titulo").value = title;
      document.getElementById("etiqueta").value = tags;
      document.getElementById("contenido").value = content;
      document.getElementById("imagen-avatar").value = avatarAuthor;
  
    } else {
      alertMessage("Usuario no existente");
    }
  })
  .catch((err) => {
   
  });

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
      createdDate: "17/06/2022",
      mintoread: parseInt(Math.random() * 1000),
      reactions: parseInt(Math.random() * 1000),
      comments: parseInt(Math.random() * 1000),
      category: category === "seleccione" ? "latest" : category,
      avatarAuthor: avatarImage,
    };
 
    fetch(urlUpd, {
      method: "PATCH",
      body: JSON.stringify(postUpdated),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((finalResponse) => {

        alertMessage(`Se actualizo exitosamente el post`, "warning")
        setTimeout(() => {
          window.location.pathname = '/index.html'
        }, 2000);
      })
      .catch((err) => {
    
      });
  }
});
/**
 * Eliminar koder
 */
let btnEliminar = document.getElementById("deletePost");
btnEliminar.addEventListener("click", () => {
  fetch(urlUpd,
    {
      method: "DELETE",
    }
  )
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

      window.location.pathname = "/index.html";
    })
    .catch((err) => {
 
    });
});
