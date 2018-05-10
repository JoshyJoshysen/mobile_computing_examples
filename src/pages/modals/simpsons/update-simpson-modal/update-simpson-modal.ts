import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import { SimpsonInterface } from "../../../../interfaces/simpson.interface";

@IonicPage()
@Component({
  selector: 'page-update-simpson-modal',
  templateUrl: 'update-simpson-modal.html',
})
export class UpdateSimpsonModalPage {
  simpson = {} as SimpsonInterface;

  constructor(private viewCtrl: ViewController, params: NavParams) {
    this.simpson = params.get("simpson");
  }

  ionViewWillLoad() {
  
  }
  
  updateSimpson(simpson: SimpsonInterface){
    let data = {simpson: simpson};
    this.viewCtrl.dismiss(data);
  }

}
