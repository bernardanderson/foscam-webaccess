"use strict"

var Cameras = (() => {

  let userString = "?user=mover&pwd=";
  let activeCameraArray = [
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

  return {

    // This allows the activeCameraArray to be globally accessable across all augments
    activeCameras: () => activeCameraArray,

    // This console.logs the activeCameraArray
    consoleListCameras: () => {
      console.log(activeCameraArray);
    },

    // Sets up the strings for the accessing the Camera Info
    getCameraInfoString: (sentCameraInfoRequest) => {
      if (sentCameraInfoRequest = "info") {
        return `/get_camera_params.cgi`;
      }
    },

    // This gets the camera configuration. Call this function using an array element number
    //  for the camera from the activeCameraArray list
    getCameraParameters: (sentCameraNumber, sentCameraInfoString) => {
        Cameras.getCameraInfo(sentCameraNumber, cameraParamString);
    },

    // This returns the user string info so that doesn't have to be 
    //  changed in each page
    user: () => userString,

  };

})(Cameras || {});