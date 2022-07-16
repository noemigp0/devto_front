let btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", () => {

    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    if (
      email === "" ||
      password === "" 
     
    ) {
      // alert("Campos vacios");  
      alertMessage("Whoops, salió mal: ningún campo debe estar vacío", "danger");

    } 
    else {
      // buscar user
      let loginUser = {
          
          email,
          password,
          
      };
      
      fetch(`${API_URL}/login/`, {
        method: "POST",
        body: JSON.stringify(loginUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((finalResponse) => {
         
          console.log( finalResponse )
          if( finalResponse.success ){

            const token = finalResponse.data
            console.log("token", token)

            localStorage.setItem("devtoken", token)

            alertMessage(`Usuario logeado con exito`, "success")
            setTimeout(() => {
                window.location.pathname = '/index.html'
            }, 2000);
          }
          else {
            alertMessage("Usuario o contraseña incorrectos", "danger")
          }
        })
        .catch((err) => {
           console.log(err);
        });
    }

})