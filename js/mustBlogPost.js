console.log(idPost)


const showPost = (objPost) => {
    
    let postTemplate = `
    ${objPost.content}
    `
document.getElementById("test").innerHTML = postTemplate

}

fetch(`https://koder19g-ngp-default-rtdb.firebaseio.com/posts/${idPost}.json`)
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
    showPost(response);
  });