function validate(){
   var u = document.getElementById("username").value;
   var p = document.getElementById("password").value;
   if (u == "username" && p == "password"){
      alert("welcome!");
      window.location = "homepage.html";
      return false;
   }
   else{
      alert("Incorrect Username or Password!");
      return false;
   }
}

