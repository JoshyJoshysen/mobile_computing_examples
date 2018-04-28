import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ToastService } from "../../../providers/toast-service/toast-service";

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  coords: any;
  
  constructor(private toastService: ToastService) {
  }
  
  ionViewWillEnter() {
    if (navigator && navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        this.coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    } else {
      this.toastService.presentToast('geolocation not supportet');
    }
  }
}
