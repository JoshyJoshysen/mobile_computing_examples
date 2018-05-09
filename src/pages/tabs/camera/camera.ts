import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ToastService } from "../../../providers/toast-service/toast-service";

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
  
  constructor(private toastService: ToastService) {
  
  }
  
  ionViewDidLoad(): void {
    this.video = this.videoElement.nativeElement;
    this.selectDevices();
  }
  
  selectDevices(): void {
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
        facingMode: selectedValue //"environment" for back; "user" for front
      }
    };
    this.initCamera(constraints);
  }
  
  initCamera(config:any): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(config).then(stream => {
        this.video.srcObject = stream;
        stream.getTracks().forEach(function(track) {
          console.log(track.getSettings());
        });
        this.video.play();
      }).catch((err) => {
        this.toastService.presentToast(err);
        console.error(err);
      });
    } else {
      this.toastService.presentToast("getUserMedia not supported");
    }
  }

}
