function detailValidation(){
    var userName=document.getElementById('userName').value;
    var userPassword=document.getElementById('userPassword').value;
    var result="Not vallid.";
    var idBoolean,passwordBoolean;
    var pattern = /^[a-zA-Z0-9]+$/;
    var minLength = 8; 
    var hasUpperCase = /[A-Z]/.test(userPassword);
    var hasLowerCase = /[a-z]/.test(userPassword);
    var hasDigit = /\d/.test(userPassword); 
    var hasSpecialChar = /[!@#$%^&*]/.test(userPassword); 

    if(userName == "" || userPassword == ""){
      if(userName == "")document.getElementById('userNameError').innerHTML="User Name can not be blank";
      else if(userPassword == "") document.getElementById('userPasswordError').innerHTML="User Password can not be blank";
      
      refreshPage();
    }
    if(userName == "" || userPassword == ""){
        result="password or user name can not be null";
    }
    idBoolean = pattern.test(userName);

    if ( userPassword.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasDigit &&
        hasSpecialChar
      ){
        passwordBoolean=true; 
      } else{
        passwordBoolean=false;
      }

      if(passwordBoolean && idBoolean){
        result = "Password and user name is valid.";
      }

      document.getElementById('result').innerText = result;
}
function refreshPage() 
{
  location.reload();
}
  function over(){
    alert("Mouse Over");
  }
  function out(){
    alert("Mouse Out");
  }