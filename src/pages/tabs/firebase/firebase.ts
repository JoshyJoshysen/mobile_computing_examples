import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, Tabs} from 'ionic-angular';
import {AuthService} from "../../../providers/auth-service/auth-service";

@IonicPage()
@Component({
  selector: 'page-firebase',
  templateUrl: 'firebase.html',
})
export class FirebasePage {

  constructor(private modalCtrl: ModalController, private authService: AuthService, private navCtrl: NavController) {
  }
  
  ionViewWillEnter() {
    if (!this.authService.authenticated){
      this.presentLoginModal();
    }
  }
  
  presentLoginModal() {
    let loginModal = this.modalCtrl.create('LoginModalPage');
    loginModal.present();
    loginModal.onDidDismiss((data) => {
      if (data.event === "register"){
        let registerModal = this.modalCtrl.create('RegisterModalPage');
        registerModal.present();
      } else if (data.event === "cancel"){
        this.goToTab(0);
      }
    });
  }
  
  logout(){
    this.authService.logout().then(()=>{
      this.goToTab(0);
    });
  }
  
  private goToTab(index: number){
    let tabs: Tabs = this.navCtrl.parent;
    tabs.select(index);
  }

}
