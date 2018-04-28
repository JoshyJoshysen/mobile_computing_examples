import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent implements OnChanges {
  @Input() mapCoords: any;
  
  lat: number;
  lng: number;

  constructor() {
  }
  
  ngOnChanges(){
    if (this.mapCoords){
      if (this.mapCoords.lat){
        this.lat = this.mapCoords.lat;
      }
      if (this.mapCoords.lng){
        this.lng = this.mapCoords.lng;
      }
    }
  }

}
