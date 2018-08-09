# PWA Demo App
## Installation Notes
### angularfire2 
This has as dependency: `"angularfire2": "^5.0.0-rc.7",`. In case you get the error: `“zone” already loaded`, comment in the file `node_modules/angularfire2/angularfire2.js` the following:
```
//import 'zone.js';
```


### jsartoolkit5
This package uses the jsartoolkit5 library to enable AR and iPhone support, as well as camera chosing was added. To enable iPhone support the following needs to be adjusted.

To enable iPhone support, change the file `node_modules/jsartoolkit5/js/artoolkit.api.js` as follows:
```javascript
  //video.src = window.URL.createObjectURL(stream);
  if (typeof video.srcObject !== 'undefined') {
    video.srcObject = stream;
  } else {
    video.src = window.URL.createObjectURL(stream);
  }
```

To enable camera chosing, the file `node_modules/jsartoolkit5/js/artoolkit.three..d.ts` needs to be adjusted as follows:
```javascript
declare class GetUserMediaThreeSceneConfig {
  width?: number; height?: number;
  maxARVideoSize?: number;
  cameraConfig?: CameraDeviceConfig;
  facingMode?: string | { exact: string };
  cameraParam: string | ARCameraParam;
  onSuccess: GetUserMediaThreeSceneConfigSuccessHandler;
}
```

and in the file `node_modules/jsartoolkit5/js/artoolkit.api.js` change the following:
```javascript
if ( !false ) {
  // if ( navigator.mediaDevices || window.MediaStreamTrack) {
  if (navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia({
    ...
```
## AR Functionality
To get results with the AR scanner, the following marker can be scanned:

[Marker no. 5](https://github.com/artoolkit/artoolkit5/blob/master/doc/patterns/Matrix%20code%203x3%20(72dpi)/5.png)
![Marker no. 5](https://github.com/artoolkit/artoolkit5/blob/master/doc/patterns/Matrix%20code%203x3%20(72dpi)/5.png "Marker no. 5")

and
[Marker no. 20](https://github.com/artoolkit/artoolkit5/blob/master/doc/patterns/Matrix%20code%203x3%20(72dpi)/20.png)
![Marker no. 20](https://github.com/artoolkit/artoolkit5/blob/master/doc/patterns/Matrix%20code%203x3%20(72dpi)/20.png "Marker no. 20")
