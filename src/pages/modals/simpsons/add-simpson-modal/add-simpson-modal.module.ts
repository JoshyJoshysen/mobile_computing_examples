import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSimpsonModalPage } from './add-simpson-modal';

@NgModule({
  declarations: [
    AddSimpsonModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSimpsonModalPage),
  ],
})
export class AddSimpsonModalPageModule {}
