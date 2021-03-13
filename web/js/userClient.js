var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    var name = document.getElementById("sign-up-txt");
    name.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    name.style.color = "hsla(54, 100%, 50%, 0.8)";
    name.style.fontSize="120%";
    name.value = myObj.user_name;

      var att = document.createAttribute("onclick");
      att.value="signOut_appear()";
      name.setAttributeNode(att);
  }
};

xmlhttp.open("GET", "user_account.json", true);
xmlhttp.send();
