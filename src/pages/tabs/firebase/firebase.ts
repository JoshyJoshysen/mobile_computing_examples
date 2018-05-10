import { Component } from '@angular/core';
import { IonicPage, LoadingController, ModalController, NavController, Tabs } from 'ionic-angular';
import { AuthService } from "../../../providers/auth-service/auth-service";
import { UserInterface } from "../../../interfaces/user.interface";
import { DatabaseService } from "../../../providers/database-service/database-service";

@IonicPage()
@Component({
  selector: 'page-firebase',
  templateUrl: 'firebase.html',
})
export class FirebasePage {
  simpsons: any;

  constructor(private modalCtrl: ModalController,
              private authService: AuthService,
              private dbService: DatabaseService,
              private navCtrl: NavController,
              private loadingCtrl: LoadingController) {
    this.getAllSimpsons();
  }
  
  ionViewWillEnter() {
    if (!this.authService.authenticated){
      //this.presentLoginModal();
      
      const user: UserInterface = {email: "test@test.com", password: "Password"};
      this.authService.login(user).then((res) => {
        //console.log(res);
      });
    }
  }
  
  private getAllSimpsons(){
    let loading = this.loadingCtrl.create();
    loading.present();
    this.dbService.getSimpsons().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(simpsons => {
      this.simpsons = simpsons;
      loading.dismiss();
    });
  }
  
  ionViewDidEnter() {
  
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
  
  removeSimpson(simpson){
    let loading = this.loadingCtrl.create();
    loading.present();
    this.dbService.removeSimpsons(simpson.key).then(() => {
      loading.dismiss();
    });
  }
  
  updateSimpson(simpson){
    let updateSimpsonModal = this.modalCtrl.create('UpdateSimpsonModalPage', {simpson: simpson});
    updateSimpsonModal.present();
    updateSimpsonModal.onDidDismiss((data) => {
      if (data.simpson.key){
        let loading = this.loadingCtrl.create();
        loading.present();
        this.dbService.updateSimpsons(data.simpson.key, data.simpson).then(()=> {
          loading.dismiss();
        })
      }
    });
  }
  
  openAddSimpsonModal(){
    let addSimpsonModal = this.modalCtrl.create('AddSimpsonModalPage');
    addSimpsonModal.present();
    addSimpsonModal.onDidDismiss((data) => {
      if (data.simpson){
        let loading = this.loadingCtrl.create();
        loading.present();
        this.dbService.addSimpsons(data.simpson).then((res) => {
          loading.dismiss();
        })
      }
    });
  }
  
  private goToTab(index: number){
    let tabs: Tabs = this.navCtrl.parent;
    tabs.select(index);
  }

}
