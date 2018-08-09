import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController} from 'ionic-angular';
import {ToastService} from "../../../providers/toast-service/toast-service";
import {MarkerInterface} from "../../../interfaces/marker.interface";


@IonicPage()
@Component({
  selector: 'page-watch',
  templateUrl: 'watch.html',
})
export class WatchPage {
  loading: Loading;
  isWatching: boolean = false;
  coords: any;
  watchProcess: any;
  btnClass: string;
  btnText: string;
  markers: MarkerInterface[];
  watchOptions: any = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 0
  };
  
  constructor(private toastService: ToastService,
              private loadingCtrl: LoadingController) {
  }
  
  ionViewWillEnter(): void {
    this.btnClass = "primary";
    this.btnText = "Start Watching";
    this.coords = undefined;
    this.markers = [];
  }
  
  ionViewWillLeave(): void {
    if (this.watchProcess){
      navigator.geolocation.clearWatch(this.watchProcess);
    }
  }
  
  startWatching(): void {
    if (!this.isWatching){
      this.markers = [];
      this.loading = this.loadingCtrl.create();
      this.loading.present().then(() => {
        if (navigator && navigator.geolocation){
          this.watchProcess = navigator.geolocation.watchPosition((position) => {
            //if position is close to desiredlocation do XY
            this.setPosition(position);
            this.addMarker(position);
            this.loading.dismiss();
          }, (err) => (
            console.error(err)
          ), this.watchOptions);
          
          this.btnText = "Stop Watching";
          this.btnClass = "danger";
          this.isWatching = true;
        } else {
          this.loading.dismiss();
          this.toastService.presentToast('geolocation not supportet');
        }
      });
    } else {
      this.isWatching = false;
      navigator.geolocation.clearWatch(this.watchProcess);
      this.btnClass = "primary";
  
      this.btnText = "Start Watching";
    }
  }
  
  private setPosition(position): void {
    this.coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
  }
  
  private addMarker(pos: any): void {
    this.markers.push({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
      draggable: false,
      label: this.markers.length.toString()
    });
    this.markers = this.markers.slice();
  }

}
