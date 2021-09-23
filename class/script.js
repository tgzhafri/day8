var score = 0;

function count(num) {
  score += num;

  if (score < 0) {
    score = 0;
  }

  document.querySelector("h1").innerHTML = score;

  if (score > 10 && score < 20) {
    document.querySelector("#container").style.backgroundColor = "silver";
  } else if (score > 20 && score < 30) {
    document.querySelector("#container").style.backgroundColor = "yellow";
  } else {
    document.querySelector("#container").style.backgroundColor = "white";
  }
} //count function scope

function changeBg(color) {
  document.querySelector("#container").style.backgroundColor = color;
}

// function overBtn() {
//   document.querySelector(".color-btn").style.backgroundColor = "gray";
// }
// function outBtn() {
//   document.querySelector(".color-btn").style.backgroundColor = "skyblue";
// }
// function downBtn() {
//   document.querySelector(".color-btn").style.backgroundColor = "pink";
// }
// function upBtn() {
//   document.querySelector(".color-btn").style.backgroundColor = "yellow";
// }

function overBtn(evt) {
  this.style.backgroundColor = "gray";
}
document.getElementById("blue-btn").addEventListener("mouseover", overBtn);
document.getElementById("green-btn").addEventListener("mouseover", overBtn);
document.getElementById("red-btn").addEventListener("mouseover", overBtn);

function outBtn(evt) {
  this.style.backgroundColor = "skyblue";
}
document.getElementById("blue-btn").addEventListener("mouseout", outBtn);
document.getElementById("green-btn").addEventListener("mouseout", outBtn);
document.getElementById("red-btn").addEventListener("mouseout", outBtn);

function downBtn(evt) {
  this.style.backgroundColor = "pink";
}
document.getElementById("blue-btn").addEventListener("mousedown", downBtn);
document.getElementById("green-btn").addEventListener("mousedown", downBtn);
document.getElementById("red-btn").addEventListener("mousedown", downBtn);

function upBtn(evt) {
  this.style.backgroundColor = "yellow";
}
document.getElementById("blue-btn").addEventListener("mouseup", upBtn);
document.getElementById("green-btn").addEventListener("mouseup", upBtn);
document.getElementById("red-btn").addEventListener("mouseup", upBtn);


