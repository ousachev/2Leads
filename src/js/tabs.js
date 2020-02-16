///Табы

let init = () => {
  let tabBody = document.querySelectorAll(".header__desc-info");
  for (let i = 1; i < tabBody.length; i++) {
    tabBody[i].style.display = "none";
  }
};

init();

let tab = document.querySelectorAll(".adv__item");
for (let i = 0; i < tab.length; i++) {
  tab[i].onclick = showTabs;
}

function showTabs() {
  let data = this.getAttribute("data");
  let tabBody = document.querySelectorAll(".header__desc-info");
  for (let i = 0; i < tabBody.length; i++) {
    tabBody[i].style.display = "none";
  }
  let active = document.getElementsByClassName("active");
  let currentActive = active[0];
  if (currentActive) currentActive.classList.remove("active");
  if (currentActive !== this) this.classList.add("active");
  document.querySelector(`.header__desc-info[data="${data}"]`).style.display =
    "block";
}
