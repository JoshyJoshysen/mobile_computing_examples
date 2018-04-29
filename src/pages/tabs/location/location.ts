import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController} from 'ionic-angular';
import { ToastService } from "../../../providers/toast-service/toast-service";
import {MarkerInterface} from "../../../interfaces/marker.interface";

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  coords: any;
  loading: Loading;
  markers: MarkerInterface[];
  
  constructor(private toastService: ToastService,
              private loadingCtrl: LoadingController){
  }
  
  ionViewWillEnter(): void {
    this.coords = undefined;
  }
  
  showPostion(): void {
    this.loading = this.loadingCtrl.create();
    this.loading.present().then(() => {
      if (navigator && navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
          this.coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.markers = [{
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            draggable: false
          }];
          this.loading.dismiss();
        });
      } else {
        this.loading.dismiss();
        this.toastService.presentToast('geolocation not supportet');
      }
    });
  }
}
