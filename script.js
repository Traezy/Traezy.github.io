"use strict";

// console.log(ran);

// document.querySelector(".Trial").textContent - 1;

document.querySelector(".equal").addEventListener("click", function () {
  document.querySelector(".no").textContent =
    Number(document.querySelector(".NO").value) +
    Number(document.querySelector(".NO1").value);
});

document.querySelector(".equal1").addEventListener("click", function () {
  document.querySelector(".no1").textContent =
    Number(document.querySelector(".NO2").value) -
    Number(document.querySelector(".NO3").value);
});

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".no").textContent = 0;
  document.querySelector(".no1").textContent = 0;
  document.querySelector(".NO").value = "";
  document.querySelector(".NO1").value = "";
  document.querySelector(".NO2").value = "";
  document.querySelector(".NO3").value = "";
});
