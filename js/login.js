function validate(){
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   if(username == "in" && password == "in"){
      window.location = "homepage.html";
   } else {
      alert("Incorrect Username or Password!");
   }
}
