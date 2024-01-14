function myFunction() {
  var x = document.getElementById("topnav");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}

window.myFunction = myFunction;
