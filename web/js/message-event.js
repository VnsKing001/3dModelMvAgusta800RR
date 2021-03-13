function closeMessage() {
  var x = document.getElementById("close-icon");
  var y = document.getElementById("message-container");
  var z = document.getElementById("ad-icon");
  var o = document.getElementById("ad-name");

  y.style.height = "35px";
  x.style.display = "none";
  z.style.display = "none";
  o.style.display = "none";
  document.getElementById("content-backup").style.display = "block";
}
// -------------------




function openMessage() {
  var x = document.getElementById("close-icon");
  var y = document.getElementById("message-container");
  var z = document.getElementById("ad-icon");
  var o = document.getElementById("ad-name");
  var adContainer = document.getElementById("ad-container");
  y.style.height = "486px";
  x.style.display = "inline-block";
  z.style.display = "inline-block";
  o.style.display = "inline-block";
  document.getElementById("content-backup").style.display = "none";
  document.getElementById("content-backup").style.display = "none";
  adContainer.style.display = "inline-block";
}
// -----------------------------



function chatResponse1(){
  setTimeout(()=>{
    var para = document.createElement("p");
    var node = document.createTextNode("please go to www.mvagusta.com");
    para.appendChild(node);
    para.setAttribute("id", "chat-message-from-admin");
    var element = document.getElementById("chat-history-container");
    element.appendChild(para);

    var btm = document.getElementById("chat-history-container");
    if (btm.scrollTop < btm.scrollHeight) {
      var objDiv = document.getElementById("chat-history-container");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, 900);
}

function chatResponse2(){
  setTimeout(()=>{
    var para = document.createElement("p");
    var node = document.createTextNode("We will check your order and response to you as soon as possible.");
    para.appendChild(node);
    para.setAttribute("id", "chat-message-from-admin");
    var element = document.getElementById("chat-history-container");
    element.appendChild(para);



    var btm = document.getElementById("chat-history-container");
    if(btm.scrollTop<btm.scrollHeight){
      var objDiv = document.getElementById("chat-history-container");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, 900);
}