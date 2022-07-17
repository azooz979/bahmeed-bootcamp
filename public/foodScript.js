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

// the food project script
const searchButton = document.getElementById("search");
const input = document.getElementById("ingrediants");
const gallery = document.getElementById("container");

searchButton.onclick = async function () {
  gallery.innerHTML = "";
  searchButton.disabled = true;
  let ingrediants = input.value;
  let url = `/food?ingrediants=${input.value}`;

  const request = await fetch(url);
  const foodArray = await request.json();
  for (let index = 0; index < foodArray.length; index++) {
    let food = document.createElement("div");
    food.classList = "gallery";
    food.innerHTML = `
        <img
          src="${foodArray[index].image}"
        />
        <div class="desc">${foodArray[index].title}</div>`;
    gallery.appendChild(food);
  }
  searchButton.disabled = false;
};