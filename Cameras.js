"use strict"

var Cameras = (() => {

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

    getCameraParameters: (sentCamera) => {
      let camParameters = `http://${sentCamera}/get_camera_params.cgi`;
      console.log(camParameters);
    }
  };

})(Cameras || {});