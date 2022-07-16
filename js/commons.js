let idPost = window.location.search.substring(9);

let API_URL = "http://localhost:8080";
//let API_URL_ID = `${API_URL}/post/${idPost}`
let API_URL_UPD = `${API_URL}/post/${idPost}`;

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

  alertPlaceholder.append(wrapper);
};

const paintTags = (tagsArray) => {
  // console.log(tagsArray);
  let tagsTemplate = "";

  if (typeof tagsArray != "string") {
    tagsArray.forEach((element) => {
      tagsTemplate += `
       <a class="LinksHashtags FGray" href="#"> #${element}</a>
      `;
    });
  }

  return tagsTemplate;
};




