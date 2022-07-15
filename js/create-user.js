
let btnsendUser = document.getElementById("sendUser");
let btnclose = document.getElementById("close");
let btnclosex = document.getElementById("closex");

btnclosex.addEventListener("click", () => {

  window.location.pathname = '/index.html'

})

btnclose.addEventListener("click", () => {

  window.location.pathname = '/index.html'

})

btnsendUser.addEventListener("click", () => {
  // obtener la data
  let usuario = document.getElementById("usuario").value;
  let email = document.getElementById("email").value;
  let contrasena = document.getElementById("contrasena").value;

  if (
    usuario === "" ||
    email === "" ||
    contrasena === "" 
   
  ) {
    // alert("Campos vacios");

    alertMessage("Whoops, salió mal: ningún campo debe estar vacío", "danger");
  } else {
    // formar el nuevo user
    let newUser = {
        
        email : email,
        password : contrasena,
        name: usuario
        
    };
    // console.log(newPost);
    fetch(`${API_URL}/users/`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((finalResponse) => {
       
        console.log( finalResponse )
        alertMessage(`Usuario ${finalResponse.name} creado con exito`, "success")
        setTimeout(() => {
          window.location.pathname = '/index.html'
        }, 2000);
      })
      .catch((err) => {
        // console.log(error);
      });
  }
});
