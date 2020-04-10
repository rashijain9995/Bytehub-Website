// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 265 || document.documentElement.scrollTop > 265) {
//     document.getElementsByClassName("service1").style.top = "0";
//   } else {
//     document.getElementsByClassName("service1").style.top = "-85px";
//   }
// }
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 285 || document.documentElement.scrollTop > 285) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
app.get(htmlExt('index'), controller.web.Home);
app.get(htmlExt('school'), controller.web.school);