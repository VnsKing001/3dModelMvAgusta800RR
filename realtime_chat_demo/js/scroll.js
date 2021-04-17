//Get the button
var mybutton = document.getElementById("angle-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        document.getElementById('top-angle-icon').style.display = "block";
        document.getElementById('top-angle-icon').style.transform= "scale(4) scaleX(1.25) rotate(+180deg)";
        document.getElementById("open-more-field").style.display = "block";
        document.getElementById("copyright").style.display = "none";
        document.getElementById("angle-down").style.display = "none";
        document.getElementById("open-close-content").style.opacity = 0;
        document.getElementById("open-close-content").style.display = "none";
        document.getElementById("black-vertical-navbar").style.opacity = 0;
        // document.getElementById("black-vertical-navbar").style.display = "none";
        document.getElementById("black-vertical-navbar").style.zIndex = -10;

    }else{
        document.getElementById('top-angle-icon').style.display = "none";
        document.getElementById('top-angle-icon').style.transform = "scale(4) scaleX(1.25) rotate(-180deg)";
        // document.getElementById("open-more-field").style.display = "none";
        document.getElementById("copyright").style.display = "inline-block";
        // document.getElementById("open-close-content").innerHTML = "SCROLL DOWN FOR MORE INFORMATIONS";
        // document.getElementById("open-close-content").style.opacity = 1;
        // document.getElementById("open-close-content").style.display ="inline-block";
        document.getElementById("black-vertical-navbar").style.zIndex= 999;
        document.getElementById("black-vertical-navbar").style.opacity = 1;
        document.getElementById("black-vertical-navbar").style.display = "block";
        // document.getElementById("angle-down").style.display = "inline-block";
    }
}

