function resetPosRegLog() {
  var y = document.getElementById("register-pop-up");
  var z = document.getElementById("login-pop-up");
  if (document.getElementById("sign-up-popup").style.height == "0px") {
    y.style.left = 0;
    z.style.left = "+350px";
  }
}
function signUp_appear() {
  var x = document.getElementById("sign-up-popup");
  if (x.style.height == "500px") {
    x.style.opacity = 0;
    x.style.height = "0px";
    x.style.border = 0;
    document.getElementById("axx").style.display = "inline-block";
    // resetPosRegLog();
  } else {
    x.style.height = "500px";
    x.style.border = "2px solid hsla(54, 100%, 50%, 0.8)";
    x.style.opacity = 1;
    document.getElementById("axx").style.display = "inline-block";
    // resetPosRegLog();
  }
}
function toLoginForm() {
  document.getElementById("register-pop-up").style.left = "-350px";
  document.getElementById("login-pop-up").style.left = "0px";
}
function toRegisterForm() {
  document.getElementById("register-pop-up").style.left = "0px";
  document.getElementById("login-pop-up").style.left = "+350px";
}
function changePassword() {
  alert("Có cái mật khẩu cũng quên, đồ con gà ->0<-");
}
// ------------send data-----------

function alertInfoRegister() {
  var user = document.getElementById("userNameSignup").value;
  var email = document.getElementById("emailSignup").value;
  var password = document.getElementById("passwordSignup").value;
  var repassword = document.getElementById("rePasswordSignup").value;
  if ((user || email || password || repassword) == "") {
    alert("Please type all input field");
    return;
  }
  if (password == repassword) {
    alert(
      "Welcome " +
        user +
        "\nYour Email: " +
        email +
        "\nYour password: " +
        password
    );
  } else {
    alert("Your Password and Repassword aren't equal, please check its again.");
  }
}

function alertInfoLogin() {
  var user = document.getElementById("userNameSignin").value;
  var password = document.getElementById("userPasswordSignin").value;
  if ((user || password) == "") {
    alert("Please type all input field");
    return;
  }
  alert("Welcome " + user + "\nYour Password: " + password);
}
