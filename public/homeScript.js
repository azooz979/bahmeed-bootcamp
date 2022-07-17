let isNightMode = false;
const pageMode = document.getElementById("pageMode");
pageMode.onclick = function () {
  if (isNightMode) {
    document.getElementById("theBody").style.backgroundColor = "#FEB139";
    document.getElementById("navBar").style.backgroundColor = "#D61C4E";

    var selects = document.getElementsByClassName("anchor");
    for (var i = 0; i < selects.length; i++) {
      selects[i].style.color = "blue";
    }
    isNightMode = false;
    this.textContent = "dark mode";
  } else {
    document.getElementById("theBody").style.backgroundColor = "#1F4690";
    document.getElementById("navBar").style.backgroundColor = "#293462";

    var selects = document.getElementsByClassName("anchor");
    for (var i = 0; i < selects.length; i++) {
      selects[i].style.color = "#8B9A46";
    }
    isNightMode = true;
    this.textContent = "light mode";
  }
};