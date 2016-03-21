"use strict"

var Cameras = ((cameraXHR) => {

  // This takes the activeCameraArray and userString from the main Cameras.js file
  //  and makes it accessable in this augmentation.
  let activeCameras = Cameras.activeCameras();
  let user = Cameras.user();

  // Basic Camera XHR for Status Retrival
  cameraXHR.getCameraInfo = (cameraCommand) => {
    
    let newCameraXHR = new XMLHttpRequest();
    
    newCameraXHR.addEventListener("load", function(event) {
      let cameraResponse = event.target.responseText;
      console.log(`Camera Event: `, event);
      console.log(`Camera Response: `, cameraResponse);
    });

    newCameraXHR.open("GET", cameraCommand);
    newCameraXHR.send();
  }

  return cameraXHR;

})(Cameras || {});
