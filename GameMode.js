"use strict";

let ran = Math.trunc(Math.random() * 10) + 1;
let trial = 10;

document.querySelector(".dif").addEventListener("click", function () {
  ran = Math.trunc(Math.random() * 1058765936296260622566704) + 1;
  console.log(ran);
  document.querySelector(".p").textContent =
    "Terror, it is impossible to win HaHahahahahaha";
  document.querySelector(".myst").value = "";
});

function logic() {
  if (trial > -1) {
    document.querySelector(".Trial").textContent = trial--;
    if (Number(document.querySelector(".myst").value) === ran) {
      document.querySelector(".p").textContent = "Correct";
      document.querySelector("html").style.backgroundColor =
        "rgb(255, 247, 16)";
      trial = "";
    } else if (Number(document.querySelector(".myst").value) < ran) {
      document.querySelector(".p").textContent = "Too low";
    } else if (Number(document.querySelector(".myst").value) > ran) {
      document.querySelector(".p").textContent = "Too high";
    } else if ((trial = 1)) {
      document.querySelector("html").style.backgroundColor = "gold";
    }
  } else {
    document.querySelector(".p").textContent = "Game over";
  }
}

document.querySelector(".guess").addEventListener("click", logic);

document.querySelector(".agn").addEventListener("click", function () {
  ran = Math.trunc(Math.random() * 10) + 1;
  trial = 10;
  document.querySelector(".Trial").textContent = trial;
  document.querySelector(".p").textContent = "0";
  document.querySelector(".myst").value = "";
  document.querySelector("html").style.backgroundColor = "blueviolet";
});
