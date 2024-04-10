let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let priv = document.getElementById("priv");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length;

next.onclick = function () {
  if (active + 1 >= lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};

priv.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems - 1;
  } else {
    active = active - 1;
  }
  reloadSlider();
};

let refreshSlider = setInterval(() => {
  next.click();
}, 3000);

function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});
