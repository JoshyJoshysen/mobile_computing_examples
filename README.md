# mobile_computing_examples
## angularfire2 notes
This has as dependency: `"angularfire2": "^5.0.0-rc.7",`. In case you get the error: `“zone” already loaded`, comment in the file `node_modules/angularfire2/angularfire2.js` the following:
```
//import 'zone.js';
```


## jsartoolkit5 notes
This package uses the jsartoolkit5 library to enable AR and iPhone support, as well as camera chosing was added. To enable iPhone support the following needs to be adjusted.

To enable iPhone support, change the file `node_modules/jsartoolkit5/js/artoolkit.api.js` as follows:
```javascript
  //video.src = window.URL.createObjectURL(stream);
  video.setAttribute("playsinline","");
  video.setAttribute("autoplay", "");
  if (typeof video.srcObject !== 'undefined') {
    video.srcObject = stream;
  } else {
    video.src = window.URL.createObjectURL(stream);
  }
```

To enable camera chosing, the file `node_modules/jsartoolkit5/js/artoolkit.three.d.ts` needs to be adjusted as follows:
```javascript
declare class GetUserMediaThreeSceneConfig {
  width?: number; height?: number;
  maxARVideoSize?: number;
  cameraConfig?: CameraDeviceConfig;
  facingMode?: string;
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
