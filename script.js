"use strict";

window.addEventListener("load", addNumber);

let array = Array.from({ length: 40 }, () => Math.floor(Math.random() * 32));
console.log(array);

const allBars = document.querySelectorAll(".bar");

function addNumber() {
  console.log(addNumber);
  const queueSize = getNumbersOfCustomers();
  function getNumbersOfCustomers() {
    return Math.floor(Math.random() * 32);
  }

  setTimeout(addNumber, 1000);
  array.push(queueSize);
  array.shift();

  height();
}

function height() {
  for (let i = 0; i < 40; i++) {
    allBars[i].style.height = array[i] + "vw";
  }
}
