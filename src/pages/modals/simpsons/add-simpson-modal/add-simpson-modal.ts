import {Component} from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';
import {SimpsonInterface} from "../../../../interfaces/simpson.interface";
import {DatabaseService} from "../../../../providers/database-service/database-service";

@IonicPage()
@Component({
  selector: 'page-add-simpson-modal',
  templateUrl: 'add-simpson-modal.html',
})
export class AddSimpsonModalPage {
  simpson = {} as SimpsonInterface;
  
  constructor(private viewCtrl: ViewController, private dbService: DatabaseService) {
  
  }
  
  ionViewWillLoad() {
  
  }
  
  addSimpson(simpson: SimpsonInterface) {
    this.simpson.avatar = "assets/imgs/avatar.png";
    let data = {simpson: simpson};
    this.viewCtrl.dismiss(data);
  }
  
  cancel(): void {
    this.viewCtrl.dismiss();
  }
  
}
