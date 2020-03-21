const itemOne = document.getElementById("item-One");
const itemTwo = document.getElementById("item-Two");
const itemThree = document.getElementById("item-Three");
const itemFour = document.getElementById("item-Four");
const itemFive = document.getElementById("item-Five");
const itemSix = document.getElementById("item-Six");
const heart = document.querySelector("span");
const resetButton = document.getElementById("reset-button");

const reset = function() {
  itemFive.style.display = "none";
  itemSix.style.display = "none";
};

resetButton.onclick = reset;

itemOne.onmouseover = function(event) {
  event.target.style.width = "90%";
};
itemOne.onmouseout = function(event) {
  event.target.style.width = "70%";
};

itemTwo.onmousedown = function(event) {
  event.target.style.backgroundColor = "lightblue";
  event.target.style.color = "blue";
};
itemTwo.onmouseup = function(event) {
  event.target.style.backgroundColor = "rgb(214, 156, 175)";
  event.target.style.color = "#fff";
};

itemThree.onmouseenter = function(event) {
  event.target.textContent = "The mouse should leave the element";
};
itemThree.onmouseleave = function(event) {
  event.target.textContent = "The mouse should enter the element";
};

itemFour.onmousedown = function() {
  itemFive.style.display = "block";
  itemSix.style.display = "block";
  itemSix.style.borderRadius = "10px";
  itemSix.style.backgroundColor = "lightblue";
  heart.style.color = "red";
};
