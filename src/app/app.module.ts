import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ToastService } from '../providers/toast-service/toast-service';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AuthService } from '../providers/auth-service/auth-service';
import { DatabaseService } from '../providers/database-service/database-service';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBeSPk_JRJdkteFrzpkOx0otjgGtVELQQY",
  authDomain: "mobile-computing-91e02.firebaseapp.com",
  databaseURL: "https://mobile-computing-91e02.firebaseio.com",
  projectId: "mobile-computing-91e02",
  storageBucket: "mobile-computing-91e02.appspot.com",
  messagingSenderId: "280024706885"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastService,
    AuthService,
    DatabaseService
  ]
})
export class AppModule {}
