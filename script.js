"use strict";
const toggle = document.querySelector(".toggle");
const label = document.querySelector("label");
const chckbox = document.querySelector(".chckbox");
const dollar = document.querySelector(".dollar");
const year = document.querySelector(".m_y");
const number = document.querySelector(".number");
const slider = document.querySelector(".slider");
const checkmarks = document.querySelector(".features");
const discount=document.querySelector('.discount');
chckbox.addEventListener("click", function () {
  if (chckbox.checked) {
    //on state
    toggle.style.transform = "translate(163%)";
    label.style.backgroundColor = "var(--strong_cyan)";
    dollar.textContent = "$16";
    year.textContent = "/monthly";
  } else {
    //off state
    toggle.style.transform = "translate(0%)";
    label.style.backgroundColor = "var(--ligh_grayish_blue)";
    dollar.textContent = "$148";
    year.textContent = "/yr";
  }
});

slider.addEventListener("change", function (e) {
  number.textContent = `${e.target.value}`;
});

