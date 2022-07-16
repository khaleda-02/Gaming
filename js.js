let menu = document.querySelector(".hidden-menu");
let navBtn = document.querySelector("#other-links");
// console.log(menu);
// console.log(navBtn);
let x = 0;
navBtn.onclick = function () {
  if (x == 0) {
    menu.classList.add("show-nav");
    navBtn.classList.add("active");
    x++;
  } else {
    menu.classList.remove("show-nav");
    navBtn.classList.remove("active");
    x = 0;
  }
};

let topBtn = document.querySelector(".top-btn");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    topBtn.style.bottom = "50px";
    topBtn.onclick = function () {
      window.scrollTo(0, 0);
    };
  } else {
    topBtn.style.bottom = "-50px";
  }
};

