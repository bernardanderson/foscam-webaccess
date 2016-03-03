
var Cameras = function(cameraData) {

// Initializes the array of Camera Objects along with their key:value pairs
//  You can add additional cameras to this array
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

// Returns the list of Cameras and gives access to their keys and values
//  Accessible via Cameras.getCameraList[i].key
  cameraData.getCameraList = function() {
    return activeCameras;
  }

  return cameraData;

} (Cameras || {});

