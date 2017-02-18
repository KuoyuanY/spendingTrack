function validate(){
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   if (username == "username" && password == "password"){
      alert("welcome!");
      window.location = "homepage.html";
      return false
   }
   else {
      alert("Incorrect Username or Password!");
      return false;
   }
}
