function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //Show message that there is an error with the username...
  if (userEntered.length < 6){
    document.getElementById("usernameError").innerHTML="User Name Must Be More Than 6 Characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");//Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    }
  else {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if (userEntered == passEntered){
    document.getElementById("usernameError").innerHTML="Username Name Must Not Be The Same As Password.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");//Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  //Show message that there is an error with the password...
  if (passEntered == "password"){
    document.getElementById("passwordError").innerHTML="Password May Not Be Password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if (passEntered == "PASSWORD"){
    document.getElementById("passwordError").innerHTML="Password May Not Be Password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if (passEntered == userEntered){
    document.getElementById("passwordError").innerHTML="Password Name Must Not Be The Same As Username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");//Turn the username items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if (20 > passEntered.length > 6){
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else {
    document.getElementById("passwordError").innerHTML="Password Name Must Be Between 6 And 20 Characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");//Turn the username items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }


  //Turn the password items red

}
