import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  @ViewChild('videoElement') videoElement: any;
  video: any;
  deviceList: any[] = [];
  selectedDevice: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  
  ionViewDidLoad(): void {
    this.findDevices();
    
    this.video = this.videoElement.nativeElement;
  }
  
  findDevices(): void {
    navigator.mediaDevices.enumerateDevices()
      .then( (devices) => {
        devices.forEach((device)  => {
          if (device.kind === 'videoinput'){
            this.deviceList.push(device);
          }
        });
      });
  }
  
  onChoseDevice(selectedValue: any): void {
    let constraints = {
      audio: false,
      video: {
        width: 182,
        height: 320,
        deviceId: { exact: selectedValue.deviceId }
      }
    };
    this.initCamera(constraints);
  }
  
  initCamera(config:any): void {
    navigator.mediaDevices.getUserMedia(config).then(stream => {
      this.video.srcObject = stream;
      this.video.play();
    }).catch((err) => {
      console.error(err);
    });
  }

}
