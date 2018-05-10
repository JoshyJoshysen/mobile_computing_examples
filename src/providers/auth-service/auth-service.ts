import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {UserInterface} from "../../interfaces/user.interface";

@Injectable()
export class AuthService {
  authState: any = null;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
  
  register(user: UserInterface): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
  
  login(user: UserInterface): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }
  
  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
  
  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
  
  get authenticated(): boolean {
    return this.authState !== null;
  }
}
