var vid = document.getElementById("vid");
var vol = 1;
var isPlaying = false;

function playVid() {
  vid.play();
}
function pauseVid() {
  vid.pause();
}

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
}

