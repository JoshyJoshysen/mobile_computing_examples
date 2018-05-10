import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { UserInterface } from "../../../interfaces/user.interface";
import { AuthService } from "../../../providers/auth-service/auth-service";

@IonicPage()
@Component({
  selector: 'page-register-modal',
  templateUrl: 'register-modal.html',
})
export class RegisterModalPage {
  user = {} as UserInterface;

  constructor(private viewCtrl: ViewController, private authService: AuthService) {
  }

  ionViewWillLoad() {
  
  }
  
  register(user: UserInterface): void {
    this.authService.register(user).then((res) => {
      console.log(res);
      let data = { 'event': 'register successful' };
      this.viewCtrl.dismiss(data);
    }, (err) => {
      console.error(err);
    });
  }

}
