import { Component } from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';
import { UserInterface } from "../../../interfaces/user.interface";
import { AuthService } from "../../../providers/auth-service/auth-service";

@IonicPage()
@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
})
export class LoginModalPage {
  user = {} as UserInterface;
  
  constructor(private viewCtrl: ViewController, private authService: AuthService) {
  }

  ionViewWillLoad() {
  
  }
  
  login(): void {
    this.authService.login(this.user).then((res) => {
      console.log(res);
      let data = {
        event: 'login',
        user: res
      };
      this.viewCtrl.dismiss(data);
    }, (err) => {
      console.error(err);
    });
  }
  
  goToRegister(): void {
    let data = { 'event': 'register' };
    this.viewCtrl.dismiss(data);
  }

}
