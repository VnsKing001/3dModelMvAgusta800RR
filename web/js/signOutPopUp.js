function signOut_appear() {
  var x = document.getElementById("sign-out-pop-up");
  if (x.style.height == "250px") {
    x.style.opacity = 0;
    x.style.height = "0px";
    x.style.border = 0;
  } else {
    x.style.height = "250px";
    x.style.border = "2px solid hsla(54, 100%, 50%, 0.8)";
    x.style.opacity = 1;
  }
}

