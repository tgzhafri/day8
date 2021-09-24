var vid = document.getElementById("vid");
var vol = 1;
var isPlaying = false;
var isDisplay = false;

function updateVol(volNum) {
  vol += volNum;

  if (vol >= 1) {
    vol = 1;
  } else if (vol <= 0) {
    vol = 0;
  }
  console.log(vol);
  vid.volume = vol;
}
function switchClick() {
  if (isPlaying == false) {
    vid.play();
    isPlaying = true;
    document.getElementById("switch-btn").innerHTML =
      "<i class='fa fa-pause fadeAnimate'></i>";
    return;
  }

  if (isPlaying == true) {
    vid.pause();
    isPlaying = false;
    document.getElementById("switch-btn").innerHTML =
      "<i class='fa fa-play fadeAnimate'></i>";
    return;
  }
}

function switchVid(fileName) {
  vid.src = fileName;
  isPlaying = false;
  document.getElementById("switch-btn").innerHTML =
  "<i class='fa fa-play fadeAnimate'></i>";
  document.querySelector('#side-vid-holder').style.display = "none";
  isDisplay = false;
}

function openDisplay () {
  if (isDisplay == false) {
    document.querySelector('#side-vid-holder').style.display = "block";
    document.querySelector('#bottom-vid-holder').style.display = "none";
    isDisplay= true;
    return
  }
  if (isDisplay == true) {
    document.querySelector('#side-vid-holder').style.display = "none";
    document.querySelector('#bottom-vid-holder').style.display = "block";
    isDisplay = false;
    return
  }
}


// function outBox (evt) {
//   this.style.display = "none";
// }
// document.getElementById("side-vid-holder").addEventListener("mouseout", outBox);