"use strict";

let ran = Math.trunc(Math.random() * 10) + 1;
let trial = 3;
let myst = document.querySelector(".myst");
let amt = document.querySelector(".amt");
let amnt = 0;
let hc = document.querySelector("html").style.background;
document.querySelector(".dif").addEventListener("click", function () {
  ran = Math.trunc(Math.random() * 1058765936296260622566704) + 1;
  document.querySelector(".p").textContent =
    "Terror, it is impossible to win HaHahahahahaha";
  myst.value = "";
  document.querySelector("html").style.backgroundColor = "blueviolet";
});

function logic() {
  if (myst.value == ran && trial == 3) {
    amt.textContent = Number(amnt) + 1;
    document.querySelector("html").style.backgroundColor = "rgb(255, 247, 16)";
    document.querySelector(".p").textContent = "Correct, You WON!!";
  }
  ///////////////////////////
  else if (trial > -1) {
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

myst.addEventListener("mouseleave", function () {
  if (amt.textContent == 20) {
    let io = `$20 is max for now. endeavour to check in another time `;
    amt.textContent = io;
    amt.style.display = "none";
  } else if (myst.value == ran && trial == 3) {
    amt.textContent = amnt++;
  } else if (amt.textContent == 2) {
    amt.textContent = 3;
  } else if (io === `$20 is max for now. endeavour to check in another time `) {
    amt.style.display = "none";
  }
});
