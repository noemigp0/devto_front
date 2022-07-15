const listPosts = (objPost, strType) => {
  let { success, data } = objPost;
  let postCardTemplate = "";
  let i = 0;
  let arrList = [];
  let flagFirstTime = 0;

  arrList = Object.entries(data.post);
  console.log(arrList);
  arrReverse = arrList.reverse();

  for (i = 0; i < arrList.length; i++) {
    let postElements = arrList[i][1];

    let tags = !postElements.tags ? "" : postElements.tags.split(",");
    // console.log(paintTags(tags))

    let postCardTemplateImage = "";
    if (strType === postElements.category || strType === "") {
      if (flagFirstTime === 0) {
        postCardTemplateImage = `
          <div>
            <img class="card-img-top" src="${postElements.urlCoverImage}" alt="Side Project Sunday! What do you have going on?" style="background-color: rgb(221, 221, 221);">  
          </div>
          `;
      }

      postCardTemplate += `
      ${flagFirstTime == 0 ? postCardTemplateImage : ""}

      <div class="card">

        <div class="CardHead">
          <div><img class="ImgTmb" src="${
            postElements.avatarAuthor === "url"
              ? "https://i.pravatar.cc/150?img=" + parseInt(Math.random() * 10)
              : postElements.avatarAuthor
          }" /></div>
            <div class="CardTitleHead">
              <div class="Name">${postElements.author}</div>
              <div class="FS12 FGray">${postElements.createdDate}</div>
          </div>
        </div> 

        <div class="CardBody">
          <div class="ArticleName"><a class="LinkArticle" href="./post.html?postKey=${
            arrList[i][1]["_id"]
          }">
            ${postElements.title}
          </a></div>        
        <div class="Hashtags">
          ${paintTags(tags)}
        </div>
      </div>
      
      <div class="CardFoot">
        <button type="button" class="btn btn-sm LinkReactions"><img class="Reactions" src="img/Heart.png" />${
          postElements.reactions + parseInt(Math.random() * 1000)
        }
          reactions</button>
        <button type="button" class="btn btn-sm LinkReactions"><img class="Reactions" src="img/Gb.png" />${
          postElements.comments + parseInt(Math.random() * 1000)
        }
          comments</button>
        <div class="Spacer"></div>
        <div class="FS12 FGray p-1">${
          postElements.mintoread + parseInt(Math.random() * 100)
        } min read</div>
        <button type="button" class="btn btn-sm Save">Save</button>
      </div>

      </div>

      `;

      flagFirstTime = 1;
    }
  }
  document.querySelector("#post-card-author").innerHTML = postCardTemplate;
};

//

const loadData = (strType) => {
  fetch(`${API_URL}/post`)
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
      listPosts(response, strType);
    });
};

let btn_relevant = document.getElementById("btn_relevant");
btn_relevant.addEventListener("click", () => {
  loadData("relevant");
});

let btn_lates = document.getElementById("btn_lates");
btn_lates.addEventListener("click", () => {
  loadData("latest");
});

let btn_top = document.getElementById("btn_top");
btn_top.addEventListener("click", () => {
  loadData("Top");
});

loadData("");
