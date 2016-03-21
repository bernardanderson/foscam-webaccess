"use strict"

var Cameras = ((cameraAccess) => {

  // This takes the activeCameraArray and userString from the main Cameras.js file
  //  and makes it accessable in this augmentation.
  let activeCameras = Cameras.activeCameras();
  let user = Cameras.user();

  /// Building the camera elements on the DOM
  // This builds the divs for all "installed" cameras
  cameraAccess.getBasicInfo = (sentCamera, sentInfoRequest) => {
    let commandString = Cameras.getCameraInfoString(sentInfoRequest);
    commandString = `http://${activeCameras[sentCamera].ip}${commandString}${user}`;
    Cameras.getCameraInfo(commandString);
  }

  return cameraAccess;

})(Cameras || {});
