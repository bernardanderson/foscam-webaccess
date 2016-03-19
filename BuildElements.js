"use strict"

var Cameras = ((buildElements) => {

  // This takes the activeCameraArray from the main Cameras.js file and makes it 
  //  accessable in this augmentation
  let activeCameras = Cameras.activeCameras();

  /// Building the camera elements on the DOM
  // This builds the divs for all "installed" cameras
  buildElements.buildCamDivs = () => {
    let bodyElement = document.querySelector("body");
    for (let i = 0; i < activeCameras.length; i++) {
      let createDiv = document.createElement("div");
      createDiv.id = activeCameras[i].name;
      createDiv.classList.add("camera-container");
      bodyElement.insertBefore(createDiv, bodyElement.lastChild);
    };
  }

  // This sets up the variables for the two different streams that the FOSCAM cameras
  //  can output.
  buildElements.addCamVideo = () => {
    for (let i = 0; i < activeCameras.length; i++) {
      let camDiv = document.getElementById(activeCameras[i].name);
      let imgElement = document.createElement("img");
      let camVideo = `http://${activeCameras[i].ip}/videostream.cgi?user=${activeCameras[i].userLogin}&pwd=${activeCameras[i].password}&resolution=8&rate=14`;
      let camPicture = `http://${activeCameras[i].ip}/snapshot.cgi?user=${activeCameras[i].userLogin}&pwd=${activeCameras[i].password}&resolution=8&rate=14`;
      imgElement.setAttribute("src", camPicture);
      imgElement.classList.add("camera-img");
      camDiv.appendChild(imgElement);
    };
  }

  buildElements.reqResponse = (event) => {
    console.log(event.target.responseText);
  }

  return buildElements;

})(Cameras || {});
