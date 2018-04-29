import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MarkerInterface} from "../../interfaces/marker.interface";

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent implements OnChanges {
  @Input() mapCoords: any;
  @Input() mapMarkers: MarkerInterface[];
  
  lat: number;
  lng: number;
  zoom: number = 16;
  markers: MarkerInterface[];

  constructor() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mapCoords'] !== undefined) {
      if (this.mapCoords.lat){
        this.lat = this.mapCoords.lat;
      }
      if (this.mapCoords.lng){
        this.lng = this.mapCoords.lng;
      }
    }
    
    if (changes['mapMarkers'] !== undefined) {
      this.markers = changes['mapMarkers'].currentValue;
      console.log(this.markers);
    }
  }

}
