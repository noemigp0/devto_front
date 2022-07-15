
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
 
     let templateCI = "";    

     if (response) {
      
       let { title, author, content, tags, urlCoverImage, avatarAuthor } = response;
       
  
       document.getElementById("authorPost").innerHTML  = author;
       document.getElementById("titlePost").innerHTML = title;
       document.getElementById("content").innerHTML = content;

       templateCI = `<img src="${urlCoverImage}" alt="No picture found" />`
       document.getElementById("cover-image").innerHTML = templateCI;
       templateCI = `<img src="${avatarAuthor}" alt="No picture found" />`;
       document.getElementById("avatar-image").innerHTML = templateCI;
       document.getElementById("avatar-image-sb").innerHTML = templateCI;
       document.getElementById("authorPostSB").innerHTML = author;
       document.getElementById("more-from").innerHTML = author;
 
       templateCI = `${paintTags(tags.split(","))}`;      
       document.getElementById("Hashtags").innerHTML = templateCI;    
   
     } else {
      alertMessage("Usuario no existente");
     }
   })
   .catch((err) => {
 
   });


   
let btnActualizar = document.getElementById("updatePost");
btnActualizar.addEventListener("click", () => {
    window.location.pathname = "./updatePost.html"
})
