"use strict";

let ran = Math.trunc(Math.random() * 10) + 1;
let trial = 3;
let myst = document.querySelector(".myst");
let hc = document.querySelector("html").style.background;
console.log(ran);
document.querySelector(".dif").addEventListener("click", function () {
  ran = Math.trunc(Math.random() * 105876593629613924) + 1;
  document.querySelector(".p").textContent =
    "Terror, it is impossible to win HaHahahahahaha";
  myst.value = "";
  document.querySelector("html").style.backgroundColor = "blueviolet";
});

function logic() {
  ///////////////////////////
  if (trial > -1) {
    document.querySelector(".Trial").textContent = trial--;
    if (Number(document.querySelector(".myst").value) === ran) {
      document.querySelector("html").style.backgroundColor =
        "rgb(255, 247, 16)";
      document.querySelector(".p").textContent = "Correct, You WON!!";
      amt.textContent = amt + 1;
      // document.querySelector("html").style.backgroundColor =
      //   "rgb(255, 247, 16)";
      trial = "";
    } else if (Number(document.querySelector(".myst").value) < ran) {
      document.querySelector(".p").textContent = "Too low";
    } else if (Number(document.querySelector(".myst").value) > ran) {
      document.querySelector(".p").textContent = "Too high";
    }
  } else {
    document.querySelector(".p").textContent = "Game over";
  }
}

function logic1(rema) {
  if (rema.keyCode == 13) {
    if (trial > -1) {
      document.querySelector(".Trial").textContent = trial--;
      if (Number(document.querySelector(".myst").value) === ran) {
        document.querySelector(".p").textContent = "Correct,  You WON!!";
        document.querySelector("html").style.backgroundColor =
          "rgb(255, 247, 16)";
        trial = "";
      } else if (Number(document.querySelector(".myst").value) < ran) {
        document.querySelector(".p").textContent = "Too low";
      } else if (Number(document.querySelector(".myst").value) > ran) {
        document.querySelector(".p").textContent = "Too high";
      }
    } else {
      document.querySelector(".p").textContent = "Game over";
    }
  }
}

myst.addEventListener("keypress", logic1);

document.querySelector(".guess").addEventListener("click", logic);

document.querySelector(".agn").addEventListener("click", function () {
  ran = Math.trunc(Math.random() * 10) + 1;
  trial = 3;
  document.querySelector(".Trial").textContent = trial;
  document.querySelector(".p").textContent = "?";
  document.querySelector(".myst").value = "";
  document.querySelector("html").style.backgroundColor = "blueviolet";
});
