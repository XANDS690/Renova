document.addEventListener("DOMContentLoaded", function () {
   const registrationForm = document.getElementById("registrationForm");
   const jsonServerUrl = "YOUR_JSON_SERVER_URL"; // Replace with your MyJSON server URL
 
   registrationForm.addEventListener("submit", function (event) {
     event.preventDefault();
 
     const name = document.getElementById("name").value;
     const password = document.getElementById("password").value;
 
     if (name.trim() === "" || password.trim() === "") {
       alert("Nome e senha são obrigatórios.");
       return;
     }
 
     const user = {
       name,
       password
     };
 
     // Send a POST request to add the new user to the JSON server
     fetch(jsonServerUrl, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(user)
     })
       .then((response) => response.json())
       .then(() => {
         alert("Cadastro realizado com sucesso!");
       })
       .catch((error) => {
         console.error("Error adding user:", error);
       });
 
     document.getElementById("name").value = "";
     document.getElementById("password").value = "";
   });
 
   // Your existing code for Google Sign-In...
 });
 