let idPost = window.location.search.substring(9);


let url = "https://koder19g-ngp-default-rtdb.firebaseio.com/posts/.json"
let urlUpd = `https://koder19g-ngp-default-rtdb.firebaseio.com/posts/${idPost}.json`

//Esta funsion es para los alerts, el cdigo es de bootstrap
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const alertMessage = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
 
  alertPlaceholder.append(wrapper)
 
};



const paintTags = (tagsArray) => {
  // console.log(tagsArray);
  let tagsTemplate = '';
  tagsArray.forEach(element => {
    tagsTemplate += `
       <a class="LinksHashtags FGray" href="#"> #${element}</a>
      `;
  });

  return tagsTemplate

}