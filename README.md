# Simple Foscam Web Access App
## Purpose/Description
A simple-to-use Linux application which allows access to webcamera output is hard to come by.  I've used a number of applications that were either poorly designed and/or ridiculously difficult to set-up (and even when you followed the directions it still wouldn't work... I'm looking at you Zoneminder!) The cameras I use at home are Foscam FI8908W's which are older, Mjpeg based video/audio cameras. You can access various functions on these cameras using simple http "get" requests (x/y rotation, size of picture, streaming video or single snapshot etc). These cameras do have a fairly decent web interface BUT access to that requires the cameras have their IPs exposed to the world (and they don't accept https requests)!  
  
Rather than relying on large, bloated ip software suites which are difficult to maintain/upgrade or are resource-heavy, I've opted to build my own simple foscam camera application in order to access the camera functions on the web via a webpage without having to expose the individual cameras (and their non-https IPs) to the entire universe.
## Languages Used
It's the goal of this project to keep the coding simple and use HTML5/CSS/javascript along with some possible nodeJS implimentations to complete this project.
#### Initial "Baby Steps" for this project are...
1.  Access the video/picture feeds from the cameras and display in a simple HTML5 document
2.  Add some buttons/events to the HTML page using js in order to manipulate the picture and the movment of the camera.
3.  Addition functionality will be added as the project continues