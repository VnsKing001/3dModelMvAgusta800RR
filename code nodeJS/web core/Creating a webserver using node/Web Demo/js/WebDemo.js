function openSearch(){
    var x = document.getElementById('search').offsetWidth;
    if(x < 300){
        document.getElementById('search').style.width = "300px";
        document.getElementById('search').style.opacity = 1;
    } else{
        document.getElementById('search').style.width = "0px";
        document.getElementById('search').style.opacity= 0;
    }
}
function openMore(){
    var oc = document.getElementById('open-close-content').innerHTML;
    if (oc == "CLICK HEAR FOR MORE INFORMATIONS"){
        document.getElementById('open-more-field').style.display= "block";
        document.getElementById('footer').style.display= "block";
        document.getElementById('copyright').style.display= "none";
        document.getElementById('angle-down').style.display= "none";
        document.getElementById('open-close-content').style.opacity = 0;
        document.getElementById('open-close-content').style.display= "none";
        // document.getElementById('black-vertical-navbar').style.backgroundColor = "rgba(0, 0, 0, 0.95)";
        // document.getElementById('yellow-setting-icon').style.backgroundColor = "hsla(54, 100%, 50%, 0.75)";
        document.getElementById("black-vertical-navbar").style.display="none";
        
        document.getElementById('top-angle-icon').style.opacity = 1;
        document.getElementById('top-angle-icon').style.transform= "scale(4) scaleX(1.25) rotate(+180deg)";
    }
}
function toTop(){
    document.getElementById('open-more-field').style.display = "none";
    document.getElementById('copyright').style.display = "inline-block";
    document.getElementById('open-close-content').style.opacity = 1;
    document.getElementById('open-close-content').style.display = "inline-block";
    // document.getElementById('black-vertical-navbar').style.backgroundColor = "rgba(0, 0, 0, 0.35)";
    // document.getElementById('yellow-setting-icon').style.backgroundColor = "hsla(54, 100%, 50%, 0.4)";
    document.getElementById("black-vertical-navbar").style.display = "block";
    document.getElementById('angle-down').style.display = "inline-block";
    document.getElementById('top-angle-icon').style.transform = "scale(4) scaleX(1.25) rotate(-180deg)";
    document.getElementById('top-angle-icon').style.opacity = 0;
}
function yellowMv() {
    document.getElementById('image-top').style.backgroundImage= "url(./img/2.png)";
}
function greenMv() {
    document.getElementById('image-top').style.backgroundImage= "url(./img/2-1.png)";
}
function contentse() {
    document.getElementById("mark-section-heading").innerHTML="EVOLUTION <br> OF PERFECTION";
    document.getElementById("mark-section-content").innerHTML =
      "The three-cylinder engine was improved to comply with Euro 4 regulation and also to enhance performance and reliability. The engine’s anchoring point to the frame has been revised, as well as the primary gears, valve guides and the cam phasing. The gearbox is also new, quicker and requires less force on the lever to engage gears.";
    document.getElementById("mark-section-image").style.backgroundImage = "url(./img/DRA-SCS-meccanica-min.png)";
}
function contentth(){
    document.getElementById("mark-section-heading").innerHTML =
      "NEW DETAILS, UNVARIED <br>CHARACTER";
    document.getElementById("mark-section-content").innerHTML =
      "The front fender’s side supports are made of aluminium, like the tank damper. The headlight has a new integrated light guide and the tail light is now a single unit.";
    document.getElementById("mark-section-image").style.backgroundImage =
      "url(./img/DRA-SCS-design-min.png)";
}
function contentfth() {
  document.getElementById("mark-section-heading").innerHTML = "3 YEARS<br> WARRANTY";
  document.getElementById("mark-section-content").innerHTML =
    "MV Agusta offers a NEW 3 YEARS WARRANTY on the whole range, with a great service support for all customers. Customize your experience riding a model, discovering special kits and the vast range of readily available spare parts.";
  document.getElementById("mark-section-image").style.backgroundImage =
    "url(./img/mv-3-years-warranty.jpg)";
}