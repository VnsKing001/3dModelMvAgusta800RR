setTimeout(() => {
  document.getElementsByClassName("tag-hol")[0].classList.add("tag-hol-active");
  document.querySelector("#pof-menu").classList.add("pof-open");
  document.querySelector(".tag-hol-inf").classList.add("tag-hol-inf-tl");
}, 1000);
// document.addEventListener("click", () => {
//   document.querySelector("#pof-menu").classList.remove("pof-open");
//   if (window.innerWidth < 1200) {
//     document
//       .getElementsByClassName("tag-hol")[0]
//       .classList.remove("tag-hol-active");
//   }
// }, 10);
document.getElementById("pof-nav-bt-layer").addEventListener(
  "click",
  () => {
    document.querySelector("#pof-menu").classList.toggle("pof-open");
    document.querySelector(".tag-hol-inf").classList.toggle("tag-hol-inf-tl");
    if (window.innerWidth < 1200) {
      document
        .getElementsByClassName("tag-hol")[0]
        .classList.toggle("tag-hol-active");
    }
  }
);
document.getElementById("pof-menu").addEventListener(
  "click",
  () => {
    document.querySelector("#pof-menu").classList.add("pof-open");
    if (window.innerWidth < 1200) {
      document
        .getElementsByClassName("tag-hol")[0]
        .classList.add("tag-hol-active");
    }
  }
);

// window.onresize = () => {
//   document
//     .getElementsByClassName("tag-hol")[0]
//     .classList.remove("tag-hol-active");
//   document.querySelector("#pof-menu").classList.remove("pof-open");
// };

// active tags
var tags = document.getElementsByClassName("tags");
var tag_if = document.getElementsByClassName("if-tg");
function activeTags(i) {
  for (var k = 0; k < tags.length; k++) {
    tags[k].classList.remove("tags-active");
    tag_if[k].classList.remove("active");
  }
  tags[i].classList.add("tags-active");
  tag_if[i].classList.add("active");
}

for (var i = 0; i < tags.length; i++) {
  tags[i].addEventListener("mouseover", activeTags.bind(event, i));
}
