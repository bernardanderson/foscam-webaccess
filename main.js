//Building the camera elements on the DOM and controls
var bodyElement = document.querySelector("body");
var scriptTag = bodyElement.firstChild;

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

// This builds the divs for all "installed" cameras
for (var i = 0; i < activeCameras.length; i++) {
  var createDiv = document.createElement("div");
  createDiv.id = activeCameras[i].name;
  createDiv.classList.add("camera-container");
  bodyElement.insertBefore(createDiv, bodyElement.lastChild);
};
