function openCloseMenu(){
    var extraNav = document.getElementById("extra-nav");
    extraNav.classList.toggle("extra-nav-js");
}
function openMotorMenu(){
    document.getElementById("motor-list-form").style.transform = 'translate(0,0)';
    document.getElementById("motor-menu-list").style.transform = "translate(0,0)";
}
function itemMenuChosen(choice){
    for(var i=0; i< 7; i++){
        document.getElementsByClassName("motor-list-layout")[i].style.opacity= 0;
        document.getElementsByClassName("motor-menu")[i].classList.remove('motor-menu-checked');
    }
    document.getElementsByClassName("motor-menu")[choice].classList.add('motor-menu-checked');
    document.getElementsByClassName("motor-list-layout")[choice].style.opacity = 1;
    document.getElementById('motor-list-container').style.transform = "translate(0,-"+choice*100+"vh)";
}
function closeMenuMotorList(){
    document.getElementById("motor-list-form").style.transform = 'translate(-100vw,0)';
}
function hoverBlurOthers(choice){
    for(var i =0; i < 22;i++){
        document.getElementsByClassName("motor-tag")[i].style.filter = "brightness(65%) blur(2px)";
        document.getElementsByClassName("motor-tag")[i].style.transition = "all 0.3s ease-out";
    }
    document.getElementsByClassName("motor-tag")[choice].style.filter = "brightness(100%) blur(0)";

}
function removeBlurOthers(choice) {
  for (var i = 0; i < 22; i++) {
    document.getElementsByClassName("motor-tag")[i].style.filter = "brightness(100%) blur(0)";
  }
}
function openSearchField(){
    document.getElementById("header-tag-right-content-search").classList.toggle('header-tag-right-content-search-js');
    document.getElementById("search-input").classList.toggle('search-input-js');
    document.getElementById("search-image").classList.toggle('search-image-js');
}
function openSearchNav(){
    document.getElementById("motor-search-nav").style.transform= 'translateX(0)';
}
function closeSearchNav(){
    document.getElementById("motor-search-nav").style.transform= 'translateX(100vw)';
}