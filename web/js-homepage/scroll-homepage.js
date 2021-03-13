//window.onscroll = function () {
//  scrollFunction();
//};
//function scrollFunction() {
//  var mainNav = document.getElementById("main-horizontal-nav");
//  var centerNav = document.getElementById("flex-center-nav");
//  var navHidden1 = document.getElementById("right-nav-hidden1");
//  var navHidden2 = document.getElementById("right-nav-hidden2");
//  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//    mainNav.classList.add("main-horizontal-nav-js");
//    centerNav.classList.add("flex-center-nav-js");
//    for(var i=0; i<=2; i++){
//        document.getElementsByClassName("right-nav-item")[i].style.display='none';
//        document.getElementsByClassName("left-nav-item")[i].style.display='none';
//    }
//    document.getElementById("nav-item-img").style.display = "block";
//    navHidden1.style.display = "block";
//    navHidden2.style.display = "block";
//  } else {
//    mainNav.classList.remove("main-horizontal-nav-js");
//    centerNav.classList.remove("flex-center-nav-js");
//    navHidden1.style.display = "none";
//    navHidden2.style.display = "none";
//    for (var j = 0; j <= 2; j++) {
//      document.getElementsByClassName("right-nav-item")[j].style.display =
//        "block";
//      document.getElementsByClassName("left-nav-item")[j].style.display =
//        "block";
//    }
//    document.getElementById("nav-item-img").style.display = "none";
//    document.getElementById("extra-nav").classList.remove("extra-nav-js");
//  }
//}
