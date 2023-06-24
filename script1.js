"use strict";

let input = document.querySelector("input");
let password = document.querySelector(".password");
let first = document.querySelector(".first");
first.addEventListener("mouseleave", function () {
  if (first.value.length > 5 && password.value.length > 5) {
    document.querySelector(".link").style.display = "block";
  }
  // if (input.length > 5) {
  //   document.querySelector(".link").style.display = "block";
  // }
});

// let re = 1;
// console.log(re > 2 ? 2 : 5);
password.addEventListener("mouseleave", function () {
  if (first.value.length > 5 && password.value.length > 5) {
    document.querySelector(".link").style.display = "block";
  }
});
