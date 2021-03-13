function themeFunc(){
    var x = document.getElementById("ThemeContent").innerText;
    if(x== "Dark Theme"){
        document.getElementById("ThemeContent").innerText= "Light Theme";
        document.body.style.backgroundColor = '#202020';
    }else{
        document.getElementById("ThemeContent").innerText = "Dark Theme";
        document.body.style.backgroundColor = 'white';
    }
}