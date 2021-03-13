function toLogin(){
    document.getElementById("form-container").style.transform = "translateX(-50%)";
}
function toRegister(){
    document.getElementById("form-container").style.transform = "translateX(0%)";
}
function openForgotAccountForm(){
    document.getElementById("forgot-account-container").style.top="";
}
function closeLoginForm(){
    document.getElementById("login-container").style.top="-100vh";
}
function closeForgotAccountForm(){
    document.getElementById("forgot-account-container").style.top = "-100vh";
}
function openLoginForm(){
    document.getElementById("login-container").style.top = "";
}
function toForgotAccountForm(){
    closeLoginForm();
    // setTimeout(openForgotAccountForm(),800);
    openForgotAccountForm();
}
function toLoginForm(){
    openLoginForm();
    closeForgotAccountForm();
}
// setInterval(()=>{
//     document.getElementById('bg-image').style.backgroundImage="url(./img/mvs.jpg)";
// }, 2000);
// setInterval(()=>{
//     document.getElementById('bg-image').style.backgroundImage="url(./img/e.jpg)";
// }, 4000);
