var bodyElement = document.querySelector("body");
var activeCameras = [
  {
    name: "CamBlack",
    ip: "192.168.0.150",
    userLogin: "mover",
    password: ""
  },
  {
    name: "CamWhite",
    ip: "192.168.0.151",
    userLogin: "mover",
    password: ""
}];


/// Building the camera elements on the DOM
// This builds the divs for all "installed" cameras
function buildCamDivs() {
  for (var i = 0; i < activeCameras.length; i++) {
    var createDiv = document.createElement("div");
    createDiv.id = activeCameras[i].name;
    createDiv.classList.add("camera-container");
    bodyElement.insertBefore(createDiv, bodyElement.lastChild);
  };
}

function addCamVideo() {
  for (var i = 0; i < activeCameras.length; i++) {
    var camDiv = document.getElementById(activeCameras[i].name);
    var imgElement = document.createElement("img");
    var camVideo = "http://" + activeCameras[i].ip + "/videostream.cgi?user=" + activeCameras[i].userLogin + "&pwd=" + activeCameras[i].password + "&resolution=8&rate=14";
    var camPicture = "http://" + activeCameras[i].ip + "/snapshot.cgi?user=" + activeCameras[i].userLogin + "&pwd=" + activeCameras[i].password + "&resolution=8&rate=14";
    imgElement.setAttribute("src", camVideo);
    imgElement.classList.add("camera-img");
    camDiv.appendChild(imgElement);
  };
}

function reqListener () {
  console.log(this.responseText);
}

function moveCamRight() {
  //Need to figure out Ajax requests
}

buildCamDivs();
addCamVideo();

